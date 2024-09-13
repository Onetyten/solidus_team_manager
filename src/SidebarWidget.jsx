import React from 'react'

export default function SidebarWidget(props) {
  const{name,sec,openTab} = props
  return (
    <div className='flex justify-evenly items-center hover:text-accent cursor-pointer'>

        <i className={sec}></i>
        <p className={`${openTab ?"inline":"hidden"} text-center  w-2/3`}>
            {name}
        </p>

    </div>
  )
}
