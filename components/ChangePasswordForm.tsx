import { FC, useState } from 'react';
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

  let isCompare = true;

  if (password.default.value !== repeat.default.value) {
    isCompare = false;
  }

  const reset = async () => {
    try {
      await AuthService.resetPassword(email.default.value);
      setIsSendMail(true);
    } catch (e: any) {
      setShowError(e?.response?.data?.message);
    }
  };

  const change = async () => {
    if (!(typeof router.query.id === 'string')) return;

    try {
      await AuthService.changePassword(router.query.id, password.default.value);
      router.push(PathRoutes.LOGIN);
    } catch (e: any) {
      setShowError(e?.response?.data?.message);
    }
  };

  const onResetPassword = () => {
    if (!email.isError && email.default.value !== '' && !email.isError) {
      reset();
    }
  };

  const onChangePassword = () => {
    if (password.default.value !== '' && !password.isError && isCompare) {
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
            isError={!isCompare || password.isError}
            validError={(!isCompare && 'Пароли не совпадают') || password.validError}
          />
          <Input
            icon="far fa-unlock"
            defaultParams={repeat.default}
            isError={!isCompare || repeat.isError}
            validError={(!isCompare && 'Пароли не совпадают') || repeat.validError}
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

      {isSendMail && isEmail && (
        <SendMailAgain callback={() => onResetPassword()} email={email.default.value} />
      )}
    </div>
  );
};
