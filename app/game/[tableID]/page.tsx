  'use client'
  import React, {useEffect, useState} from 'react';
  import AvatarCarousel from "@/components/avatarCarousel/avatarCarousel";
  import {Button} from "@mui/base";
  
  const Page = ({}) => {
    
    const [users, setUsers] = useState<any[]>([])
    const createUser = (number: number) => ({
      id: number,
      name: `user_${number}`,
    })
    
    useEffect(() => {
      const users = new Array(10)
        .fill(null)
        .map((i, index) => createUser(index))
      
      setUsers(users)
      
    }, [])
    
    const dec = () => {
      setUsers(prevState => {
        const randomIndex = Math.floor(Math.random() * prevState.length)
        return prevState.filter((i, index) => index != randomIndex)
        }
      )
    }
    
    const inc = () => {
      setUsers((prevState) =>
        [...prevState, createUser(prevState.length)]
      )
    }
    return (
      <>
        <AvatarCarousel users={users}/>
        <div style={{ position: 'absolute', bottom: '20vh', }}>
          <Button onClick={()=> inc()}>
            +++
          </Button>
          <Button onClick={()=> dec()}>
            ---
          </Button>
        </div>
  
      </>
    );
  };
  
  export default Page;