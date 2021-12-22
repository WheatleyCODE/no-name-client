import { motion } from 'framer-motion'; // ! Add animation
import s from '@s/components/index.module.scss';

interface ButtonProps {
  disable?: boolean;
  onClickHandler?: (e?: any) => void;
  className?: string;
  onMouseHadlers?: {
    onMouseEnter?: () => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
  };
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClickHandler, disable, className, onMouseHadlers } = props;
  return (
    <button
      {...onMouseHadlers}
      disabled={disable ?? false}
      onClick={onClickHandler}
      type="button"
      className={`${s.button} ${className && `${className}`}`}
    >
      <div className={s.place}>
        <span>{children}</span>
      </div>
    </button>
  );
};
