import { FC, useEffect, useState } from 'react';
import { AuthService } from '@services/AuthService';
import s from '@s/components/index.module.scss';

interface SendMailAgainProps {
  email: string;
}

export const SendMailAgain: FC<SendMailAgainProps> = ({ email }) => {
  const [timer, setTimer] = useState(0);
  const [inter, setInter] = useState<NodeJS.Timer>();
  const localInterval = localStorage.getItem('interval');
  const sendMail = async () => {
    await AuthService.sendActivationMail(email);
  };

  const setTime = (time: number) => {
    setTimer(time);

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    setInter(interval);
    localStorage.setItem('interval', JSON.stringify(interval));
  };

  useEffect(() => {
    if (localInterval !== null) {
      setTime(40);
    }
  }, []);

  const sendMailAgain = () => {
    setTime(60);
    sendMail();
  };

  useEffect(() => {
    if (timer === 0 && inter !== undefined) {
      clearInterval(inter);
      localStorage.removeItem('interval');
    }
  }, [timer]);

  return (
    <div className={s.again}>
      <h3>Не пришло письмо?</h3>
      <ul>
        <li>
          <i className="fad fa-folder" />
          Проверьте папку Спам
        </li>
        <li>
          <i className="fad fa-redo-alt" />
          {timer === 0 && (
            <div className={s.linkAgain} aria-hidden onClick={sendMailAgain}>
              Отправить письмо еще раз
            </div>
          )}
          {timer !== 0 && <div>Доступно через: {timer} сек.</div>}
        </li>
      </ul>
    </div>
  );
};
