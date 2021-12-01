import { FC } from 'react';
import Image from 'next/image';
import { messengers } from 'consts';
import viber from 'public/viber.svg';
import telegram from 'public/telegram.svg';
import whatsapp from 'public/whatsapp.svg';

interface MessengersProps {
  width: string;
  height: string;
  className: string;
  text?: boolean;
}

export const Messengers: FC<MessengersProps> = ({ width, height, className, text = false }) => {
  const socials = {
    viber,
    telegram,
    whatsapp,
  };

  return (
    <ul className={className}>
      {messengers.map(({ name, link, img }) => (
        <li key={name}>
          <a target="_blank" href={link} rel="noreferrer">
            <Image width={width} height={height} src={socials[img]} alt={name} />
            {text && <span>{name}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
};
