import React, {FC} from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import background from '@/backgrounds/layoutBackground.svg'
import profile from "@/buttons/profile.svg";
import rating from "@/buttons/rating.svg";
import shop from "@/buttons/shop.svg";
import settings from "@/buttons/settings.svg";
import BottomButton from "@/components/bottomButton/bottomButton";
import {routes} from "@/constants/routes";

const BaseLayout:FC<{ children: React.ReactNode}> = ({ children }) => {
  
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.footer}>
        <BottomButton
          href={routes.profile}
          src={profile}
          alt='profile'
        />
        <BottomButton
          href={routes.rating}
          src={rating}
          alt='rating'
        />
        <BottomButton
          href={routes.shop}
          src={shop}
          alt='shop'
        />
        <BottomButton
          href={routes.settings}
          src={settings}
          alt='settings'
        />
      </div>
      <Image
        src={background}
        alt='background image'
        className={styles.bg}
        priority
        fill
        sizes="100vh"
      />
    </main>
  );
};

export default BaseLayout;