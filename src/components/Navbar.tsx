"use client"
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-transparent p-3 '>
                <Link href='/' className='inline-flex items-center p-2 mr-4 '>
                    <span className='text-xl text-white font-bold uppercase tracking-wide'>
                        Bingus!!!!!!!!!!!!
                    </span>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-[#FB8500] rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#FB8500] hover:text-white '>
                            Home
                        </Link>
                        <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#FB8500] hover:text-white'>
                            Services
                        </Link>
                        <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#FB8500] hover:text-white'>
                            About us
                        </Link>
                        <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#FB8500] hover:text-white'>
                            Contact us
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

