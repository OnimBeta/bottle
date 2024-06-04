'use client'

import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import styles from './styles.module.scss'
import profileImage from '@/icons/avatar.svg'
import Image from "next/image";
import {IUser} from "@/components/avatarCarousel/avatarCarousel";
import greenArrow from '@/icons/arrowGreen.svg'
import redArrow from '@/icons/arrowRed.svg'

interface IAvatarCarouselItemProps {
  size?: number
  img?: string
  selectedUser: number | null
  users: IUser[]
  index: number,
}
const AvatarCarouselItem: FC<IAvatarCarouselItemProps> = ({
                                                            img,
                                                            size = 60,
                                                            users,
                                                            selectedUser,
                                                            index,
                                                          }) => {
  const [isSelected, setIsSelected] = useState(false)
  const isMatch = Math.random() < 0.5
  
  const preparedImage = img ?? profileImage
  
  const angle = (360 / users?.length) * index

  
  useEffect(() => {
    const isSelected = (selectedUser: number | null, index: number, users: IUser[]) => {
      if ( selectedUser === null ) {
        return false
      }
      if ( selectedUser === index ) {
        return true
      }
      if (selectedUser > Math.floor(users?.length / 2)) {
        return index === selectedUser - Math.floor(users?.length / 2)
      } else {
        return index === selectedUser + Math.floor(users?.length / 2)
      }
    }
    setIsSelected(isSelected(selectedUser, index, users))
  }, [users, selectedUser, index])
  
  useEffect(() => {
    

    if ( isSelected ) {
      const timer = setTimeout(() => {
      
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [isMatch, isSelected])
  
  
  return (
    <li
      className={styles.wrapper}
      style={{
        paddingBottom: isSelected ? '20vw' : '75vw',
        transform: `rotate(${angle}deg)`,
      }}
    >
      <Image
        src={preparedImage}
        alt='profile image'
        className={styles.img}
        width={size}
        height={size}
        style={{ transform: `rotate(${-angle}deg)`}}
      />
      {isSelected && (
        <div className={styles.arrow} style={{ transform: `rotate(${angle}deg)`}}>
          {isMatch ? (
            <Image src={greenArrow} alt='green arrow'/>
          ) : (
            <Image src={redArrow} alt='red arrow' />
          )}
        </div>
        )
      }
    </li>
  );
};

export default AvatarCarouselItem;