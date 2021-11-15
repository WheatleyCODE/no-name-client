import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface AuthErorProps {
  error: string;
}

export const AuthError: FC<AuthErorProps> = ({ error }) => {
  return (
    <div className={s.authError}>
      <span>{error}</span>
    </div>
  );
};
