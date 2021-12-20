import { FC, useState } from 'react';
import { InputType, useInput } from '@hooks';
import { Button, Input, Link } from '@components/UI';
import s from '@s/components/index.module.scss';

interface ReviewWriteProps {}

export const ReviewWrite: FC<ReviewWriteProps> = () => {
  const nameInput = useInput('', 'Имя / Никнейм', InputType.TEXT);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(true);

  return (
    <div className={s.reviewWrite}>
      <form className={s.form}>
        <h3 className={s.title}>Написать отзыв</h3>
        <Input
          icon="fal fa-user"
          validError={nameInput.validError}
          isError={nameInput.isError}
          defaultParams={nameInput.default}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ваш отзыв"
          className={s.textarea}
        />
        <div className={s.rules}>
          <label>
            <input
              defaultChecked={checked}
              onChange={() => setChecked((prev) => !prev)}
              type="checkbox"
            />
            <span>Принимаю </span>
            <Link href="#">Правила общения на сайте</Link>
          </label>
        </div>
        <Button disable={!checked} className={s.bluePull}>
          Оставить отзыв
        </Button>
      </form>
    </div>
  );
};
