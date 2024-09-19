import React from 'react'

export default function Header(props) {
  const{selectedTeam,teamMemberCount} = props
  return (
    <div className='w-full h-20 bg-dark py-3 fixed '>
        <h1 className='text-xl sm:text-3xl text-white text-center'>
           {selectedTeam} has {teamMemberCount} {teamMemberCount ==1?"member":"members"}
        </h1>
    </div>
  )
}
