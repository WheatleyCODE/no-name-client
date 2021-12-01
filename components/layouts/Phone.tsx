import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { transormPhone } from 'utils';
import { Portal, Modal, Logo } from '@components';
import { Messengers } from '@components';
import s from '@s/components/index.module.scss';

interface PhoneProps {
  phone: string;
  adaptive?: boolean;
}

export const Phone: FC<PhoneProps> = ({ phone, adaptive = false }) => {
  // ! mark
  const [showInfo, setShowInfo] = useState(false);
  const className = adaptive ? s.phoneAdaptive : s.phone;

  const onPhoneClickeHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowInfo(true);
  };

  return (
    <div className={className}>
      <a onClick={onPhoneClickeHandler} className={s.phoneNumber} href={`tel:+${phone}`}>
        {transormPhone(phone)}
      </a>

      <Messengers className={s.messengers} width={'33px'} height={'33px'} />

      <div onClick={() => setShowInfo(true)} className={s.phoneIcon}>
        <i className="fal fa-phone" />
      </div>

      <CSSTransition in={showInfo} timeout={200} classNames="modal" mountOnEnter unmountOnExit>
        <Portal>
          <Modal onCloseModal={() => setShowInfo((prev) => !prev)} stopScroll>
            <div className={s.modalPhoneInfo}>
              <div className={s.infoLogo}>
                <Logo />
              </div>
              <div className={s.infoTitle}>
                <h2>Пишите нам!</h2>
              </div>
              <h2>Обращайтесь по всем вопросам в мессенджеры, это очень удобно!</h2>
              <div>
                <Messengers text className={s.messengers} width={'45px'} height={'45px'} />
              </div>
              <div className={s.modalPhoneInfoNumber}>
                <h2>Или по телефону:</h2>
                <a className={s.phoneNumber} href={`tel:+${phone}`}>
                  {transormPhone(phone)}
                </a>
              </div>
            </div>
          </Modal>
        </Portal>
      </CSSTransition>
    </div>
  );
};
