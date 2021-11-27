import { FC, useEffect, useRef, useState } from 'react';
import { IconButton } from '@components';
import { Link, Element } from 'react-scroll';
import { categoriesMenuItems } from 'consts';
import s from '@s/components/index.module.scss';

interface MobileCategoriesProps {
  onCloseHandler: () => void;
}

export const MobileCategories: FC<MobileCategoriesProps> = ({ onCloseHandler }) => {
  const [activeCatalogIndx, setActiveCatalogInx] = useState<null | number>(null);
  const prevValue = useRef<null | number>(null);

  useEffect(() => {
    prevValue.current = activeCatalogIndx;
  }, [activeCatalogIndx]);

  const getClassName = (i: number) => {
    if (prevValue.current !== null && i === prevValue.current) {
      return s.links + ' ' + s.fadeOut;
    }

    return activeCatalogIndx === i ? s.links + ' ' + s.active : s.links;
  };

  const onClose = () => {
    if (activeCatalogIndx === null) {
      onCloseHandler();
      return;
    }

    setActiveCatalogInx(null);

    setTimeout(() => {
      onCloseHandler();
    }, 200);
  };

  const onShowCurrent = (i: number) => {
    if (activeCatalogIndx === i) {
      setActiveCatalogInx(null);
      return;
    }

    setActiveCatalogInx(i);
  };

  return (
    <>
      <div className={s.header}>
        <div className={s.bars}>
          <IconButton onClickHandler={onClose} className={s.big} icon="far fa-chevron-left" />
        </div>
        <h3>Категории</h3>
      </div>
      <div className={s.mobileCategories}>
        <ul>
          {categoriesMenuItems.map((itm, i) => (
            <>
              <Link key={itm.name} to={itm.name} delay={0} spy smooth offset={0} duration={1000}>
                <li
                  className={activeCatalogIndx === i ? s.items + ' ' + s.active : s.items}
                  key={itm.name}
                  onClick={() => onShowCurrent(i)}
                >
                  <i className={`${s.left} fal fa-angle-down`} />
                  <span>
                    <i className={itm.icon}></i>
                    {itm.name}
                  </span>
                  <i className={`${s.right} fal fa-angle-down`} />
                </li>
              </Link>

              {/* <Element
                name={itm.name}
                key={itm.name}
                className="container__collection"
              ></Element> */}
              <Element name={itm.name} className={getClassName(i)}>
                {itm.items.map((item) => (
                  <ul key={item.title}>
                    <h3>{item.title}</h3>

                    {item.links.map((el) => (
                      <li className={s.linksItem} key={el.name}>
                        <i className={`${s.right} fal fa-angle-right`} />
                        {el.name}
                      </li>
                    ))}
                  </ul>
                ))}
              </Element>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
