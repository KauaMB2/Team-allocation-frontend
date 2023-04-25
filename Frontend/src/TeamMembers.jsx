import TeamMemberCard from './TeamMemberCard'
const TeamMembers=({employees, handleEmployeeCardClick, selectedTeam})=>{
  console.log(employees)
  var i=0
  return(
    employees.map((employee)=>(
      <TeamMemberCard key={i++} employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}/>
    ))
  )
}

export default TeamMembers