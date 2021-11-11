import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from '@s/components/index.module.scss';

interface DefaultParams {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputProps {
  defaultParams: DefaultParams;
  icon: string;
  validError: string;
  isError: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const { defaultParams, icon, validError, isError } = props;

  return (
    <div className={s.InputContainer}>
      <CSSTransition in={isError} timeout={100} classNames={'modal'} mountOnEnter unmountOnExit>
        <span className={s.error}>{validError}</span>
      </CSSTransition>
      <input className={s.input} {...defaultParams} />
      <i className={icon} />
    </div>
  );
};
