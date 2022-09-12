import React from 'react'

import { DevicePhoneMobileIcon, PaperAirplaneIcon, UserIcon, MinusIcon } from '@heroicons/react/24/outline'

import MainLogo from '../Images/pizza-mania-vector.png'
import PizzaLogo from '../Images/pizza.png'

function Header() {
    return (
        <div  >

            <div className='static items-center  grid grid-cols-3  bg-gradient-to-tl from-gray-700 to-black  '>
                <div>
                    <img
                        className='lg:h-28 lg:w-48 md:h-28 md:w-36 h-24 w-32 ' src={MainLogo} alt='' />
                </div>

                <div className='flex col-span-2 justify-end items-center pr-8'>

                    <DevicePhoneMobileIcon className='h-8 w-8 text-white' />
                    <div className='m-2'>
                        <p className='text-gray-300 text-xs md:block hidden'>30 Mins or FREE</p>
                        <p className='text-gray-300 text-xs'>0772334556</p>
                    </div>

                    <MinusIcon className='h-8 w-8 text-gray-500 rotate-90 ' />
                    <div>
                        <PaperAirplaneIcon className='h-5 w-5 text-white -rotate-20' />
                        <p className='text-gray-300 text-xs'>Colombo</p>
                    </div>
                    <MinusIcon className='h-8 w-8 text-gray-500 rotate-90 ' />

                    <div>
                        <UserIcon className='h-5 w-5 text-white' />
                        <p className='text-gray-300 text-xs'>User</p>
                    </div>

                </div>


                <div className='absolute  md:block hidden w-full pt-28 px-3 '>
                    <div className='bg-red-600 h-14 rounded-2xl overflow-auto grid grid-cols-8 '>
                        <div className='flex items-center justify-center font-bold text-white'>PIZZAS</div>
                        <div className='flex items-center justify-center font-bold text-white'>PASTAS</div>
                        <div className='flex items-center justify-center font-bold text-white'>MEALS</div>
                        <div className='flex items-center justify-center font-bold text-white'>MORE</div>
                        <div className='flex items-center justify-center font-bold text-white'>OFFERS</div>
                        <div className='bg-yellow-500 col-start-6 col-end-9
                     flex items-center justify-center font-bold text-white'>
                            <img src={PizzaLogo} alt='' className='h-8 w-8 mr-2' />
                            START YOUR ORDER</div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Header