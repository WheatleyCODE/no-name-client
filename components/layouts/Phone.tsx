import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { transormPhone } from 'utils';
import { messagers } from 'consts';
import { Portal, Modal, Logo } from '@components';
import viber from 'public/viber.svg';
import telegram from 'public/telegram.svg';
import whatsapp from 'public/whatsapp.svg';
import Img from 'next/image';
import s from '@s/components/index.module.scss';

interface PhoneProps {
  phone: string;
  adaptive?: boolean;
}

export const Phone: FC<PhoneProps> = ({ phone, adaptive = false }) => {
  // ! mark
  const [showInfo, setShowInfo] = useState(false);
  const className = adaptive ? s.phoneAdaptive : s.phone;
  const socials = {
    viber,
    telegram,
    whatsapp,
  };

  const onPhoneClickeHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowInfo(true);
  };

  return (
    <div className={className}>
      <a onClick={onPhoneClickeHandler} className={s.phoneNumber} href={`tel:+${phone}`}>
        {transormPhone(phone)}
      </a>

      <ul className={s.messagers}>
        {messagers.map((mes) => (
          <li key={mes.name}>
            <a target="_blank" href={mes.link} rel="noreferrer">
              <div className={s.socialImgs}>
                <Img width={'33px'} height={'33px'} src={socials[mes.img]} alt={mes.name} />
              </div>
            </a>
          </li>
        ))}
      </ul>

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
                <ul className={s.messagers}>
                  {messagers.map((mes) => (
                    <li key={mes.name}>
                      <a target="_blank" href={mes.link} rel="noreferrer">
                        <div className={s.socialImgs}>
                          <Img
                            width={'45px'}
                            height={'45px'}
                            src={socials[mes.img]}
                            alt={mes.name}
                          />
                        </div>
                        <span>{mes.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
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
