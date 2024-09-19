import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import SidebarWidget from './SidebarWidget'

export default function Sidebar(props) {
const{toggleTab,openTab,isLeft} = props


  return (
    <div className='fixed'>
      <div className='relative'>
        {/* {openTab && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm -z-50 w-72"></div>
        )} */}

       <div className={`${openTab ?"w-72 bg-[#2a303885]":"w-24 bg-[#2a3038]"}  min-h-screen relative text-white pl-2 pt-20 sm:pt-20`}>

        <i className={`fa-solid ${isLeft ? "fa-circle-right":"fa-circle-left"} absolute right-8 text-2xl sm:text-4xl top-96 cursor-pointer hover:text-accent`} onClick={toggleTab}></i>


        <div className='flex flex-col mt-16 px-5 gap-5'>
            <Link to="/">
              <SidebarWidget openTab = {openTab} name = 'My Team ' sec='fa-solid fa-people-group text-2xl sm:text-4xl'/>
            </Link>
            <Link to="/GroupedTeamMembers">
              <SidebarWidget openTab = {openTab} name = 'All Members' sec='fa-solid fa-address-card text-2xl sm:text-4xl'/>
            </Link>
            <Link to="/ProjectAssignment">
              <SidebarWidget openTab = {openTab} name = 'Project' sec='fa-solid fa-bars-progress text-2xl sm:text-4xl'/>
            </Link>
            <Link to="/TeamList">
              <SidebarWidget openTab = {openTab} name = 'Workload' sec='fa-solid fa-briefcase text-2xl sm:text-4xl'/>
            </Link>
            
            
            
          
            
        </div>

        </div>

      </div>
   
    </div>



  )
}
