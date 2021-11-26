import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface MobileMenuModalProps {}

export const MobileMenuModal: FC = ({ children }) => {
  return <div className={s.mobileMenuModal}>{children}</div>;
};
