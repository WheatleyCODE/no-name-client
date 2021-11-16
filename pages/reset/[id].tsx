import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ChangePasswordForm } from '@components';
import { useRouter } from 'next/router';
import { PathRoutes } from 'consts';
import { AuthService } from '@services/AuthService';
import s from '@s/pages/index.module.scss';

const Change: NextPage = () => {
  const router = useRouter();
  const [isLink, setIsLink] = useState(false);

  const check = async (link: string) => {
    try {
      await AuthService.checkResetPasswordLink(link);
      setIsLink(true);
    } catch (e) {
      router.push(PathRoutes.HOME);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      if (Array.isArray(router.query.id)) {
        router.push(PathRoutes.HOME);
        return;
      }

      check(router.query.id);
    }
  }, [router.query.id]);

  if (!isLink) {
    return null;
  }

  return (
    <div className={s.change}>
      <ChangePasswordForm />
    </div>
  );
};

export default Change;
