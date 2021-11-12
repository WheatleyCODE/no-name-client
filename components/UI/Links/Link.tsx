import { FC } from 'react';
import { useRouter } from 'next/router';
import s from '@s/components/index.module.scss';

interface LinkProps {
  href: string;
  className?: string;
}

export const Link: FC<LinkProps> = ({ href, children, className }) => {
  const router = useRouter();

  const onClickHanlder = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a onClick={onClickHanlder} className={`${s.link} ${className}`}>
      {children}
    </a>
  );
};
