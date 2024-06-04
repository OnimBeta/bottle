'use client'

import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import Image from "next/image";
import vodka from '@/skins/vodka.svg'
import beer from '@/skins/beer.svg'
import wine from '@/skins/wine.svg'
import water from '@/skins/water.svg'
import cola from '@/skins/cola.svg'

interface ISpinningBottleProps {
  className?: string
  selectedBottleID?: number
  isSelected: boolean
}
const SpinningBottle: FC<ISpinningBottleProps> = ({ className = '', selectedBottleID, isSelected }) => {
  
  const [selectedSkin, setSelectedSkin] = useState<string>('')
  
  
  useEffect(() => {
    const availableSkins = [vodka, beer, wine, water, cola]
    const randomID = Math.floor(Math.random() * availableSkins.length)
    const selectedSkinID = selectedBottleID || randomID
    const selectedSkin = availableSkins[selectedSkinID]
    setSelectedSkin(selectedSkin)
  },[selectedBottleID])
  
  if (!selectedSkin || isSelected) {
    return null
  }
  
  return (
    <>
      <Image
        src={selectedSkin}
        alt='bottle'
        className={styles.bottle+ ' ' + className}
      />
    </>
  );
};

export default SpinningBottle;