import React from 'react'
import Link from 'next/link'

export const Header=()=>{
    return(
    <div className='w-full  h-20 bg-gray-500'>
        
     

        <div className=''>
            <ul className='flex flex-col w-full '>
         <li className='text-2xl p-5 trux  border-stone-200 '><Link href="/">A propos</Link></li>
         <li className='text-2xl p-5 trux border-t-emerald-200 '><Link href="/accueil">Accueil</Link></li>
         <li className='text-2xl trux'>Peinure</li>
         <li className='text-2xl trux'><Link href="/digital">Digital</Link>   </li>
         <li className='text-2xl trux'>Contact</li>
            </ul>
        </div>
    </div>

    )
}