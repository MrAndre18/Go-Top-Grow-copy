import { Collapse } from '@mui/material';
import React from 'react';
import { getSiteName } from '../../API/textMethods';
import { useTranslation } from 'react-i18next';

const AccordionContentItem = ({ title, content, link, linkPrefix }) => {
  return (
    <div className="accordion-item__content-item">
      <p className="content-item__title">{title}</p>
      <div className="content-item__block">
        {Array.isArray(content) ?
          content.map((item, index) => {
            return link ?
              <a
                key={index}
                className='content-item__block-item content-item__block-item-link'
                href={`${linkPrefix}${item}`}
              >
                {item}
              </a>
              :
              <p
                key={index}
                className='content-item__block-item'
              >
                {item}
              </p>
          }
          )
          : <>
            {
              link ?
                <a
                  className='content-item__block-item content-item__block-item-link'
                  href={`${linkPrefix}${link}`}
                >
                  {content}
                </a>
                :
                <p
                  className='content-item__block-item'
                >
                  {content}
                </p>
            }
          </>
        }
      </div>
    </div>
  )
}

const AccordionItem = ({
  item,
  index,
  isActive,
  activeId,
  setActiveId,
  pageLimit,
  page
}) => {
  const
    { t } = useTranslation()

  return (
    <li
      className={
        `accordion-item ${isActive ? 'accordion-item--active' : ''}`
      }
    >
      <button
        className="accordion-item__trigger"
        onClick={() => {
          activeId === item.id ?
            setActiveId(-1) :
            setActiveId(item.id)
        }}
      >
        <h4 className="accordion-item__title">
          {item.title}
          <span className="accordion-item__number">
            {page ?
              page === 1 ?
                index + 1
                : page * pageLimit - pageLimit + index + 1
              : index + 1}
          </span>
        </h4>

        <div className="accordion-item__trigger-circle">
          <span></span>
        </div>
      </button>

      <Collapse
        in={isActive}
        timeout={400}
      >
        {item.content ?
          <div
            className="accordion-item__content"
            dangerouslySetInnerHTML={{
              __html: `<p class="accordion-item__content-item">
              ${item.content}
              </p>`
            }}
          />
          :
          <div className="accordion-item__content">
            {item.tel &&
              <AccordionContentItem
                title={t('accordion.tel')}
                content={item.tel}
                link={item.tel}
                linkPrefix="tel:"
              />
            }

            {item.site &&
              <AccordionContentItem
                title={t('accordion.site')}
                content={getSiteName(item.site)}
                link={item.site}
                linkPrefix=""
              />
            }

            {item.email &&
              <AccordionContentItem
                title={t('accordion.email')}
                content={item.email}
                link={item.email}
                linkPrefix="mailto:"
              />
            }

            {item.minister &&
              <AccordionContentItem
                title={t('accordion.minister')}
                content={item.minister}
              />
            }
          </div>
        }
      </Collapse>
    </li>
  );
};

export default AccordionItem;