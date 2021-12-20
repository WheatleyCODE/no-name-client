import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface ReviewItemProps {
  review: any;
}

export const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  const getStars = (num: number) => {
    const starsArr = [];

    for (let i = 0; i < num; i++) {
      starsArr.push(
        <div className={s.star}>
          <i className="fas fa-star" />
        </div>
      );
    }
    return starsArr;
  };

  return (
    <div className={s.reviewItem}>
      <div className={s.rev}>
        <div className={s.userName}>{review.userName}</div>
        <div className={s.rate}>{getStars(review.rate)}</div>
        <div className={s.text}>{review.text}</div>
      </div>
      {review.answers.map((ans) => (
        <div key={ans.text} className={s.answer}>
          <div className={s.userName}>{ans.userName}</div>
          <div className={s.proove}>
            <i className="fad fa-check" />
          </div>
          <div className={s.text}>{ans.text}</div>
        </div>
      ))}
    </div>
  );
};
