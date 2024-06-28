import Teams from './Teams'
import TeamMembers from './TeamMembers'
import Header from './Header'

const Employees = ({handleEditEmployee, handleDelete, employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange, getNumberOfEmployees, setShowTrashModal, showTrashModal, showEditModal, setShowEditModal}) => {
  return (
    <>
      <Header 
          selectedItem={selectedTeam} 
          teamMemberCount={getNumberOfEmployees()} 
      />
      <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
          <div className="col-8">
            <div className="card-collection">
              {
                <TeamMembers handleEditEmployee={handleEditEmployee} handleDelete={handleDelete} employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} showTrashModal={showTrashModal} setShowTrashModal={setShowTrashModal} setShowEditModal={setShowEditModal} showEditModal={showEditModal}/>
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Employees