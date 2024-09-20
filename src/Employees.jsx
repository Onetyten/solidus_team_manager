import { useState, useEffect } from 'react';
import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'
import Todd from './images/Profile/Todd.jpg'
import Amanda from './images/Profile/Amandalopez.jpeg'
import Aisha from './images/Profile/Aisha.jpeg'
import Olivia from './images/Profile/Olivia.jpeg'
import Ruiz from './images/Profile/ruiz.jpeg'
import Samuel from './images/Profile/Samuel.jpeg'
import Mahmoud from './images/Profile/mahmoud.jpg'
import Luca from './images/Profile/luca.jpeg'
import Diego from './images/Profile/diego.jpeg'
import Charlotte from './images/Profile/dupont.jpeg'
import Arden from './images/Profile/Arden.jpg'
import Sophia from './images/Profile/sophia.jpg'
import Maria from './images/Profile/Maria.webp'
import Fatima from './images/Profile/Fatima.jpg'
import Chen from './images/Profile/Chen.jpeg'
import Gail from './images/Profile/gail.jpg'
import Jin from './images/Profile/Jin.jpg'
import James from './images/Profile/James.jpg'
import Liam from './images/Profile/Liam.jpg'
import Nina from './images/Profile/Nina.webp'
import Carlos from './images/Profile/Carlos.webp'
import Emma from './images/Profile/Emma.jpg'
import Yuki from './images/Profile/Yuki.jpeg'
import Kimberly from './images/Profile/Kimberly.jpg'
import Ibrahim from './images/Profile/Ibro.webp'
import Isabella from './images/Profile/Isabella.avif'
import Ravi from './images/Profile/ravi.jpeg'












export default function Employees(props) {
    const{ selectedTeam,setSelectedTeam,setEmployees,employees ,handleSelectedTeam,handleEmployeeCardClicked,teams, setTeams,openTab} = props
    const [showAdd,setShowAdd] = useState(false)

    const employeeImages = {
      1:Todd,
      2:Amanda,
      3:Aisha,
      4:Olivia,
      5:Ruiz,
      6:Samuel,
      7:Mahmoud,
      8:Luca,
      9:Diego,
      10:Charlotte,
      11:Arden,
      12:Sophia,
      13:Maria,
      14:Fatima,
      15:Chen,
      16:Gail,
      17:Jin,
      18:James,
      19:Liam,
      20:Nina,
      21:Carlos,
      22:Emma,
      23:Yuki,
      24:Kimberly,
      25:Ibrahim,
      26:Isabella,
      27:Ravi,

    }

    function toggleShowAdd(){
      setShowAdd(!showAdd)
    }

    const [newEmployeeName, setNewEmployeeName] = useState('');
    const [newEmployeeDesignation, setNewEmployeeDesignation] = useState('');

    const handleAddEmployee = () => {
      if (newEmployeeName && newEmployeeDesignation) {
        const newEmployee = {
          id: employees.length + 1, // Assuming id is incremental
          fullName: newEmployeeName,
          designation: newEmployeeDesignation,
          teamName: 'Unassigned', // or any default team
        };
  
        setEmployees([...employees, newEmployee]);
  
        // Clear input fields
        setNewEmployeeName('');
        setNewEmployeeDesignation('');
        setShowAdd(false); // Optionally close the form after adding
      }
    };
  

  

    return (
    <div className="flex flex-col items-center mt-20 sm:mt-40 pl-16 sm:pl-24 ">


        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-3 gap-y-7 gap-x-4'>
          {employees.map((employees)=>(

            <div key = {employees.id} id={employees.id} className={`flex justify-center bg-dark p-8 rounded-3xl w-full cursor-pointer ${employees.teamName === selectedTeam ? "border-8 border-accent ":"border-none"}`} onClick={handleEmployeeCardClicked}>
              <div className=' border-dark flex flex-col justify-center '>
              <img
                src={employeeImages[employees.id] || maleProfile} 
                className="rounded-full object-center w-64 h-64 object-cover"
              />
                <div className='text-center text-accent'>
                  <h4 className='mt-2'>
                    Full name: <span className='text-white'> {employees.fullName} </span> 
                  </h4>
                  <p className='mt-2'>
                    Designation: <span className='text-white'>{employees.designation}</span> 
                  </p>
                  <p className='mt-2'>
                    Team: <span className='text-white'>{employees.teamName || "Unassigned"}</span> 
                  </p>
                </div>

                
                
              </div>

            </div>


          )


          )}
          <div className='flex flex-col items-center w-full justify-center mt-6'>


              <div className="mt-6 bg-dark p-4 sm:p-8 mb-6 flex flex-col w-full items-center justify-center rounded-2xl">
                <p className='py-4 font-bold text-xl text-my-blue'>
                  Add new employee
                </p>
                <input
                  type="text"
                  placeholder="Name"
                  className="text-black p-2 sm:p-4 rounded-md"
                  value={newEmployeeName}
                  onChange={(e) => setNewEmployeeName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Designation"
                  className="text-black p-2 sm:p-4 rounded-md mt-4"
                  value={newEmployeeDesignation}
                  onChange={(e) => setNewEmployeeDesignation(e.target.value)}
                />
                <button
                  className="mt-4 bg-my-blue text-white p-2 sm:p-4 rounded-md"
                  onClick={handleAddEmployee}
                >
                  Add new Employee
                </button>
              </div>

          </div>

        </div>



        
    </div>
  )
}
