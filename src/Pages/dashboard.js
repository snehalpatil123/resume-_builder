import React from 'react'
import { Outlet, Link } from "react-router-dom";


const DashboardPage = () => {
  return (
    <div>
      Template
      <div className="w-[400px] border rounded-lg bg-white flex flex-col gap-[6px] p-[16px] ml-4">
        <div className="p-[12px] flex justify-start items-center gap-[8px] ">
          <img
            src="https://avatars.githubusercontent.com/u/46603495?v=4"
            alt="Img"
            height={"50px"}
            width={"50px"}
            style={{ borderRadius: "99px" }}
          />
          <div className="flex flex-col gap-[8px]">
            <Link to={"/landing"}>
              <div className="font-semibold text-[14px]">resume-builder-react-app</div>
              <div className="font-normal text-[14px]">resume-builder-react-app <span className="text-[10px]">vercel.app</span></div>
            </Link>
          </div>
        </div>
        <div claaName="text-[14px]">update</div>
        <div className="text-[12px]" >From main</div>
        <div className="text-[12px]">10 days ago</div>
        <Outlet />

      </div>
    </div>
  )
}

export default DashboardPage
