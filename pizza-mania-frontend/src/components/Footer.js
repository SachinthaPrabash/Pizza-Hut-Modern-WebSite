import React from 'react'

function Footer() {
    return (
        <div className=''>
            <div className='bg-black   content-center  grid grid-cols-2 lg:grid-cols-4    gap-2  h-96  text-white text-xs tracking-wider'>


                <div className='text-center '>


                    <h3 className='mb-2 font-extrabold text-gray-500 text-sm'>Order Now</h3>
                    <p className='mb-2 hover:text-orange-500'>PROMOS</p>
                    <p className='mb-2 hover:text-orange-500'>PIZZAS</p>
                    <p className='mb-2 hover:text-orange-500'>PASTAS</p>
                    <p className='mb-2 hover:text-orange-500'>APPETIZERS</p>
                    <p className='mb-2 hover:text-orange-500'>RICE</p>
                    <p className='mb-2 hover:text-orange-500'>DESSERTS</p>
                    <p className='hover:text-orange-500'>BEVERAGES</p>

                </div>
                <div className='text-center '>

                    <h3 className='mb-2 font-extrabold text-gray-500 text-sm'>About</h3>
                    <p className='mb-2 hover:text-orange-500'>CAREERS</p>
                    <p className='mb-2 hover:text-orange-500'>ABOUT US</p>
                    <p className='mb-2 hover:text-orange-500'>FEEDBACK</p>
                    <p className='hover:text-orange-500'>HOTLINE</p>

                </div>
                <div className='text-center '>

                    <h3 className='mb-2 font-extrabold text-gray-500 text-sm'>Policy</h3>
                    <p className='mb-2 hover:text-orange-500'>TERMS & CONDITIONS</p>
                    <p className=' hover:text-orange-500'>PRIVACY POLICY</p>

                </div>
                <div className='text-center'>

                    <h3 className='mb-2 font-extrabold text-gray-500 text-sm'>My Pizza Hut</h3>
                    <p className=' hover:text-orange-500'>SIGN IN / REGISTER</p>

                </div>
            </div>

            <div className="text-center bg-black text-white text-sm" >
                <span className='text-xs' >© 2021 Copyright:  </span >
                <a className="font-semibold"> PIZZA MANIA</a>
            </div >
        </div >
    )
}

export default Footer