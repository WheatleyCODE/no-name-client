import type { NextPage } from 'next';
import { Link, MainLayout } from '@components';
import s from '@s/pages/index.module.scss';

const Questions: NextPage = () => {
  const questions = [
    {
      question: 'Как узнать код цвета автомобиля?',
      answer: '',
    },
    {
      question: 'А что если краска не подойдет?',
      answer: '',
    },
    {
      question:
        'Я хочу самостоятельно произвести локальный ремонт ЛКМ автомобиля, но на вашем сайте нет всех нужных мне материалов',
      answer: '',
    },
    {
      question: 'Что с доставкой?',
      answer: '',
    },
    {
      question: 'Какими способами я могу оплатить товар?',
      answer: '',
    },
  ];
  return (
    <MainLayout
      description="Часто задаваемые вопросы"
      title="Часто задаваемые вопросы"
      keywords={['Часто задаваемые вопросы', 'вопросы', ' noname']}
    >
      <div className={s.questions}>
        <div className={s.width}>
          <h1 className={s.title}>Часто задаваемые вопросы</h1>
          {questions.map((quest) => (
            <div key={quest.answer} className={s.question}>
              <i className="fal fa-angle-down" />
              <h4>{quest.question}</h4>
              <i className="fal fa-angle-down" />
            </div>
          ))}

          <h4 className={s.pageDescription}>
            На странице мы собрали самые часто задаваемые вопросы
          </h4>
          <h3 className={s.moreQuestions}>
            Остались вопросы? {<Link href="#">пишите нам в месенджеры</Link>}, мы с радостью на них
            ответим
          </h3>
        </div>
      </div>
    </MainLayout>
  );
};

export default Questions;
