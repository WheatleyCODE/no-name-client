import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { ReviewItem } from '@components';

interface ReviewListProps {
  reviews: any;
}

export const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className={s.reviewList}>
      {reviews.map((rev, i) => (
        <ReviewItem key={i} review={rev} />
      ))}
      <div className={s.pagination}>
        {reviews.map((el) => (
          <div key={el.text} className={s.pagItem} />
        ))}
      </div>
    </div>
  );
};
