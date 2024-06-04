import React, {FC} from 'react';
import BottomButton from "@/components/bottomButton/bottomButton";
import {routes} from "@/constants/routes";
import back from "@/buttons/back.svg";

const Layout2: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>
      <BottomButton
        href={routes.home}
        src={back}
        alt='back'
      />
      {children}
    </>
  );
};

export default Layout2;