import React, { useState } from 'react'
import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'











export default function Employees() {
    const[employees,setEmployees] = useState([
      {
        id:1,
        fullName:"Todd Howard",
        designation:"Project Manager",
        gender:"Male",
        teamName:"Team A"
      },

      {
        id:2,
        fullName:"Amanda Lopez",
        designation:"Senior Programmer",
        gender:"female",
        teamName:"Team A"
      },

      {
        id:3,
        fullName:"Samuel Abimbola",
        designation:"Project Manager",
        gender:"Male",
        teamName:"Team A"
      },

      {
        id:4,
        fullName:"Mahmoud Hussein",
        designation:"Project Manager",
        gender:"Male",
        teamName:"Team B"
      },

      {
        id:5,
        fullName:"Arden Cho",
        designation:"Project Manager",
        gender:"Female",
        teamName:"Team B"
      },

      {
        id:6,
        fullName:"Gail Stillwell",
        designation:"Project Manager",
        gender:"Male",
        teamName:"Team B"
      }
    ])
    return (
    <div className='grid grid-cols-3 p-3 gap-y-7 gap-x-4'>
        {employees.map((employees)=>(
          <div id={employees.id} className='flex justify-center bg-dark p-8  rounded-3xl w-full cursor-pointer'>
            <div className=' border-dark flex flex-col justify-center '>
              {(employees.gender === "Male")?<img src={maleProfile} alt="" className=' rounded-full object-cover object-center'/>:<img src={femaleProfile} alt="" className=' rounded-full object-cover object-center'/>}
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
  )
}
