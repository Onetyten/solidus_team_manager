import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Employees from './Employees'
import Sidebar from './Sidebar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import GroupedTeamMembers from './GroupedTeamMembers'
import NotFound from './NotFound'
import SelectTeam from './SelectTeam'
import ProjectAssignment from './ProjectAssignment'
import TeamList from './TeamList'
import Logo from './images/Solidus.png'


function App() {
  const[openTab, setOpenTab] = useState(false)
  const[isLeft,setIsLeft] = useState(true)

  function toggleTab(){
    setOpenTab(!openTab)
    setIsLeft(!isLeft)
    
  }


  const[selectedTeam,setSelectedTeam] = useState(JSON.parse(localStorage.getItem('SelectedTeam'))||"Team A")
  const [teams, setTeams] = useState(JSON.parse(localStorage.getItem('teamList')) || ['Team A', 'Team B', 'Team C', 'Team D']);
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employmentList'))||[
    {
      id: 1,
      fullName: "Todd Howard",
      designation: "Project Manager",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 2,
      fullName: "Amanda Lopez",
      designation: "Junior Programmer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 3,
      fullName: "Aisha Khan",
      designation: "UX/UI Designer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 4,
      fullName: "Olivia Njeri",
      designation: "Software Tester",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 5,
      fullName: "Santiago Ruiz",
      designation: "IT Support Specialist",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 6,
      fullName: "Samuel Abimbola",
      designation: "Data Engineer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 7,
      fullName: "Mahmoud Hussein",
      designation: "Backend Developer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 8,
      fullName: "Luca Ferrari",
      designation: "Junior Programmer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 9,
      fullName: "Diego Rodríguez",
      designation: "Database Administrator",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 10,
      fullName: "Charlotte Dupont",
      designation: "QA Engineer",
      gender: "female",
      teamName: "Team B",
    },
    {
      id: 11,
      fullName: "Arden Cho",
      designation: "Graphic Designer",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 12,
      fullName: "Sophia Patel",
      designation: "Machine Learning Engineer",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 13,
      fullName: "Maria Costa",
      designation: "AI Specialist",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 14,
      fullName: "Fatima Al-Farsi",
      designation: "AI Research Scientist",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 15,
      fullName: "Chen Wei",
      designation: "Data Analyst",
      gender: "male",
      teamName: "Team C",
    },
    {
      id: 16,
      fullName: "Gail Stillwell",
      designation: "Frontend Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 17,
      fullName: "Jin Park",
      designation: "Backend Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 18,
      fullName: "James Li",
      designation: "Scrum Master",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 19,
      fullName: "Liam Anderson",
      designation: "Game Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 20,
      fullName: "Nina Petrova",
      designation: "Cybersecurity Analyst",
      gender: "female",
      teamName: "Team D",
    },
    {
      id: 21,
      fullName: "Carlos Mendes",
      designation: "Junior Programmer",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 22,
      fullName: "Emma Johansson",
      designation: "Cloud Architect",
      gender: "female",
      teamName: "Team B",
    },
    {
      id: 23,
      fullName: "Yuki Tanaka",
      designation: "Web Developer",
      gender: "male",
      teamName: "Team C",
    },
    {
      id: 24,
      fullName: "Kimberly Blake",
      designation: "DevOps Engineer",
      gender: "female",
      teamName: "Team D",
    },
    {
      id: 25,
      fullName: "Ibrahim Hassan",
      designation: "Systems Architect",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 26,
      fullName: "Isabella Rossi",
      designation: "Junior Programmer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 27,
      fullName: "Ravi Sharma",
      designation: "Backend Developer",
      gender: "male",
      teamName: "Team D",
    }
  ]);


  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("Projects")) || [
    {
      name: "E-commerce Platform Redesign",
      id: "Backlog",
      startDate: new Date().toISOString().split('T')[0],  // Today's date
      endDate: new Date().toISOString().split('T')[0],  
      selectedTeam: "Team Alpha"
    },
    {
      name: "Health & Wellness App Development",
      id: "Done",
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],  
      selectedTeam: "Team Bravo"
    },
    {
      name: "Smart Home Automation System",
      id: "Inprocess",
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],  
      selectedTeam: "Team Gamma"
    },
    {
      name: "Blockchain Supply Chain Platform",
      id: "Ready",
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      selectedTeam: "Team Delta"
    },
  ]);



  
  function handleSelectedTeam(event){
    setSelectedTeam(event.target.value)
    console.log(event.target.value)
  }

    const handleAddTeam = (newTeam) => {
      if (!teams.includes(newTeam)) {
        setTeams([...teams, newTeam]);
      } else {
        alert('Team already exists');
      }
    };
  
    const handleRemoveTeam = (teamToRemove) => {
      setTeams(teams.filter((team) => team !== teamToRemove));
      
      
      // Update employees who are part of the removed team to 'Unassigned'
      setEmployees(employees.map(employee => 
        employee.teamName === teamToRemove ? { ...employee, teamName: 'Unassigned' } : employee
      ));
      console.log(teams)
    };

  function handleEmployeeCardClicked(event){
    const transformedEmployees = employees.map((employees) => employees.id === parseInt(event.currentTarget.id)?(employees.teamName === selectedTeam)?{...employees,teamName:''}:{...employees,teamName:selectedTeam}:employees);
    setEmployees(transformedEmployees)
    console.log(employees.image);
  }

  const teamMemberCounts = teams.reduce((counts, team) => {
    counts[team] = employees.filter(employee => employee.teamName === team).length;
    return counts;
  }, {});



  // To see the updated list of teams after it changes
