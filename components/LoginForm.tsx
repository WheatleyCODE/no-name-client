import { FC } from 'react';
import { InputType, useInput } from '@hooks';
import { Input } from '@components';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

interface LoginFormProps {
  reg?: boolean;
}

export const LoginForm: FC<LoginFormProps> = ({ reg = false }) => {
  const email = useInput('', 'Почта', InputType.EMAIL);
  const password = useInput('', 'Пароль', InputType.PASSWORD);
  const repeat = useInput('', 'Повторите пароль', InputType.PASSWORD);

  return (
    <div className={s.loginFrom}>
      <h1>{reg ? 'Регистрация' : 'Вход на сайт'}</h1>
      <div className={s.inputsBlock}>
        <Input
          icon="far fa-envelope"
          isError={email.isError}
          validError={email.validError}
          defaultParams={email.default}
        />
        <Input
          icon="far fa-unlock"
          isError={password.isError}
          validError={password.validError}
          defaultParams={password.default}
        />
        {reg && (
          <Input
            icon="far fa-unlock"
            isError={repeat.isError}
            validError={repeat.validError}
            defaultParams={repeat.default}
          />
        )}
        {!reg ? (
          <div className={s.links}>
            <div>Чекбокс</div>
            <div>Забыли пароль?</div>
          </div>
        ) : (
          <div className={s.reg} />
        )}
        <Button className={s.blue}>
          <span className={s.loginText}>
            {reg ? 'Зарегистрироваться' : 'Войти на сайт'} <i className="fad fa-sign-in-alt" />
          </span>
        </Button>
        <div className={s.register}>
          <span>{reg ? 'Есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}</span>
        </div>
      </div>
    </div>
  );
};
