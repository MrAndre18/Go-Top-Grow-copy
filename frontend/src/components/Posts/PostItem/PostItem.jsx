import React, { useRef } from 'react';
import { Link, NavLink, useLocation, useOutletContext } from 'react-router-dom';
import './PostItem.scss';
import { getCategoriesByID } from '../../../API/categories';
import { cutString, cutStringAround, removeTags } from '../../../API/textMethods';
import Mark from "mark.js";
import { useEffect } from 'react';
import { API_ROOT } from '../../../API/URLs';

const PostItem = ({ post, searchQuery }) => {
  const
    { categories } = useOutletContext() || [],
    postCategories = categories ? getCategoriesByID(categories, post.cat) : [],
    location = useLocation().pathname,
    currentPath = location.split('/'),

    // Article content
    articleContent = post.content ?
      searchQuery ?
        cutStringAround(removeTags(post.content), searchQuery, post.content.length, '')
        : cutString(removeTags(post.content), post.content.length, '')
      : null,
    contentTextRef = useRef(null)

  currentPath.pop()

  useEffect(() => {
    if (contentTextRef.current) {
      const instance = new Mark(contentTextRef.current)

      instance.mark(searchQuery, {
        element: "mark",
        className: "highlight",
        accuracy: "complementary",
        wildcards: "enabled",
        ignorePunctuation: ":;.,-–—‒_(){}[]!'\"+=".split("")
      })
    }
  }, [contentTextRef.current, searchQuery])

  return (
    <div
      className={`post ${post.slug || post.law_slug ? 'post-type__law' : 'post-type__document'}`}
    >
      <Link
        className="post-link--absolute"
        to={post.file ?
          post.file.includes('http') ?
            post.file
            : `${API_ROOT}${post.file}`
          : `/laws/detail/${post.slug || post.law_slug}${post.number ? '#article-' + post.number : ''}`}
          target={post.file ? '_blank' : '_self'}
      />
      {post.number ?
        <p className="post-name">
          <span className="post-name__number">Article #{post.number}</span>
          {post.title}
        </p>
        : <p className="post-name">
          {post.title}
        </p>
      }

      {post.law_title &&
        <p className="post-law">
          {post.law_title}
        </p>
      }

      {articleContent &&
        <div className="post-content">
          <p
            className="post-content__text"
            ref={contentTextRef}
          >
            {articleContent}
          </p>
        </div>
      }

      {postCategories.length ? <div className="post-categories">
        {postCategories.map(category =>
          category &&
          <NavLink
            onClick={e => e.stopPropagation()}
            to={`${currentPath.join('/')}/${category.slug}`}
            key={category.id}
            className='post-category'
          >
            <span className="post-category__text">
              {category.name}
            </span>
          </NavLink>
        )}
      </div>
        : <></>}
    </div>
  );
};

export default PostItem;