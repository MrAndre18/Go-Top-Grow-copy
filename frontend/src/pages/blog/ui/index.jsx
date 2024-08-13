import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { SITE_ROOT } from '../../../API/URLs';
import classes from './index.module.scss';
import { useFetching } from '../../../hooks/useFetching';
import BlogService from '../../../API/BlogService';
import SectionTitle from '../../../components/UI/SectionTitle/SectionTitle';
import { Posts } from '../../../widgets/posts-list';

export const Blog = () => {
  const getPostParams = {
    _fields: [
      'id',
      'date_gmt',
      'excerpt',
      'slug',
      'reading_time',
      'title',
      '_links.author',
      '_links.wp:featuredmedia',
      '_links.wp:term',
    ].toString(),
    _embed: [].toString(),
    _envelope: 1,
    per_page: 12
  }

  const
    [posts, setPosts] = useState([]),
    // Fetches
    [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
      const
        response = await BlogService
          .getPosts(getPostParams)

      console.log(response.data);

      setPosts(response.data.body || [])
    })

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <main className={['page', classes.blog].join(' ')}>
      <Helmet>
        <link rel="canonical" href={`${SITE_ROOT}/blog`} />
      </Helmet>

      <header
        className={`content section ${classes['blog__header']}`}
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 className={`f-h1 ${classes['blog__title']}`}>Blog</h1>
      </header>

      <section
        className={`content section ${classes['blog__content']}`}
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <SectionTitle>
          <span className='section__title-text--gold'>Latest</span> posts
        </SectionTitle>

        {/* Categories */}

        <Posts posts={posts} />
      </section>
    </main>
  )
}
