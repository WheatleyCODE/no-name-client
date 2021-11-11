import { motion } from 'framer-motion'; // ! Add animation
import s from '@s/components/index.module.scss';

interface ButtonProps {
  disable?: boolean;
  onClickHandler?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClickHandler, disable, className }) => {
  return (
    <button
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
