import type { NextPage } from 'next';
import { Link, Loader, MainLayout, ReviewList, ReviewWrite } from '@components';
import s from '@s/pages/index.module.scss';
import { useAuth } from '@hooks';
import { PathRoutes } from 'consts';
import { useState } from 'react';

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

  const [activeStarIndex, setActiveStarIndex] = useState(0);

  const getStars = (num: number, active?: boolean) => {
    const starsArr = [];

    if (active) {
      for (let i = 0; i < num; i++) {
        starsArr.push(
          <div key={i} className={s.star}>
            <i className="fas fa-star" />
          </div>
        );
      }

      return starsArr;
    }

    for (let i = 0; i < num; i++) {
      starsArr.push(
        <div key={i} className={s.star}>
          <i className="fal fa-star" />
        </div>
      );
    }

    return starsArr;
  };

  return (
    <MainLayout description="Отзывы" title="Отзывы" keywords={['Отзывы', 'noname']}>
      <div className={s.reviews}>
        <div className={s.width}>
          <h1 className={s.title}>Отзывы о сайте</h1>
          <div className={s.lableStars}>
            <h3>Фильтры</h3>
          </div>
          <div className={s.filters}>
            <div className={s.stars}>
              {[1, 2, 3, 4, 5].map((el, i) => {
                return (
                  <div onClick={() => setActiveStarIndex(i + 1)} key={el} className={s.star}>
                    <div className={s.flex}>{getStars(el, el === activeStarIndex)}</div>
                  </div>
                );
              })}
              <div className={s.lable}>
                <span>Звезды</span>
                {activeStarIndex !== 0 && (
                  <span className={s.reset} onClick={() => setActiveStarIndex(0)}>Сбросить</span>
                )}
              </div>
            </div>
            <div className={s.date}>
              <select>
                <option>Последние</option>
                <option>Полезные</option>
              </select>
            </div>
          </div>
          {activeStarIndex !== 0 && <Loader />}
          {activeStarIndex === 0 && <ReviewList reviews={reviews} />}

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
