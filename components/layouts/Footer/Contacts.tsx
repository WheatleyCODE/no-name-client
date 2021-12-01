import { FC } from 'react';
import { Link } from '@components';
import { transormPhone } from 'utils';
import { messagers, PHONE } from 'consts';
import Image from 'next/image';
import viber from 'public/viber.svg';
import telegram from 'public/telegram.svg';
import whatsapp from 'public/whatsapp.svg';
import s from '@s/components/index.module.scss';

interface ContactsProps {}

export const Contacts: FC<ContactsProps> = () => {
  const socials = {
    viber,
    telegram,
    whatsapp,
  };

  return (
    <div className={s.contacts}>
      <div className={s.icons}>
        <ul className={s.messagers}>
          {messagers.map((mes) => (
            <li key={mes.name}>
              <a target="_blank" href={mes.link} rel="noreferrer">
                <div className={s.container}>
                  <Image width={'45px'} height={'45px'} src={socials[mes.img]} alt={mes.name} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.phoneNumber}>
        <a href={`tel:+${PHONE}`}>{transormPhone(PHONE)}</a>
      </div>
      <div className={s.email}>
        <Link className={s.linkWhite} href={`tel:+${PHONE}`}>
          qb.wheatley@gmail.com
        </Link>
      </div>
    </div>
  );
};
