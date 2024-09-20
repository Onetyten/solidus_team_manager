import React, { useState,useEffect } from 'react'

export default function GroupedTeamMembers(props) {
  const { employees, selectedTeam, setSelectedTeam,teams,setTeams,handleAddTeam,handleRemoveTeam } = props
  const [newTeamName, setNewTeamName] = useState('');
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())
  const [showAdd, setShowAdd] = useState(false)
  

  function groupTeamMembers() {
    return teams.map(team => {
      const members = employees.filter(employee => employee.teamName === team);
      return { team, members, collapsed: selectedTeam === team ? false : true };
    });
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData
    )
    setGroupedEmployees(transformedGroupData)
    setSelectedTeam(event.currentTarget.id)
  }

  function toggleShowAdd(){
    setShowAdd(!showAdd)
  }

  useEffect(() => {
    setGroupedEmployees(groupTeamMembers());
  }, [employees, teams, selectedTeam]);



  return (
    <div className='mt-28 sm:mt-40'>
         <div className='flex justify-center w-full mt-4'>
        <div className='w-full flex flex-col justify-center items-end md:items-center sm:mr-[10%] md:ml-[10%] md:mr-0 lg:mr-[5%]'>

        {groupedEmployees.map((item) => {
            return (
            <div key={item.team} className='cursor-pointer mt-7 bg-dark p-5 sm:p-10 w-[75%] sm:w-4/6 rounded-2xl mr-4'>
                {/* Use dynamic ID for the team */}
                <div className='flex items-center justify-between'>
                  <h4 id={item.team} className='text-white text-center text-md text-xl lg:text-2xl' onClick={handleTeamClick}>
                  Team Name : <span className='text-accent'>{item.team}</span> 
                  </h4>
                  <i className="fa-solid fa-trash text-md sm:text-2xl lg:text-3xl text-white hover:text-red-500" onClick={() => handleRemoveTeam(item.team)}></i>
                </div>
             

                {/* Toggle the visibility based on the collapsed state */}
                <div id={"hidden_" + item.team} className={`${item.collapsed ? "hidden" : ""}  bg-my-blue border-2 sm:border-4 border-b-0 border-white text-center mt-4 p-2 sm:p-4 rounded-xl`}>
                {item.members.map(member => {
                    return (
                    <div key={member.fullName} className='my-8 border-2 border-white p-2 sm:p-8 rounded-lg sm:rounded-3xl'>
                        <h5 className='mb-3  text-white text-md sm:text-xl'>
                            Full Name: <span>{member.fullName}</span> 
                        </h5>
                        <p className='text-sm sm:text-lg'>
                        Designation: <span>{member.designation}</span>
                        </p>
                    </div>
                    )
                })}
                </div>
            </div>
            )
        })}
        </div>
      </div>

      
      <div className='flex flex-col pl-16 items-center w-full justify-center mt-6'>
        <div className="mt-6 bg-dark p-2 sm:p-8 mb-6 rounded-2xl py-4">
          <p className='font-bold my-3 text-my-blue'>
            Add new team
          </p>
          <input
            type="text"
            placeholder="Enter new team name"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            className="text-black  sm:px-4 py-2 rounded-md text-sm sm:text-md "
          />
          <button
            onClick={() => handleAddTeam(newTeamName)}
            className="ml-4 bg-my-blue text-white text-sm sm:text-md px-2 sm:px-4 py-2 rounded-md">
            Add Team
          </button>
        </div>
      </div>
    </div>
    
  )
}
