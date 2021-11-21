import s from '@s/components/index.module.scss';

interface IBackDropProps {
  onCloseHandler: () => void;
}

export const BackDrop: React.FC<IBackDropProps> = ({ onCloseHandler, children }) => (
  <div aria-hidden onClick={onCloseHandler} className={s.backdrop}>
    {children}
  </div>
);
