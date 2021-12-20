import { FC, useEffect } from 'react';
import s from '@s/components/index.module.scss';

interface MobileMenuModalProps {
  fixed?: boolean;
}

export const MobileMenuModal: FC<MobileMenuModalProps> = ({ children, fixed }) => {
  useEffect(() => {
    if (fixed) {
      // document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, []);
  return (
    <div style={{ position: fixed ? 'fixed' : 'absolute' }} className={s.mobileMenuModal}>
      {children}
    </div>
  );
};
