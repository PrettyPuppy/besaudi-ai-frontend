import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="navbar bg-[#1D232A] p-5 border-b-2 border-gray-500 fixed top-0 z-50">
            <div className="flex-1">
                <Link href={'/'} className="text-4xl font-bold">♻ Saudi Fashion</Link>
            </div>
            <div className="flex-none px-3">
                <ul className='menu-horizontal px-3 menu font-medium text-base'>
                    <li>
                        <Link href={'/image-generator'}>Image Generator</Link>
                    </li>

                    <li>
                        <Link href={'#'}>Guides</Link>
                    </li>

                    <li>
                        <Link href={'#'}>API</Link>
                    </li>
                </ul>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <div className='text-right'>
                            <p>Tom Hart</p>
                            <p className='pt-2 text-xs text-slate-400'>Credit: 100</p>
                        </div>
                        <div className="w-10">
                            <img className='mask mask-circle' alt="Avatar" src="https://lh3.googleusercontent.com/a/ACg8ocKFk17COdJJYj9PmGWMLfp3AokWBb-svjt0FFRx82dHHvg=s288-c-no" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52 border-gray-500 border-2">
                        {/* <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li> */}
                        <li><Link href={'/'}>My Gallery</Link></li>
                        <li><Link href={'/'}>Settings</Link></li>
                        <li><Link href={'/'}>Privacy Policy</Link></li>
                        <li><Link href={'/'}>Terms of service</Link></li>
                        <li><Link href={'/'}>Log Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header