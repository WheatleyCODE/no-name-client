import { FC } from 'react';
import { transormPhone } from 'utils';
import { messagers } from 'consts';
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
  const className = adaptive ? s.phoneAdaptive : s.phone;
  const socials = {
    viber,
    telegram,
    whatsapp,
  };

  return (
    <div className={className}>
      <a className={s.phoneNumber} href={`tel:+${phone}`}>
        {transormPhone(phone)}
      </a>
      <ul className={s.messagers}>
        {messagers.map((mes) => (
          <li key={mes.name}>
            <a href={mes.link}>
              <div className={s.socialImgs}>
                <Img width={'33px'} height={'33px'} src={socials[mes.img]} alt="viber" />
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a className={s.phoneIcon} href={`tel:+${phone}`}>
        <i className="fal fa-phone" />
      </a>
    </div>
  );
};
