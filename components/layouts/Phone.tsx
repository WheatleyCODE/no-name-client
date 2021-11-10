import { FC } from 'react';
import { transormPhone } from 'utils';
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
      <a className={s.phoneIcon} href={`tel:+${phone}`}>
        <i className="fal fa-phone" />
      </a>
    </div>
  );
};
