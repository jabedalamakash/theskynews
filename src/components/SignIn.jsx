"use client"
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import Link from 'next/link'
export default function SignIn() {
  return (
    <div className=''>
        <form action="" className='flex md:w-1/2 mx-auto flex-col'>
        <input type="text" placeholder='email' className='border-2 rounded-xl focus:outline-none p-5 mb-10' />
        <input type="text" placeholder='password' className='border-2 focus:outline-none rounded-xl p-5 mb-10'/>
        <button  type="submit"  className='border-2 bg-blue-600 text-white rounded-xl p-5 mb-10' >Log in</button>

        </form>
        <p className='md:w-1/2 text-center mx-auto'>New to The Sky News?
          <Link className='font-bold hover:text-blue-600 text-xl' 
          href="/signup"> Create an Account</Link>
        </p>
        
    </div>
  )
}
