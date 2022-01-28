import type { NextPage } from 'next';
import { MainLayout } from '@components';
import { Link, Element } from 'react-scroll';
import { useState } from 'react';
import { carBrands } from 'consts';
import s from '@s/pages/index.module.scss';

const CarColor: NextPage = () => {
  const numbers: number[] = [];

  for (let i = 1; i < 25; i++) {
    numbers.push(i);
  }

  const [activeNum, setActiveNum] = useState([1, 24]);

  const [activeIndex, setActiveIndex] = useState(0);
  const hashLink = 'somerandomstring';

  const onBrandClick = (i: number, numbers: number[]) => {
    setActiveIndex(i);
    setActiveNum([...numbers]);
  };

  return (
    <MainLayout
      description="Узнать цвет автомобиля"
      title="Узнать цвет автомобиля"
      keywords={['Как узнать цвет автомобиля', 'noname']}
    >
      <div className={s.color}>
        <div className={s.width}>
          <h1 className={s.title}>Как узнать код цвета автомобиля?</h1>
          <div className={s.colorInfo}>
            <span>
              На многих автомобилях обозначение цветового код краски нанесено на заводскую табличку,
              которая находится в следующих местах.
            </span>{' '}
            <ul>
              <li>- Подкапотное пространство </li>
              <li>- Проемы передних дверей</li>
              <li>- Крепление передней стойки под капотом</li>
              <li>- Крышка багажника</li>
              <li>- Под запасным колесом.</li>
            </ul>
            <h4>
              Выберете марку, что бы посмотреть где находится табличка с кодом краски автомобиля
            </h4>
          </div>
          <div className={s.carNames}>
            {carBrands.map((brand, i) => (
              <Link
                onClick={() => onBrandClick(i, brand.numbers)}
                to={hashLink}
                spy
                smooth
                offset={-100}
                duration={500}
                className={i === activeIndex ? s.carName + ' ' + s.active : s.carName}
                key={i}
              >
                <span>
                  <i className="fal fa-car" />
                  {brand.brandName}
                </span>
              </Link>
            ))}
          </div>
          <div>
            <span className={s.brandName}>{carBrands[activeIndex].brandName}</span>
            {activeNum.map((num, i) => (
              <span key={num} className={s.number}>
                {num}
                {i !== activeNum.length - 1 && ','}
              </span>
            ))}
          </div>
          <Element name={hashLink} className={s.carImg}>
            <img src="http://192.168.88.18:5000/cars.jpg" alt="car" />
            {numbers.map((num) => {
              let isActive = false;

              activeNum.forEach((actNum) => {
                if (num === actNum) {
                  isActive = true;
                }
              });

              console.log(isActive);

              return (
                <img
                  className={isActive ? s.show : s.display}
                  key={num}
                  src={`http://192.168.88.18:5000/table/car_${num}.png`}
                  alt="car"
                />
              );
            })}
          </Element>
          <h2 className={s.titleTwo}>Альтертативные варианты</h2>

          <div className={s.text}>
            <i className="fal fa-book" />
            <div>
              <h3>Сервисная книжка</h3>
              <span>
                Если на вашем авто отсутствует табличка с цветовым кодом, как указанно выше, то
                следует посмотреть цветовой код в сервисной книжке, поставляемой заводом -
                изготовителем в комплекте с автомобилем.
              </span>
            </div>
          </div>
          <div className={s.text}>
            <i className="fal fa-server" />
            <div>
              <h3>Найти в нашей базе</h3>
              <span>
                Нами собрана база цветовых кодов авто иностранного производства, которая позволяет
                узнать цветовой код введя марку, модель и год производства авто. Если ваш автомобиль
                произведен в до 2014 года, то можете смело пользоваться нашей бесплатной базой
                цветовых кодов.
              </span>
            </div>
          </div>
          <div className={s.text}>
            <i className="fal fa-search" />
            <div>
              <h3>Узнать код краски по ВИН номеру</h3>
              <span>
                Узнать код краски можно по заводскому вин коду авто, многие производители
                зашифровывают цветовой код в идентификационный номер автомобиля, который указан у
                Вас в свидетельстве о регистрации на автомобиль. Вводите вин код авто и узнаете код
                краски.
              </span>
            </div>
          </div>
          <div className={s.text}>
            <i className="fal fa-phone-office" />
            <div>
              <h3>Обращение к оффициальному дилеру</h3>
              <span>
                Если все вышеперечисленные способы не дали нужного результата, то последний из
                возможных вариантов – это обращение к официальному дилеру, который специализируется
                по продаже авто вашей марки. С большой вероятностью они смогут сообщить цветовой код
                вашего авто.
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CarColor;
