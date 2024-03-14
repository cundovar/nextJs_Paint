import React from 'react'
import Link from 'next/link'

export const Header=()=>{
    return(
    <div className='w-full  h-20 bg-gray-500'>
        <h1 className='text-3xl font-bold underline'>NAV</h1>
        <div className='w-full flex  '>
            <h4 className=' '>connexion</h4>
        </div>

        <div className=''>
            <ul className='flex w-full space-x-7'>
         <li className='p-5 trux  border-stone-200 '><Link href="/">a propos</Link></li>
         <li className='p-5 trux border-t-emerald-200 '><Link href="/accueil">accueil</Link></li>
         <li className='trux'>contact</li>
            </ul>
        </div>
    </div>

    )
}