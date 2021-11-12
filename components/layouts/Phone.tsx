import { FC } from 'react';
import { transormPhone } from 'utils';
import { messagers } from 'consts';
import s from '@s/components/index.module.scss';

interface PhoneProps {
  phone: string;
  adaptive?: boolean;
}

export const Phone: FC<PhoneProps> = ({ phone, adaptive = false }) => {
  const className = adaptive ? s.phoneAdaptive : s.phone;
  return (
    <div className={className}>
      <a className={s.phoneNumber} href={`tel:+${phone}`}>
        {transormPhone(phone)}
      </a>
      <div className={s.messagers}>
        {messagers.map((mes) => (
          <div key={mes.name}>
            <i className={mes.icon} />
          </div>
        ))}
      </div>
      <a className={s.phoneIcon} href={`tel:+${phone}`}>
        <i className="fal fa-phone" />
      </a>
    </div>
  );
};
