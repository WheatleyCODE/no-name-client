import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { InputType, useInput } from '@hooks';
import { Input } from '@components';
import { Button } from '@components';

interface LoginFormProps {
  action: string;
}

export const LoginForm: FC<LoginFormProps> = ({ action }) => {
  const email = useInput('', 'Почта', InputType.EMAIL);
  const password = useInput('', 'Пароль', InputType.PASSWORD);

  return (
    <div className={s.loginFrom}>
      <h1>{action}</h1>
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
        <div className={s.links}>
          <div>Чекбокс</div>
          <div>Забыли пароль?</div>
        </div>
        <Button className={s.blue}>
          <span className={s.loginText}>
            Войти на сайт <i className="fad fa-sign-in-alt" />
          </span>
        </Button>
        <div className={s.register}>
          <span>Нет аккаунта? Регистрация</span>
        </div>
      </div>
    </div>
  );
};
