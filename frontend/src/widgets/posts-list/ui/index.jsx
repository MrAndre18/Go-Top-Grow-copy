import classes from './index.module.scss';
import { Post } from '../../../entities/post';

export const Posts = ({ posts }) => {
  return (
    <div className={classes.posts}>
      <ul className={classes['posts__list']}>
        {posts.map(post =>
          <li
            key={post.id}
            className={classes['posts__item']}
          >
            <Post
              id={post.id}
              slug={post.slug}
              title={post.title.rendered}
              desc={post.excerpt.rendered}
              date={post.date_gmt}
              img={post?._embedded['wp:featuredmedia'] ?
                {
                  src: post?._embedded['wp:featuredmedia'][0].source_url,
                  alt: post?._embedded['wp:featuredmedia'][0].alt_text
                } : null
              }
              category={{
                id: post?._embedded['wp:term'][0][0].id,
                name: post?._embedded['wp:term'][0][0].name,
                slug: post?._embedded['wp:term'][0][0].slug
              }}
              // readTime={ }
              // rating={ }
              author={{
                id: post._embedded?.author[0].id,
                img: post._embedded?.author[0].avatar_urls['96'],
                name: post._embedded?.author[0].name,
              }}
              tags={post?._embedded['wp:term'][1].map(tag => ({
                id: tag.id,
                name: tag.name,
                slug: tag.slug
              }))}
            />
          </li>
        )}
      </ul>

      {/* Pagination */}
    </div>
  )
}
