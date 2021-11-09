import { motion } from 'framer-motion'; // ! Add animation
import s from '@s/components/index.module.scss';

interface IButtonProps {
  disable?: boolean;
  onClickHandler?: () => void;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClickHandler,
  disable,
  className,
}) => {
  return (
    <button
      disabled={disable ?? false}
      onClick={onClickHandler}
      type="button"
      className={`${s.button} ${className && `${className}`}`}
    >
      <span>{children}</span>
    </button>
  );
};
