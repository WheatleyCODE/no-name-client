import { FC } from 'react';
import { ReviewItem } from '@components';
import s from '@s/components/index.module.scss';

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
        {reviews.map((el, i) => (
          <div key={el.text} className={s.pagItem}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
