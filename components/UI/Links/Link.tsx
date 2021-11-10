import { FC } from 'react';
import { useRouter } from 'next/router';
import s from '@s/components/index.module.scss';

interface LinkProps {
  href: string;
}

export const Link: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();

  const onClickHanlder = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a onClick={onClickHanlder} className={s.link}>
      {children}
    </a>
  );
};
