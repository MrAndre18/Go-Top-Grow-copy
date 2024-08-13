import React, { useEffect, useRef, useState } from 'react';
import './ContentModal.scss';
import { Modal, ModalClose } from '@mui/joy';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

const ContentModal = ({ title, content }) => {
  const
    [open, setOpen] = useState(false),

    contentRef = useRef(null),
    scrollOptions = {
      scrollbars: {
        autoHide: 'move',
        autoHideDelay: 1000,
        autoHideSuspend: true
      }
    },
    [initialize, instance] = useOverlayScrollbars({
      options: scrollOptions,
      events: {},
      defer: true
    })

  useEffect(() => {
    if (contentRef.current)
      initialize(contentRef.current);
  }, [initialize, contentRef.current]);

  return (
    <>
      <button className="content-modal__title"
        onClick={() => { setOpen(true) }}
      >
        {title}
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div
          className='content-modal__popup'
          data-overlayscrollbars-initialize
          ref={contentRef}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <p className="content-modal__popup-title">{title}</p>
          <p className="content-modal__popup-content"
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default ContentModal;