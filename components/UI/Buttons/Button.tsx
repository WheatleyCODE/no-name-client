import { motion } from 'framer-motion';
import s from '@s/components/index.module.scss';

interface IButtonProps {
  buttonStyle: string;
  disable?: boolean;
  onClickHandler?: () => void;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  buttonStyle = 'default',
  onClickHandler,
  disable,
  className,
}) => {
  const styles = buttonStyle;

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
