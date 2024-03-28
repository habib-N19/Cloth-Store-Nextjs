import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (
        <footer className='min-h-[40vh] mt-12 border divide-y container '>
            {/* top footer */}
            <div className='grid grid-cols-1 justify-between  md:grid-cols-4 gap-2 border my-6 md:mt-12  p-4 '>
                {/* TODO: Add separator from shadcn  */}
                <div className='col-span-1'>
                    <h1 className='text-2xl font-bold'>About Us</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <div className='col-span-1'>
                    <h1 className='text-2xl font-bold'>Quick Links</h1>
                    <ul className='mt-4'>
                        <li><Link href='/'>

                            Home
                        </Link>
                        </li>
                        <li><Link href='/mens-wear'>
                            Trending Products</Link></li>
                        <li><Link href='/mens-wear'>
                            Category</Link></li>
                        <li><Link href='/about'>
                            About Us</Link></li>
                        <li><Link href='/contact-us'>
                            Contact Us</Link></li>
                        <li><Link href='/customer-care'>
                            Customer Care</Link></li>

                    </ul>
                </div>
                <div className='col-span-1'>
                    <h1 className='text-2xl font-bold'>Contact Us</h1>
                    <ul className='mt-4'>
                        <li>Address: 1234 Main Street, Anytown, USA</li>
                        <li>Phone: 1-800-123-4567</li>
                        <li>Email:
                            <a href='mailto:abc@gmail.com' className='text-blue-500'>
                                abc@gmail.com</a>

                        </li>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <h1 className='text-2xl font-bold'>Follow Us</h1>
                    <ul className='mt-4'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            {/* bottom footer */}

            <div className='pt-6 pb-3'>
                <p className='text-center'>© {new Date().getFullYear()} All Rights Reserved. Designed by <span className='text-blue-500'></span></p>
            </div>


        </footer>

    )
}

export default Footer