import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import SidebarWidget from './SidebarWidget'

export default function Sidebar(props) {
const{toggleTab,openTab,isLeft} = props


  return (
    <div className='fixed'>
      <div className='relative'>
        {openTab && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm -z-50 w-60 sm:w-72"></div>
        )}

       <div className={`${openTab ?" w-60 sm:w-72 bg-[#27374d73]":"w-16 sm:w-24 bg-dark"}  min-h-screen relative text-white pl-0 sm:pl-2 pt-20 sm:pt-20`}>


        <div className='flex flex-col mt-16 px-0 sm:px-5 gap-5'>
            <Link to="/">
              <SidebarWidget openTab = {openTab} name = 'My Team ' sec='fa-solid fa-people-group text-xl sm:text-2xl'/>
            </Link>
            <Link to="/GroupedTeamMembers">
              <SidebarWidget openTab = {openTab} name = 'All Members' sec='fa-solid fa-address-card text-xl sm:text-2xl'/>
            </Link>
            <Link to="/ProjectAssignment">
              <SidebarWidget openTab = {openTab} name = 'Project' sec='fa-solid fa-bars-progress text-xl sm:text-2xl'/>
            </Link>
            <Link to="/TeamList">
              <SidebarWidget openTab = {openTab} name = 'Workload' sec='fa-solid fa-briefcase text-xl sm:text-2xl'/>
            </Link>

            
            <i className={`fa-solid ${isLeft ? "fa-circle-right translate-x-5 sm:translate-x-3":"fa-circle-left translate-x-52 sm:translate-x-48"} text-xl sm:text-2xl cursor-pointer hover:text-accent`} onClick={toggleTab}></i>


            <div>

            </div>
            
            
            
          
            
        </div>

        </div>

      </div>
   
    </div>



  )
}
