import React from 'react';
import Link from "next/link";
import {routes} from "@/constants/routes";
import Image from "next/image";
import startGameIcon from "@/buttons//startGame.svg";
import styles from './styles.module.scss'

const StartGameButton = () => {
  
  const tableID = 1
  
  return (
    <div className={styles.wrapper}>
      <Link href={routes.game(tableID)}>
        <Image src={startGameIcon} alt='start game'/>
      </Link>
    </div>
  );
};

export default StartGameButton;