import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className='border-r border-gray-600 p-5'>
            {/* logo */}
            <Link href={"/"} className='flex gap-3 items-center'>
                <div className='flex-all w-10 h-10 bg-primary rounded-lg'>
                    <Logo />
                </div>
                <div>
                    <h1 className='antialiased'>Frontend labs</h1>
                    <p className='text-xs text-text-light'>Beta</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar

const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="22"
            fill="none"
            viewBox="0 0 31 25"
        >
            <path
                fill="#fff"
                d="M0 9.5V5l5-5h20l5 5v4.5h-2l-5-5H5v5l4 5.165V23.5H4v-8.835L0 9.5z"
            ></path>
            <path fill="#fff" d="M8 8l4.5 5h4L28 24.5h2.5V20l-12-12H8z"></path>
        </svg>
    )
}