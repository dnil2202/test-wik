import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn,signOut,useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import FormLoginComponent from './component/FormLoginComponent'
import regisImg from '../assets/mountains-7302806.jpg'
import { useEffect } from 'react'

export default function Home() {
  const {data: session, status}=useSession()
  const route = useRouter()

  useEffect(()=>{
    if(session){
      route.push('/home')
    }
  },[session])
  
    return (
        <div className=''>
            <div className='container mx-auto md:px-32 lg:grid grid-cols-3 pt-5'>
                <Image src={regisImg} className='h-full col-span-2 shadow-xl hidden lg:flex' alt='tes'/>
                <div className='bg-white drop-shadow-md'>
                    <FormLoginComponent/>
                </div>
            </div>
        </div>
    )
}
