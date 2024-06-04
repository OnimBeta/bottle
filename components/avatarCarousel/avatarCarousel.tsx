'use client'

import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss'
import AvatarCarouselItem from "@/components/avatarCarouselItem/avatarCarouselItem";
import Image from "next/image";
import bottleSkin from '@/skins/vodka.svg'
import SpinningBottle from "@/components/SpinningBottle/SpinningBottle";
export interface IUser {
  id: number
  name: string
  image?: string
}

interface IAvatarCarouselProps {
  users: IUser[]
}

const AvatarCarousel: FC<IAvatarCarouselProps> = ({ users = []}) => {
  
  const [selectedUser, setSelectedUser] = useState<number | null>(null)
  
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * users.length)
      setSelectedUser(randomIndex)
    }, 3000)
    
    return () => {
      setSelectedUser(null)
      clearTimeout(timeout)
    }
  }, [users])
  
  return (
    <div className={styles.wrapper}>
      <SpinningBottle isSelected={selectedUser != null}/>
      <ul className={styles.carousel}>
        {users?.map(({id, image}, index) => (
          <AvatarCarouselItem
            key={id ?? index}
            img={image}
            users={users}
            index={index}
            selectedUser={selectedUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default AvatarCarousel;