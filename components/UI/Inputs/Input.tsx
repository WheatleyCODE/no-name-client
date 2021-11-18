import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { InputType } from '@hooks';
import s from '@s/components/index.module.scss';

interface DefaultParams {
  type: InputType;
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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={s.InputContainer}>
      <CSSTransition in={isError} timeout={100} classNames={'modal'} mountOnEnter unmountOnExit>
        <span className={s.error}>{validError}</span>
      </CSSTransition>
      <input
        className={s.input}
        {...defaultParams}
        type={showPassword ? 'text' : defaultParams.type}
      />
      <i className={icon} />
      {defaultParams.type === InputType.PASSWORD && (
        <div
          title={!showPassword ? 'Показать пароль' : 'Скрыть пароль'}
          onClick={() => setShowPassword((prev) => !prev)}
          className={s.showPassword}
        >
          {!showPassword ? <i className="far fa-eye" /> : <i className="far fa-eye-slash" />}
        </div>
      )}
    </div>
  );
};
