import { FC, useState } from 'react';
import { InputType, useInput } from '@hooks';
import { Button, Input, Logo, SendMailAgain } from '@components';
import s from '@s/components/index.module.scss';

export const ChangePasswordForm: FC = () => {
  const email = useInput('', 'Почта', InputType.EMAIL);
  const [isSendMail, setIsSendMail] = useState(false);

  const onClickHandler = () => {
    if (!email.isError) {
      setIsSendMail(true);
    }
  };

  return (
    <div className={s.changePasswordForm}>
      <div className={s.logoContainer}>
        <Logo />
      </div>
      <h1 className={s.emailTitle}>Для востановления пароля напишите свою почту</h1>
      <h2>На почту придет письмо с ссылкой для смены пароля</h2>
      {!isSendMail && (
        <div className={s.inputContainer}>
          <Input
            icon="far fa-envelope"
            validError={email.validError}
            isError={email.isError}
            defaultParams={email.default}
          />
          <div>
            <Button onClickHandler={onClickHandler} className={s.bluePull}>
              Востановить пароль
            </Button>
          </div>
        </div>
      )}
      {isSendMail && (
        <div className={s.sendMail}>
          <h3>
            Письмо было отправлено на почту: <span>{email.default.value}</span>
          </h3>
        </div>
      )}

      {isSendMail && <SendMailAgain email={email.default.value} />}
    </div>
  );
};
