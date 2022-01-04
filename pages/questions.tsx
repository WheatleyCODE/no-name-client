import type { NextPage } from 'next';
import { Link, MainLayout } from '@components';
import s from '@s/pages/index.module.scss';
import { Qustion } from '@components/QuestionsPage/Question';

const Questions: NextPage = () => {
  const questions = [
    {
      question: 'Как узнать код цвета автомобиля?',
      answer:
        'Что бы узнать код цвета автомобиля нужно раз два и специально для вас мы написаль статью',
      icon: 'fal fa-car',
    },
    {
      question: 'А что если краска не подойдет?',
      answer: 'Отвечая на ваш вопрос мы написали статью',
      icon: 'fal fa-tint-slash',
    },
    {
      question:
        'Я хочу самостоятельно произвести локальный ремонт ЛКМ автомобиля, но на вашем сайте нет всех нужных мне материалов',
      answer:
        'Да, так и есть наш сайт создат специально для таких таких людей, но мы являемся дочерней компанией от компании АвтоДжет там вы сможете купить все небходимое для кузовного авторемонта',
      icon: 'fal fa-store',
    },
    {
      question: 'Что с доставкой?',
      answer: 'Доставка осуществляется куда угодн окогда угодно',
      icon: 'fal fa-hand-holding-box',
    },
    {
      question: 'Какими способами я могу оплатить товар? 1',
      answer: 'Опталить заказ можно всеми удобными способами Visa, Mastercard, PayPal, и тд 1',
      icon: 'fal fa-wallet',
    },
    {
      question: 'Какими способами я могу оплатить товар? 2',
      answer: 'Опталить заказ можно всеми удобными способами Visa, Mastercard, PayPal, и тд 2',
      icon: 'fal fa-wallet',
    },
    {
      question: 'Какими способами я могу оплатить товар? 3',
      answer: 'Опталить заказ можно всеми удобными способами Visa, Mastercard, PayPal, и тд 3',
      icon: 'fal fa-wallet',
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
            <Qustion quest={quest} key={quest.answer} />
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
