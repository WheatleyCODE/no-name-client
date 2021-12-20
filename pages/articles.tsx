import { NextPage } from 'next';
import { MainLayout } from '@components';
import s from '@s/pages/index.module.scss';

interface ArticlesProps {}

const Articles: NextPage<ArticlesProps> = () => {
  const articles = [
    'Как подкрасить сколы',
    'Если эмаль не подойдет',
    'Статья один',
    'Еще одна',
    'Нет шансов',
  ];
  return (
    <MainLayout description="Контакты" title="Контакты" keywords={['Контакты', 'noname']}>
      <div className={s.articles}>
        <div className={s.width}>
          <h1 className={s.title}>Статьи</h1>
          {articles.map((art) => (
            <div key={art} className={s.art}>
              <div className={s.img}>
                <i className="fal fa-info"></i>
              </div>
              <div className={s.text}>
                <h3>{art}</h3>
                <div className={s.description}>
                  Самое лучшее описание, которое явно превосходит, все что есть. Главное стать
                  легендарным ниндзя
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Articles;
