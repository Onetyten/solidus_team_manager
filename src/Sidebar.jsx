import React, { useState } from 'react'
import SidebarWidget from './SidebarWidget'

export default function Sidebar(props) {
const{toggleTab,openTab,isLeft} = props


  return (
    <div className={`${openTab ?"w-72":"w-24"} bg-dark min-h-screen text-white pl-2 pt-20 relative `}>

        <i className={`fa-solid ${isLeft ? "fa-circle-left":"fa-circle-right"} absolute right-5 text-4xl top-20 cursor-pointer hover:text-accent`} onClick={toggleTab}></i>


        <div className='flex flex-col mt-16 px-5 gap-5'>

            <SidebarWidget openTab = {openTab} name = 'My Team ' sec='fa-solid fa-people-group text-4xl'/>
            <SidebarWidget openTab = {openTab} name = 'All Members' sec='fa-solid fa-address-card text-4xl'/>
            <SidebarWidget openTab = {openTab} name = 'Project' sec='fa-solid fa-bars-progress text-4xl'/>
            <SidebarWidget openTab = {openTab} name = 'Chatroom' sec='fa-solid fa-message text-4xl'/>

            
        </div>

    </div>



  )
}
