import React from 'react'
import { Outlet, Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-9 py-9'>
                <div className='text-xl font-semibold'>resume-builder-react-app</div>
                <div className='flex gap-2 text-sm'>
                    <div className='px-[16px] py-[8px] border rounded-lg'>Git Repository</div>
                    <div className='px-[16px] py-[8px] border rounded-lg'>Domains</div>
                    <Link to={"/dashboard"}>
                        <div className='px-[16px] py-[8px] border rounded-lg bg-black text-white'>Visit</div>

                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default LandingPage