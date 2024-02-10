import SignIn from '@/components/SignIn'
import React from 'react'
import UserLayout from '@/components/BodyArchitecture/UserLayout'

export default function 
() {
  return (
    
    <UserLayout>
        <div className='w-full md:w-[80%] px-5  md:px-0 mx-auto'>
          <div className='my-20'>
          <SignIn/>
          </div>
     
        </div>
    </UserLayout>
   

  )
}
