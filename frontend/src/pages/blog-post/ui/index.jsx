import { useParams } from 'react-router-dom';
import styles from './index.module.scss';
import { Helmet } from 'react-helmet';
import { SITE_ROOT } from '../../../API/URLs';
import { useEffect, useState } from 'react';
import { useFetching } from '../../../hooks/useFetching';
import BlogService from '../../../API/BlogService';
import parse from 'html-react-parser';

export const BlogPost = () => {
  const getPostParams = {
    _fields: [
      'id',
      'date_gmt',
      'modified_gmt',
      'content',
      'title',
      '_links.author',
      '_links.wp:featuredmedia',
      '_links.wp:term',
    ].toString(),
    _embed: [].toString(),
  }

  const
    { postSlug } = useParams(),
    [post, setPost] = useState({}),
    [htmlContent, setHtmlContent] = useState(),
    // Fetches
    [fetchPost, isPostLoading, postError] = useFetching(async () => {
      const
        response = await BlogService
          .getPostBySlug(postSlug, getPostParams)

      // console.log(response.data[0]);

      setPost({
        title: response.data[0].title.rendered,
        content: response.data[0].content.rendered,
        createDate: response.data[0].date_gmt,
        modifiedDate: response.data[0].modified_gmt,
        author: {
          id: response.data[0]._embedded?.author[0].id,
          img: response.data[0]._embedded?.author[0].avatar_urls['96'],
          name: response.data[0]._embedded?.author[0].name,
          slug: response.data[0]._embedded?.author[0].slug,
        },
        category: {
          id: response.data[0]?._embedded['wp:term'][0][0].id,
          name: response.data[0]?._embedded['wp:term'][0][0].name,
          slug: response.data[0]?._embedded['wp:term'][0][0].slug
        },
        img: response.data[0]?._embedded['wp:featuredmedia'] ?
          {
            src: response.data[0]?._embedded['wp:featuredmedia'][0].source_url,
            alt: response.data[0]?._embedded['wp:featuredmedia'][0].alt_text
          } : null,
        tags: response.data[0]?._embedded['wp:term'][1].map(tag => ({
          id: tag.id,
          name: tag.name,
          slug: tag.slug
        }))
      })
    })

  useEffect(() => {
    fetchPost()
  }, [])

  useEffect(() => {
    if (!post.content) return

    console.log('EXAMPLE: ', parse(post.content));

    setHtmlContent(parse(post.content, {
      replace: domNode => {
        let classes = []

        switch (domNode.name) {
          case 'p': {
            classes.push(styles['p'])

            break;
          }

          case 'h2':
          case 'h3':
          case 'h4': {
            const hType = domNode.name.slice(1)
            classes.push(`f-h${hType}`, styles[`h${hType}`])

            break;
          }

          case 'figure': {
            classes.push(styles['figure'])

            break;
          }

          case 'a': {
            classes.push(styles['link'])

            break;
          }

          case 'mark': {
            classes.push(styles['mark'])
            domNode.attribs.style = null

            break;
          }

          case 'ol': {
            classes.push(styles['ol'])

            break;
          }

          case 'ul': {
            classes.push(styles['ul'])

            break;
          }

          case 'li': {
            classes.push(styles['li'])

            break;
          }
        }

        //-- DEFAULT --//
        if (domNode.attribs) {
          !!domNode.attribs.class &&
            domNode.attribs.class.split(' ').forEach(className => {
              if (className.includes('has-text-align')) {
                classes.push(
                  styles[`text-align-${className.split('-').pop()}`]
                )
              }
              if (className.includes('is-vertically-aligned')) {
                classes.push(
                  styles[`vertical-align-${className.split('-').pop()}`]
                )
              }
              if (className.includes('is-layout-flex')) {
                classes.push(
                  styles[`flex`]
                )
              }
              if (className.includes('is-stacked-on-mobile')) {
                classes.push(
                  styles[`stacked-on-mobile`]
                )
              }
              if (
                className.includes('wp-block-media-text') &&
                !className.includes('wp-block-media-text__')
              ) {
                classes.push(
                  styles[`grid`],
                  styles[`media-text`]
                )
              }
              if (className.includes('wp-block-media-text__')) {
                classes.push(
                  styles[`media-text__${className.split('__').pop()}`]
                )
              }
            })

          domNode.attribs.className = classes.join(' ') || null
        }
      }
    }))
  }, [post])

  useEffect(() => {
    !!htmlContent && console.log(htmlContent);
  }, [htmlContent])

  return (
    <main className={['page', styles.post].join(' ')}>
      <Helmet>
        <link rel="canonical" href={`${SITE_ROOT}/blog/${postSlug}`} />
      </Helmet>

      <header
        className={['content', 'section', styles['post__header']].join(' ')}
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <h1 className={`f-h1 ${styles['post__title']}`}>{post.title}</h1>
      </header>

      <section
        className={['content', 'section', 'f-body-1', styles['post__content']].join(' ')}
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        {!!htmlContent && htmlContent}
      </section>
    </main>
  )
}
