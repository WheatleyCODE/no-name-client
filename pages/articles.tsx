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
    'Как стать ниндзя?',
  ];
  return (
    <MainLayout description="Контакты" title="Контакты" keywords={['Контакты', 'noname']}>
      <div className={s.articles}>
        <div className={s.width}>
          <h1 className={s.title}>Статьи</h1>
          {articles.map((art) => (
            <div key={art} className={s.art}>
              <img
                src="https://www.stostayer.ru/assets/c26ed96d63a4484da19774f4706e2e68/1400x300/kuzov_wide_1.jpg"
                alt="авав"
              />
              <div className={s.text}>
                <h3>
                  <i className="fal fa-info"></i>
                  {art}
                </h3>
                <div className={s.description}>
                  Статья о том как написать статью о том о чем не можешь написать статью и вообще
                  если хочешь стать ниндзя тебе необходимо териооварать бросок сюрикена 24 часа в
                  сутки Самое лучшее описание, которое явно превосходит, все что есть. Главное стать
                  Статья о том как написать статью о том о чем не можешь написать статью и вообще
                  если хочешь стать ниндзя тебе необходимо териооварать бросок сюрикена 24 часа в
                  сутки Самое лучшее описание, которое явно превосходит, все что есть. Главное стать
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
