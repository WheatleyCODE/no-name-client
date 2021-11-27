import { FC, useEffect, useState } from 'react';
import { InputType, useActions, useInput, useTypedSelector } from '@hooks';
import { Input, Link, Button, AuthError } from '@components';
import { PathRoutes } from 'consts';
import { useRouter } from 'next/router';
import s from '@s/components/index.module.scss';

interface LoginFormProps {
  reg?: boolean;
  onCloseHandler?: () => void;
  noTitle?: boolean;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { reg = false, onCloseHandler = null, noTitle = false } = props;

  console.log(noTitle);

  const email = useInput('', 'Почта', InputType.EMAIL);
  const password = useInput('', 'Пароль', InputType.PASSWORD);
  const repeat = useInput('', 'Повторите пароль', InputType.PASSWORD);
  const router = useRouter();
  const [checked, setCheked] = useState(true);
  const { loginAC, registrationAC, setAuthErrorAC } = useActions();
  const { authError } = useTypedSelector((state) => state.user);

  let isCompare = true;

  if (reg && password.default.value !== repeat.default.value) {
    isCompare = false;
  }

  const redirect = (path: PathRoutes) => {
    return () => {
      if (onCloseHandler) {
        onCloseHandler();
      }
      router.push(path);
    };
  };

  const onRegisterHandler = async () => {
    if (email.default.value === '' || password.default.value === '') return null;

    if (password.default.value === repeat.default.value) {
      await registrationAC(
        email.default.value,
        password.default.value,
        redirect(PathRoutes.ACTIVATE)
      );
    }
  };

  const onLoginHandler = async () => {
    if (email.default.value === '' || password.default.value === '') return null;
    await loginAC(email.default.value, password.default.value, redirect(PathRoutes.HOME));
  };

  useEffect(() => {
    if (authError !== null) {
      setAuthErrorAC(null);
    }
  }, [email.default.value, password.default.value]);

  return (
    <div className={s.loginFrom}>
      {!noTitle ? <h1>{reg ? 'Регистрация' : 'Вход на сайт'}</h1> : null}
      <div className={s.inputsBlock}>
        <Input
          icon="far fa-envelope"
          isError={email.isError}
          validError={email.validError}
          defaultParams={email.default}
        />
        <Input
          icon="far fa-unlock"
          isError={!isCompare || password.isError}
          validError={(!isCompare && 'Пароли не совпадают') || password.validError}
          defaultParams={password.default}
        />
        {reg && (
          <Input
            icon="far fa-unlock"
            isError={!isCompare || repeat.isError}
            validError={(!isCompare && 'Пароли не совпадают') || repeat.validError}
            defaultParams={repeat.default}
          />
        )}
        {!reg ? (
          <div className={s.links}>
            <div className={s.checkbox}>
              <label htmlFor="lol">
                <input
                  defaultChecked={checked}
                  onChange={() => setCheked((prev) => !prev)}
                  id="lol"
                  type="checkbox"
                />
                Запомнить меня
              </label>
            </div>
            <div>
              <Link href={PathRoutes.RESET}>Забыли пароль?</Link>
            </div>
          </div>
        ) : (
          <div className={s.reg} />
        )}
        <Button
          onClickHandler={() => {
            reg ? onRegisterHandler() : onLoginHandler();
          }}
          className={s.bluePull}
        >
          <span className={s.loginText}>
            {reg ? 'Зарегистрироваться' : 'Войти на сайт'} <i className="fad fa-sign-in-alt" />
          </span>
        </Button>
        {authError && <AuthError error={authError} />}
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
