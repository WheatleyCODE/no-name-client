import type { NextPage } from 'next';
import { MainLayout, ColorTable, CarBrandsList, Link, CarImages } from '@components';
import { wrapper } from '@store';
import { NextThunckDispatch } from '@store/reducers';
import { setCurrentCarBrandAC, setCurrentCarBrandIndexAC } from '@store/actions-creators/carColor';
import { useTypedSelector } from '@hooks';
import { carBrands } from 'consts';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import s from '@s/pages/index.module.scss';

export const getServerSideProps = wrapper.getServerSideProps((store): any => ({ query }: any) => {
  const { carColor } = store.getState();
  if (carColor.currentCarBrand.brandName === query.brand) return;

  const dispatch = store.dispatch as NextThunckDispatch;
  const index = carBrands.findIndex((brand) => query.brand === brand.brandName);

  if (index !== -1) {
    dispatch(setCurrentCarBrandIndexAC(index));
    dispatch(setCurrentCarBrandAC({ ...carBrands[index] }));
  }
});

const CarColor: NextPage = () => {
  const { currentCarBrand } = useTypedSelector((state) => state.carColor);
  const router = useRouter();

  useEffect(() => {
    if (currentCarBrand.brandName !== router.query.brand) {
      router.push({
        query: {
          brand: currentCarBrand.brandName,
        },
      });
    }
  }, [router.query]);

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
            </span>
            <ul>
              <li>- Подкапотное пространство</li>
              <li>- Проемы передних дверей</li>
              <li>- Крепление передней стойки под капотом</li>
              <li>- Крышка багажника</li>
              <li>- Под запасным колесом.</li>
            </ul>
            <h4>
              <span>
                Выберете марку, что бы посмотреть где находится табличка с кодом краски автомобиля
              </span>
              <i className="fal fa-arrow-alt-down" />
            </h4>
          </div>
          <CarBrandsList />
          <CarImages />
          <div className={s.photoBlock}>
            <h4>Как выглядит табличка с кодом цвета автомобиля {currentCarBrand.brandName} ?</h4>
            <ColorTable url={null} />
          </div>
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
              <div className={s.dataSearch}>
                <Link href="#">
                  <span className={s.textLink}>
                    Найти в нашей базе <i className="fad fa-hand-point-left" />
                  </span>
                </Link>
              </div>
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
              <div className={s.winCheck}>
                <Link href="#">
                  <span className={s.textLink}>
                    Узнать код краски WIN номеру <i className="fad fa-hand-point-left" />
                  </span>
                </Link>
              </div>
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
