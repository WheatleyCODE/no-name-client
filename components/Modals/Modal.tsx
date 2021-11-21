import { useEffect } from 'react';
import { BackDrop } from './BackDrop';
import { IconButton } from '@components';
import s from '@s/components/index.module.scss';

interface IModalProps {
  children: React.ReactNode;
  onCloseModal: () => void;
  stopScroll?: boolean;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { children, onCloseModal, stopScroll = false } = props;

  useEffect(() => {
    if (stopScroll) {
      const { platform } = window.navigator;

      if (platform === 'Win32') {
        document.body.style.paddingRight = '17px';
      }

      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  return (
    <BackDrop onCloseHandler={onCloseModal}>
      <div onClick={(e) => e.stopPropagation()} className={s.modal}>
        {children}
        <div title="Закрыть" className={s.closeButton}>
          <IconButton onClickHandler={onCloseModal} icon="fal fa-times" />
        </div>
      </div>
    </BackDrop>
  );
};
