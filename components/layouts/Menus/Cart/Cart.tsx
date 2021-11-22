import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDebounce } from '@hooks';
import { Button, CartCounter, MiniCart } from '@components';
import s from '@s/components/index.module.scss';

export const Cart: FC = () => {
  const [isHoverButtonOver, setIsHoverButtonOver] = useState(false);
  const [isHoverButtonEnter, setIsHoverButtonEnter] = useState(false);

  const [isHoverCartOver, setIsHoverCartOver] = useState(false);
  const [isHoverCartEnter, setIsHoverCartEnter] = useState(false);

  const closeCartButton = useDebounce(() => setIsHoverButtonOver(false), 1000);
  const closeCart = useDebounce(() => setIsHoverCartOver(false), 1000);

  const onMouseHandlersButton = {
    onMouseOver: () => {
      setIsHoverButtonOver(true);
    },

    onMouseEnter: () => {
      setIsHoverButtonEnter(true);
    },

    onMouseLeave: () => {
      closeCartButton();
      setIsHoverButtonEnter(false);
    },
  };

  const onMouseHandlersCart = {
    onMouseEnter: () => {
      setIsHoverCartEnter(true);
    },

    onMouseOver: () => {
      setIsHoverCartOver(true);
    },

    onMouseLeave: () => {
      closeCart();
      setIsHoverCartEnter(false);
    },
  };

  return (
    <div className={s.cart}>
      <Button onMouseHadlers={onMouseHandlersButton} className={s.orange}>
        <span>
          <i className="fal fa-shopping-cart" />
        </span>
        <CartCounter count={3} />
      </Button>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isHoverButtonOver || isHoverCartOver || isHoverButtonEnter || isHoverCartEnter}
        timeout={150}
        classNames={'modal'}
      >
        <MiniCart onMouseHandlers={onMouseHandlersCart} />
      </CSSTransition>
    </div>
  );
};
