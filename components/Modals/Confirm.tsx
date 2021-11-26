import { FC } from 'react';
import { BackDrop } from '@components';
import { Button } from '@components/UI';
import s from '@s/components/index.module.scss';

interface ConfirmProps {
  children: React.ReactNode;
  onCloseModal: () => void;
  onUpprove: () => void;
  stopScroll?: boolean;
}

export const Confirm: FC<ConfirmProps> = ({ onCloseModal, children, onUpprove }) => {
  const cancelAction = () => {
    onCloseModal();
  };

  const upproveAction = () => {
    onUpprove();
    onCloseModal();
  };

  return (
    <BackDrop onCloseHandler={onCloseModal}>
      <div onClick={(e) => e.stopPropagation()} className={s.confirm}>
        {children}
        <div className={s.buttons}>
          <Button onClickHandler={upproveAction} className={s.orangePull}>
            Да
          </Button>
          <Button onClickHandler={cancelAction} className={s.bluePull}>
            Нет
          </Button>
        </div>
      </div>
    </BackDrop>
  );
};
