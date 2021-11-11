import { FC } from 'react';
import { InputType, useInput } from '@hooks';
import { Input, Link, Button } from '@components';
import { PathRoutes } from 'consts';
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
            <div className={s.checkbox}>
              <label htmlFor="lol">
                <input id="lol" type="checkbox" />
                Запомнить меня
              </label>
            </div>
            <div>
              <Link href={PathRoutes.REGISTRATION}>Забыли пароль?</Link>
            </div>
          </div>
        ) : (
          <div className={s.reg} />
        )}
        <Button className={s.bluePull}>
          <span className={s.loginText}>
            {reg ? 'Зарегистрироваться' : 'Войти на сайт'} <i className="fad fa-sign-in-alt" />
          </span>
        </Button>
        <div className={s.register}>
          {reg ? (
            <>
              <span>Есть аккаунт?</span> <Link href={PathRoutes.LOGIN}>Войти</Link>
            </>
          ) : (
            <>
              <span>Нет аккаунта?</span>{' '}
              <Link href={PathRoutes.REGISTRATION}>Зарегистрироваться</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
