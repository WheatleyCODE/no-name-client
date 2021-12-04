import { FC, useEffect, useRef, useState } from 'react';
import { Link, Events, animateScroll } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import { Logo } from '@components';
import { titles } from 'consts';
import s from '@s/components/index.module.scss';

interface StickyLinksProps {}

export const StickyLinks: FC<StickyLinksProps> = () => {
  const [className, setClassName] = useState('');
  const [showLogo, setShowLogo] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [skipSteps, setSkipSteps] = useState(0);
  const prevValue = useRef<null | number>(null);

  useEffect(() => {
    prevValue.current = currentStep;
  }, [currentStep]);

  const ref = useRef<HTMLUListElement | null>(null);

  const scrollHandler = (e: any, height: number) => {
    const top = e.target?.documentElement.scrollTop;

    if (height === 0) return;

    const marginTop = 60;

    if (top > height + marginTop) {
      setClassName(s.shadow);
      setShowLogo(true);
    } else {
      setClassName('');
      setShowLogo(false);
    }
  };

  useEffect(() => {
    const nodes: any = document.querySelector('main')?.childNodes;

    const nodesArr = [...nodes];
    const height = nodesArr.reduce((acc, node, i) => {
      return i < 4 ? acc + node.offsetHeight : acc;
    }, 0);

    const callBack = (e: any) => scrollHandler(e, height);

    document.addEventListener('scroll', callBack);
    return () => document.removeEventListener('scroll', callBack);
  }, []);

  Events.scrollEvent.register('end', () => {
    window.scrollBy(0, 2);
  });

  const checkSteps = (currentStep: number) => {
    if (prevValue.current === null) return;

    const prevStep = prevValue.current;

    if (prevStep < currentStep && currentStep - prevStep > 1) {
      setSkipSteps(currentStep - prevStep - 1);
    } else if (prevStep > currentStep && prevStep - currentStep > 1) {
      setSkipSteps(prevStep - currentStep - 1);
    }

    setCurrentStep(currentStep);
  };

  const paddingLeft = 60;
  const margin = 10;

  const onActivateLink = (linkNumber: number) => {
    setCurrentStep(linkNumber);

    if (skipSteps > 0) {
      setSkipSteps((prev) => prev - 1);
      return;
    }

    if (ref.current) {
      const any: any = ref.current.childNodes;
      const arrNodes = [...any];

      const scrollX = arrNodes.reduce(
        (acc, node, inx) => {
          if (inx === 0 && inx < linkNumber) {
            return acc + (node.offsetWidth + margin);
          }

          if (inx < linkNumber + 1) {
            return acc + (node.offsetWidth + margin);
          }

          return acc;
        },
        linkNumber === 0 ? -paddingLeft : -10
      );

      ref.current.scrollTo(scrollX, 0);
    }
  };

  return (
    <div className={s.stickyLinks + ' ' + className}>
      <ul ref={ref} className={s.width + ' ' + (showLogo ? s.paddingLeft : s.paddingBack)}>
        <CSSTransition in={showLogo} timeout={200} classNames="leftFade">
          <div className={s.showLogo}>
            <Logo
              onClickHandler={() => {
                animateScroll.scrollToTop();
              }}
              noText
            />
          </div>
        </CSSTransition>
        {titles.map((title, i) => (
          <Link
            to={title.title}
            spy
            offset={-60}
            smooth
            onSetActive={() => onActivateLink(i)}
            onClick={() => checkSteps(i)}
            activeClass={s.active}
            duration={500}
            key={title.title}
            className={s.navLinks}
          >
            <h4>{title.title}</h4>
          </Link>
        ))}
      </ul>
    </div>
  );
};
