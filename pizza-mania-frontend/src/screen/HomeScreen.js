import React from 'react'
import offer1 from '../Images/offer- (1).jpg'
import offer2 from '../Images/offer- (2).jpg'
import offer3 from '../Images/offer- (3).jpg'
import { BoltIcon, BookmarkIcon, FireIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import CompanyDetailsBackground from '../Images/istockphoto-1201544779-612x612.jpg'

import product1 from '../Images/slider-reviews_1.png'
import product2 from '../Images/slider-reviews_2.png'
import product3 from '../Images/slider-reviews_3.png'

import NewsletterBG from '../Images/newsletter.jpg'

import test from '../Images/462773.jpg'


function HomeScreen() {
    return (
        <div >
            <div className='bg-auto' style={{ backgroundImage: `url(${CompanyDetailsBackground})` }}>
                <img src={test} alt=''
                    className='h-96 w-full object-cover ' />


                <div className='flex items-center justify-center mt-4 grid lg:grid-cols-3 md:grid-cols-6 gap-2 mb-3'>
                    <div className='bg-red-500 lg:col-start-1 lg:col-end-1 md:col-start-1 md:col-end-4'><img className='h-60 w-screen ' src={offer1} alt='' /></div>
                    <div className='bg-red-500 lg:col-start-2 lg:col-end-2 md:col-start-4 md:col-end-7'><img className='h-60 w-screen ' src={offer2} alt='' /></div>
                    <div className='bg-red-500 lg:col-start-3 lg:col-end-3 md:col-start-2 md:col-end-6'><img className='h-60 w-screen ' src={offer3} alt='' /></div>
                </div>

                {/* Company details */}

                <div className="h-auto  text-white flex items-center justify-items-center"   >
                    <div className=' pt-20  grid grid-rows-2  m-10 '>
                        <div className='text-center hh-20 ' >
                            <h1 className=' text-5xl font-bold text-yellow-500 content-center'>We are pizza makers, and our mission is to make cool pizza which feeds all your senses.</h1>
                            <p className='mt-5 text-center tracking-wider'>We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud.<br></br>
                                It’s pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family.
                                <br></br>And really, isn’t that what it’s all about? Because when pizza feeds all your senses, it’s not just great, it’s sensational.</p>
                        </div>

                        <div className='grid md:grid-cols-3 col-span-1 gap-5 m-5 '>
                            <div className=''>

                                <BoltIcon className='w-10 h-10 text-orange-500' />
                                <h3 className=' text-3xl text-yellow-400 font-bold tracking-wider'>We’re Careful</h3>
                                <p className='pt-5 text-justify'>The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a designated kit, and every pizza is freshly baked on designated parchment paper in our ovens.</p>
                            </div>
                            <div className=''>

                                <BookmarkIcon className='w-10 h-10 text-orange-500' />
                                <h3 className=' text-3xl text-yellow-400 font-bold tracking-wider'>We’re Certified</h3>
                                <p className='pt-5 text-justify'>Our cheese-only and cheese-and-pepperoni gluten-free pizzas are prepared using the procedures certified by the Gluten Intolerance Group (GIG), and we take specific caution when making these pizz.</p>
                            </div>
                            <div className=''>

                                <FireIcon className='w-10 h-10 text-orange-500' />
                                <h3 className=' text-3xl text-yellow-400 font-bold tracking-wider'>You’re Creativel</h3>
                                <p className='pt-5 text-justify'>For those simply looking to reduce gluten in their diets, we offer a Create Your Own pizza option. The cheese, pepperoni and marinara come from our gluten-free kit, but all additional toppings are stored at our standard make table.</p>
                            </div>

                        </div>

                        {/* pizza set */}

                        <div>
                            <div className='m-8 pb-3 text-white'>
                                <h1 className='flex justify-center items-center text-3xl text-yellow-500 font-extrabold'>Our Products</h1>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
                                <div>
                                    <div className="rounded-lg shadow-lg  max-w-xs hover:border-solid hover:border-2 hover:border-orange-600">
                                        <a className='flex items-center justify-center' href="#!">
                                            <img className="pt-3 " src={product1} alt="" />
                                        </a>
                                        <div className="p-6 ">
                                            <h5 className="flex items-center justify-center text-xl font-medium mb-2">Devilled Chicken</h5>
                                            <p className="text-sm mb-4 line-clamp-2">
                                                A flavoursome duo of chicken bacon and spicy potatoes on a fiery base of Nai Miris sauce complemented with crunchy onions and green chillies, topped with a layer of mozzarella cheese
                                            </p>
                                            <div className='grid grid-cols-2  mx-2 items-center m-3'>
                                                <div className=''>$ 12.50</div>
                                                <div className=''>
                                                    <button type="button" className="flex items-center  text-white font-medium text-xs 
                                     uppercase hover:border-yellow-700 hover:border-solid hover:border-2 ">
                                                        <ShoppingCartIcon className='h-5 w-5 mx-2' />
                                                        Add to Cart</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg shadow-lg  max-w-xs hover:border-solid hover:border-2 hover:border-orange-600">
                                        <a className='flex items-center justify-center' href="#!">
                                            <img className="pt-3 " src={product2} alt="" />
                                        </a>
                                        <div className="p-6 ">
                                            <h5 className="flex items-center justify-center text-xl font-medium mb-2">Cheese Lovers</h5>
                                            <p className="text-sm mb-4 line-clamp-2">
                                                Rich tomato sauce with a triple layer of mozzarella cheese.
                                            </p>
                                            <div className='grid grid-cols-2  mx-2 items-center m-3'>
                                                <div className=''>$ 12.50</div>
                                                <div className=''>
                                                    <button type="button" className="flex items-center  text-white font-medium text-xs 
                                     uppercase hover:border-yellow-700 hover:border-solid hover:border-2 ">
                                                        <ShoppingCartIcon className='h-5 w-5 mx-2' />
                                                        Add to Cart</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg shadow-lg  max-w-xs hover:border-solid hover:border-2 hover:border-orange-600">
                                        <a className='flex items-center justify-center' href="#!">
                                            <img className="pt-3 " src={product1} alt="" />
                                        </a>
                                        <div className="p-6 ">
                                            <h5 className="flex items-center justify-center text-xl font-medium mb-2">Tandoori Chicken</h5>
                                            <p className="text-sm mb-4 line-clamp-2">
                                                Tandoori chicken & onions with a double layer of cheese.
                                            </p>
                                            <div className='grid grid-cols-2  mx-2 items-center m-3'>
                                                <div className=''>$ 12.50</div>
                                                <div className=''>
                                                    <button type="button" className="flex items-center  text-white font-medium text-xs 
                                     uppercase hover:border-yellow-700 hover:border-solid hover:border-2 ">
                                                        <ShoppingCartIcon className='h-5 w-5 mx-2' />
                                                        Add to Cart</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg shadow-lg  max-w-xs hover:border-solid hover:border-2 hover:border-orange-600">
                                        <a className='flex items-center justify-center' href="#!">
                                            <img className="pt-3 " src={product3} alt="" />
                                        </a>
                                        <div className="p-6 ">
                                            <h5 className="flex items-center justify-center text-xl font-medium mb-2">Chicken Tri Party</h5>
                                            <p className="text-sm mb-4 line-clamp-2">
                                                A fusion of BBQ chicken, chicken bacon and sausages complemented with crunchy onions and bell pepper, topped with a layer of mozzarella cheese
                                            </p>
                                            <div className='grid grid-cols-2  mx-2 items-center m-3'>
                                                <div className=''>$ 12.50</div>
                                                <div className=''>
                                                    <button type="button" className="flex items-center  text-white font-medium text-xs 
                                     uppercase hover:border-yellow-700 hover:border-solid hover:border-2 ">
                                                        <ShoppingCartIcon className='h-5 w-5 mx-2' />
                                                        Add to Cart</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
                {/* News letter */}

                <div className='bg-cover w-full h-52' style={{ backgroundImage: `url(${NewsletterBG})` }}>
                    <h1 className='text-center text-black font-extrabold text-2xl tracking-wider pt-10 pb-5 '>Sign up for the newsletter and get exclusive deals.</h1>
                    <div className='flex items-center justify-center '>
                        <input type="text" id="first_name" className='py-2 px-4 mr-1  bg-transparent border-black border-2 outline-none placeholder:text-black placeholder:font-semibold ' placeholder='Enter Email Your Address' />
                        <button className='text-yellow-300 bg-black px-3 py-2 border-black border-2 hover:bg-orange-500 hover:text-white hover:ease-in'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeScreen