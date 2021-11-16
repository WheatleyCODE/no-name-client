import { FC, useEffect, useState } from 'react';
import { InputType, useInput } from '@hooks';
import { Button, Input, Logo, SendMailAgain, AuthError } from '@components';
import { AuthService } from '@services/AuthService';
import { useRouter } from 'next/router';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface ChangePasswordFormProps {
  isEmail?: boolean;
}
export const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ isEmail = false }) => {
  const email = useInput('', 'Почта', InputType.EMAIL);
  const password = useInput('', 'Пароль', InputType.PASSWORD);
  const repeat = useInput('', 'Пароль еще раз', InputType.PASSWORD);
  const router = useRouter();
  const [isSendMail, setIsSendMail] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);

  const reset = async () => {
    AuthService.resetPassword(email.default.value);
  };

  useEffect(() => {
    if (router.query.id) {
      console.log(router.query.id, 'eff');
    }
  }, [router.query.id]);

  const change = async () => {
    if (typeof router.query.id === 'string' && password.default.value !== '' && !password.isError) {
      try {
        await AuthService.changePassword(router.query.id, password.default.value);
        router.push(PathRoutes.LOGIN);
      } catch (e) {
        setShowError(e?.response?.data?.message);
      }
    }
  };

  const onResetPassword = () => {
    if (!email.isError) {
      setIsSendMail(true);
      reset();
    }
  };

  const onChangePassword = () => {
    if (!email.isError) {
      change();
    }
  };

  return (
    <div className={s.changePasswordForm}>
      <div className={s.logoContainer}>
        <Logo />
      </div>
      <h1 className={s.emailTitle}>
        {isEmail ? 'Для востановления пароля напишите свою почту' : 'Задайте новый пароль'}
      </h1>
      {isEmail && <h2>На почту придет письмо с ссылкой для смены пароля</h2>}
      {!isSendMail && isEmail && (
        <div className={s.inputContainer}>
          <Input
            icon="far fa-envelope"
            validError={email.validError}
            isError={email.isError}
            defaultParams={email.default}
          />
          <div>
            <Button onClickHandler={onResetPassword} className={s.bluePull}>
              Востановить пароль
            </Button>
          </div>
          {showError && <AuthError error={showError || ''} />}
        </div>
      )}
      {!isEmail && (
        <div className={s.inputContainer}>
          <Input
            icon="far fa-unlock"
            defaultParams={password.default}
            isError={password.isError}
            validError={password.validError}
          />
          <Input
            icon="far fa-unlock"
            defaultParams={repeat.default}
            isError={repeat.isError}
            validError={repeat.validError}
          />
          <div>
            <Button onClickHandler={onChangePassword} className={s.bluePull}>
              Изменить пароль
            </Button>
          </div>
          {showError && <AuthError error={showError || ''} />}
        </div>
      )}
      {isSendMail && isEmail && (
        <div className={s.sendMail}>
          <h3>
            Письмо было отправлено на почту: <span>{email.default.value}</span>
          </h3>
        </div>
      )}

      {isSendMail && isEmail && <SendMailAgain email={email.default.value} />}
    </div>
  );
};
