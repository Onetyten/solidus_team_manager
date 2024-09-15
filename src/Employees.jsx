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
    const{ selectedTeam,setSelectedTeamset,setEmployees,employees ,handleSelectedTeam,handleEmployeeCardClicked} = props

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

    const [teams, setTeams] = useState([]);

    // Update teams whenever employees change
    useEffect(() => {
      const uniqueTeams = employees
        .map((employee) => employee.teamName || "Unassigned")
        .filter((teamName, index, self) => self.indexOf(teamName) === index);
      setTeams(uniqueTeams);
    }, [employees]); 


    function getUniqueTeams() {
      const teams = employees
        .map((employee) => employee.teamName || "Unassigned")
        .filter((teamName, index, self) => self.indexOf(teamName) === index);
      return teams;
    }
    function addEmployee(newEmployee) {
      setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    }

    function updateTeam(employeeId, newTeam) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === employeeId ? { ...employee, teamName: newTeam } : employee
        )
      );
    }
  

    return (
    <div className='flex flex-col items-center'>
        <div>
          <div>
          <select
            name="" id="" className='text-xl text-white text-center bg-dark py-2 mb-10 px-10 w-96 rounded-b-xl' value={selectedTeam} onChange={handleSelectedTeam}
          >
            {getUniqueTeams().map((team) => (
              <option key={team} value={team} className='opacity-10'>
                {team}
              </option>
            ))}
          </select>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 p-3 gap-y-7 gap-x-4'>
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
                    Designation: <span className='text-white'>{employees.teamName || "none"}</span> 
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
