import React from 'react'
import AppNav from './AppNav'
import AppFooter from './AppFooter'

export default function userLayout({children}) {
  return (
    <div className=''>
        <AppNav/>
       {children}
       <AppFooter/>
    </div>
  )
}
