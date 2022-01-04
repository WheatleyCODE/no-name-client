import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from '@s/components/index.module.scss';

interface QustionProps {
  quest: {
    question: string;
    answer: string;
    icon: string;
  };
}

export const Qustion: FC<QustionProps> = ({ quest }) => {
  const { question, answer, icon } = quest;
  const [show, setShow] = useState(false);

  return (
    <div aria-hidden onClick={() => setShow((p) => !p)} className={s.qstin} key={answer}>
      <div className={s.question}>
        <i className={icon} />
        <h4>{question}</h4>
      </div>
      <CSSTransition in={show} timeout={200} classNames="width" mountOnEnter unmountOnExit>
        <div onClick={(e) => e.stopPropagation()} className={s.answer}>
          <span>
            <i className="fal fa-horizontal-rule" />
            {answer}
          </span>
        </div>
      </CSSTransition>
    </div>
  );
};
