import s from '@s/components/index.module.scss';

interface IconButtonProps {
  onClickHandler?: () => void;
  icon: string;
  className: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClickHandler, className }) => {
  return (
    <button
      onClick={onClickHandler}
      type="button"
      className={`${s.iconButton} ${className && `${className}`}`}
    >
      <i className={icon} />
    </button>
  );
};
