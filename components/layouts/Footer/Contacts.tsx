import { FC } from 'react';
import { Link, Messengers } from '@components';
import { transormPhone } from 'utils';
import { PHONE } from 'consts';
import s from '@s/components/index.module.scss';

interface ContactsProps {}

export const Contacts: FC<ContactsProps> = () => {
  return (
    <div className={s.contacts}>
      <div className={s.icons}>
        <Messengers className={s.messengers} width={'45px'} height={'45px'} />
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
