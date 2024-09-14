import React from 'react'

export default function Header(props) {
  const{selectedTeam,teamMemberCount} = props
  return (
    <div className='w-full h-20 bg-dark py-3'>
        <h1 className='text-3xl text-white text-center'>
           {selectedTeam} has {teamMemberCount} Members
        </h1>
    </div>
  )
}
