import type { NextPage } from 'next';
import { MainLayout, Messengers } from '@components';
import s from '@s/pages/index.module.scss';
import { PHONE } from 'consts';
import { transormPhone } from 'utils';
import { YMaps, Map } from 'react-yandex-maps';

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
                <div>qb.wheatley@gmail.com</div>
              </div>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-phone" />
                  <span>Телефоны:</span>
                </div>
                <div>{transormPhone(PHONE)}</div>
                <div>{transormPhone('79108821300')}</div>
              </div>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-comment" />
                  <span>Мессенджеры:</span>
                </div>
                <Messengers className={s.messangers} width="45" height="45" />
              </div>
              <div className={s.section}>
                <div className={s.lable}>
                  <i className="fal fa-store" />
                  <span>Магазины:</span>
                </div>
                <div className={s.adress}>г. Нижний Новгород, ул. Удмурская 10</div>
                <div className={s.adress}>г. Нижний Новгород, проспект Кирова 2А</div>
                <div className={s.adress}>г. Нижний Новгород, ул. Радионова 38</div>
              </div>
            </div>
            <div className={s.map}>
              <YMaps>
                <div>
                  My awesome application with maps!
                  <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contacts;
