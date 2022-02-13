import type { NextPage } from 'next';
import { MainLayout, Messengers } from '@components';
import s from '@s/pages/index.module.scss';
import { PHONE } from 'consts';
import { transormPhone } from 'utils';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [56.287187, 43.889574],
  zoom: 10,
};

const coordinates = [
  [56.287187, 43.889574],
  [56.248916, 43.867349],
  [56.31552, 44.068815],
];

const Contacts: NextPage = () => {
  return (
    <MainLayout description="Контакты" title="Контакты" keywords={['Контакты', 'noname']}>
      <div className={s.contacts}>
        <div className={s.width}>
          <h1 className={s.title}>Контакты</h1>
          <div className={s.flex}>
            <div className={s.info}>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-envelope" />
                  <span>Почта:</span>
                </div>
                <div className={s.content}>qb.wheatley@gmail.com</div>
              </div>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-phone" />
                  <span>Телефоны:</span>
                </div>
                <div className={s.content}>{transormPhone(PHONE)}</div>
                <div className={s.content}>{transormPhone('79108821300')}</div>
              </div>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-comment" />
                  <span>Мессенджеры:</span>
                </div>
                <div className={s.content}>
                  <Messengers className={s.messangers} width="45" height="45" />
                </div>
                <div className={s.content}>{transormPhone(PHONE)}</div>
              </div>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-store" />
                  <span>Магазины:</span>
                </div>
                <div className={s.adress + ' ' + s.content}>
                  г. Нижний Новгород, ул. Удмурская 10
                </div>
                <div className={s.adress + ' ' + s.content}>
                  г. Нижний Новгород, проспект Кирова 2А
                </div>
                <div className={s.adress + ' ' + s.content}>
                  г. Нижний Новгород, ул. Радионова 38
                </div>
              </div>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-store" />
                  <span>Режим работы магазинов:</span>
                </div>
                <div className={s.content + ' ' + s.time}>Пн - Пт: c 9:00 до 18:00</div>
                <div className={s.content + ' ' + s.time}>Суббота: c 9:00 до 14:00</div>
                <div className={s.content + ' ' + s.time}>Воскресенье: Выходной</div>
              </div>
            </div>
            <div className={s.map}>
              <YMaps>
                <Map height="100%" width="100%" defaultState={mapData}>
                  {coordinates.map((coordinate, i) => (
                    <Placemark key={i} geometry={coordinate} />
                  ))}
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contacts;
