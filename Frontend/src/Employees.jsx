import Teams from './Teams'
import TeamMembers from './TeamMembers'
import Header from './Header'

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {
  return (
    <>
      <Header 
          selectedItem={selectedTeam} 
          teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} 
      />
      <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
          <div className="col-8">
            <div className="card-collection">
              {
                <TeamMembers employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}/>
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Employees