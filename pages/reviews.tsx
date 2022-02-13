import type { NextPage } from 'next';
import { Link, Loader, MainLayout, ReviewList, ReviewWrite } from '@components';
import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { PathRoutes } from 'consts';
import { useAuth } from '@hooks';
import s from '@s/pages/index.module.scss';

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
  const [activeDateFilter, setActiveDateFilter] = useState<null | string>(null);

  const options = [
    {
      value: 5,
      label: (
        <>
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
        </>
      ),
    },
    {
      value: 4,
      label: (
        <>
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
        </>
      ),
    },
    {
      value: 3,
      label: (
        <>
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
        </>
      ),
    },
    {
      value: 2,
      label: (
        <>
          <i className={`fas fa-star ${s.yellow}`} />
          <i className={`fas fa-star ${s.yellow}`} />
        </>
      ),
    },
    { value: 1, label: <i className={`fas fa-star ${s.yellow}`} /> },
  ];

  const filterDate = [
    {
      value: 'last',
      label: 'Последние',
    },
    {
      value: 'cool',
      label: 'Полезные',
    },
  ];

  const onChangeStars = (newValue: SingleValue<{ value: number; label: JSX.Element }>) => {
    if (newValue?.value) {
      setActiveStarIndex(newValue.value);
    }
  };

  const onChangeDateFilter = (newValue: SingleValue<{ value: string; label: string }>) => {
    if (newValue?.value) {
      setActiveDateFilter(newValue.value);
    }
  };

  const onResetFilters = () => {
    setActiveStarIndex(0);
    setActiveDateFilter(null);
  };

  return (
    <MainLayout description="Отзывы" title="Отзывы" keywords={['Отзывы', 'noname']}>
      <div className={s.reviews}>
        <div className={s.width}>
          <h1 className={s.title}>Отзывы о сайте</h1>
          <div className={s.lableStars}>
            <h3>Фильтры</h3>
            <div className={s.lable}>
              {(activeStarIndex !== 0 || activeDateFilter !== null) && (
                <span className={s.reset} onClick={onResetFilters}>
                  Сбросить
                </span>
              )}
            </div>
          </div>
          <div className={s.filters}>
            <div className={s.stars}>
              <Select
                isSearchable={false}
                onChange={onChangeStars}
                placeholder={'Звезды'}
                options={options}
              />
            </div>
            <div className={s.date}>
              <Select
                isSearchable={false}
                onChange={onChangeDateFilter}
                placeholder={'Новые'}
                options={filterDate}
              />
            </div>
          </div>
          {activeStarIndex !== 0 || activeDateFilter !== null ? (
            <Loader />
          ) : (
            <ReviewList reviews={reviews} />
          )}

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
