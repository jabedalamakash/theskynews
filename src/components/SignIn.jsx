"use client"
import UserLayout from '@/components/BodyArchitecture/UserLayout'
import Link from 'next/link'
export default function SignIn() {
  return (
    <div>
        <form action="">
        <input type="text" placeholder='email' />
        <input type="text" placeholder='password'/>
        <button  type="submit" >Log in</button>

        </form>
        <p>New to The Sky News? <Link href="/signup">Create an Account</Link></p>
        
    </div>
  )
}
