import { FC } from 'react';
import { useInput, InputType } from '@hooks';
import { Button, Input } from '@components';
import s from '@s/components/index.module.scss';

interface PromocodeProps {}

export const Promocode: FC<PromocodeProps> = () => {
  const promo = useInput('', 'Промокод', InputType.PROMOCODE);

  return (
    <div className={s.promocode}>
      <Input
        defaultParams={promo.default}
        isError={promo.isError}
        validError={promo.validError}
        icon={'none'}
      />
      <div className={s.buttonBlock}>
        <Button className={s.bluePull}>
          <span className={s.text}>Активировать</span>
          <span className={s.icon}>
            <i className="fal fa-arrow-alt-right" />
          </span>
        </Button>
      </div>
    </div>
  );
};