useEffect(() => {
  console.log(teams); // This will log after the state is updated
}, [teams]);




  useEffect(()=>{
      localStorage.setItem('employmentList',JSON.stringify(employees))

  },[employees])

useEffect(()=>{
    localStorage.setItem('SelectedTeam',JSON.stringify(selectedTeam))

},[selectedTeam])

useEffect(()=>{
  localStorage.setItem("Projects",JSON.stringify(projects))

},[projects])


useEffect(()=>{
  localStorage.setItem('teamList',JSON.stringify(teams))
},[teams])





  return (
    <Router className='min-h-screen'>
      <div className='flex bg-gradient-to-b from-my-grey to-my-blue min-h-screen '>

        <Sidebar toggleTab = {toggleTab} openTab = {openTab} isLeft ={isLeft}/>

        {/* main page */}

        <div className='w-full col-span-3'>
          <div className='fixed z-10'>
            <div className='flex items-end'>
             <img src={Logo} alt="" className='rounded-full w-10 h-10 mt-20  lg:mt-0 lg:w-28 lg:h-28' />
             <h2 className='text-accent text-xl lg:text-4xl lg:-translate-x-8'>
              OLIDUS
             </h2>
            </div>
            


          </div>





        
        <SelectTeam selectedTeam = {selectedTeam} handleSelectedTeam={handleSelectedTeam} teams={teams} employees = {employees} teamMemberCounts = {teamMemberCounts} />

 
          <Header selectedTeam = {selectedTeam} teamMemberCount ={employees.filter((employees) => employees.teamName === selectedTeam).length}/>




          <Routes>
            <Route path='/' element={<Employees selectedTeam = {selectedTeam} setSelectedTeam={setSelectedTeam} setEmployees={setEmployees} employees = {employees} handleSelectedTeam={handleSelectedTeam} handleEmployeeCardClicked = {handleEmployeeCardClicked} teams={teams} setTeams ={setTeams} openTab = {openTab}/>}>
  
            </Route>
            <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees = {employees} setEmployees ={setEmployees} selectedTeam={selectedTeam} setSelectedTeam = {setSelectedTeam} teams = {teams} setTeams = {setTeams} handleAddTeam = {handleAddTeam} handleRemoveTeam ={handleRemoveTeam}  handleSelectedTeam={handleSelectedTeam}
            handleEmployeeCardClicked={handleEmployeeCardClicked}/>}>
            </Route>

            <Route path='/ProjectAssignment' element={<ProjectAssignment teams={teams} selectedTeam ={selectedTeam} setSelectedTeam={setSelectedTeam} projects = {projects} setProjects ={setProjects}/>}>
            </Route>

            <Route path='/TeamList' element={<TeamList teams = {teams} projects = {projects} />}>
            </Route>
               
            <Route path='*' element={<NotFound/>}>
            </Route>
        
          </Routes>

        </div>

      </div>
    </Router>
  )
}

export default App
