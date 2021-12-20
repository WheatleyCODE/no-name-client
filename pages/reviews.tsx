import type { NextPage } from 'next';
import { Link, MainLayout, ReviewList, ReviewWrite } from '@components';
import s from '@s/pages/index.module.scss';
import { useAuth } from '@hooks';
import { PathRoutes } from 'consts';

const Reviews: NextPage = () => {
  const { isAuth } = useAuth();

  const reviews = [
    {
      userName: 'Вася',
      text: 'Мне все очень понравилось!',
      rate: 5,
      answers: [
        {
          userName: 'Админ',
          text: 'Спасибо за ваш отзыв Вася! ))',
        },
      ],
    },
    {
      userName: 'Петя',
      text: 'А мне ничего не понравилось, мой заказ потерялся его номер 1234, очень плохо!',
      rate: 2,
      answers: [
        {
          userName: 'Админ',
          text: 'Спасибо за ваш отзыв Петя, у нас действительн возникли сложности с логистикой данного заказа, сейчас мы разбираемся с этим и с Вами свяжуться для решения проблемы',
        },
      ],
    },
    {
      userName: 'Lurke',
      text: 'Брал краску АБВГДЕЕЖ, подошла как влитая, класс!',
      rate: 5,
      answers: [],
    },
  ];

  return (
    <MainLayout description="Отзывы" title="Отзывы" keywords={['Отзывы', 'noname']}>
      <div className={s.reviews}>
        <div className={s.width}>
          <h1 className={s.title}>Отзывы о сайте</h1>
          <ReviewList reviews={reviews} />

          {isAuth && <ReviewWrite />}
          {!isAuth && (
            <div className={s.needLogin}>
              <div className={s.color}>
                <div>Что бы оставить отзыв, вам необходимо войти на сайт</div>
                <Link href={PathRoutes.LOGIN}>Войти</Link>
                <Link href={PathRoutes.REGISTRATION}>Регистрация</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Reviews;
