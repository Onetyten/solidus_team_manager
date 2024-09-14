import React, { useState } from 'react'
import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'











export default function Employees(props) {
    const{ selectedTeam,setSelectedTeamset,setEmployees,employees ,handleSelectedTeam,handleEmployeeCardClicked} = props
    return (
    <div className='flex flex-col items-center'>
        <div>
          <div>
            <select name="" id="" className='text-xl text-white text-center bg-dark py-2  mb-10 px-10 w-96 rounded-b-xl' value={selectedTeam} onChange={handleSelectedTeam}>
              <option value="Team A" className='opacity-10'>Team A</option>
              <option value="Team B" className='opacity-10'>Team B</option>
              <option value="Team C" className='opacity-10'>Team C</option>
              <option value="Team D" className='opacity-10'>Team D</option>
            </select>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 p-3 gap-y-7 gap-x-4'>
          {employees.map((employees)=>(

            <div key = {employees.id} id={employees.id} className={`flex justify-center bg-dark p-8 rounded-3xl w-full cursor-pointer ${employees.teamName === selectedTeam ? "border-8 border-accent ":"border-none"}`} onClick={handleEmployeeCardClicked}>





              <div className=' border-dark flex flex-col justify-center '>
                {(employees.gender === "male")?<img src={maleProfile} alt="" className=' rounded-full object-cover object-center'/>:<img src={femaleProfile} alt="" className=' rounded-full object-cover object-center'/>}
                <div className='text-center text-accent'>
                  <h4 className='mt-2'>
                    Full name: <span className='text-white'> {employees.fullName} </span> 
                  </h4>
                  <p className='mt-2'>
                    Designation: <span className='text-white'>{employees.designation}</span> 
                  </p>
                </div>

                
                
              </div>

            </div>


          )


          )}

        </div>



        
    </div>
  )
}
