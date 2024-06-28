import TeamMemberCard from './TeamMemberCard'
import TrashModal from './TrashModal'
import EditEmployeeModal from './EditEmployeeModal'
import { useState } from 'react'
const TeamMembers=({handleEditEmployee, handleDelete, employees, handleEmployeeCardClick, selectedTeam, setShowTrashModal, showTrashModal, showEditModal, setShowEditModal})=>{
  const [currentEmployee, setCurrentEmployee]=useState(undefined)
  var i=0
  return(
    employees.map((employee)=>(
      <>
        <TeamMemberCard key={i++} employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} showTrashModal={showTrashModal} setShowTrashModal={setShowTrashModal} currentEmployee={currentEmployee} setCurrentEmployee={setCurrentEmployee} showEditModal={showEditModal} setShowEditModal={setShowEditModal} />
        {
          (i==1) ? <TrashModal handleDelete={handleDelete} showTrashModal={showTrashModal} setShowTrashModal={setShowTrashModal} currentEmployee={currentEmployee}/> : "\n"
        }
        {
          (i==1) ? <EditEmployeeModal handleEditEmployee={handleEditEmployee} showEditModal={showEditModal} setShowEditModal={setShowEditModal}  currentEmployee={currentEmployee}></EditEmployeeModal> : '\n'
        }
      </>
    ))
  )
}

export default TeamMembers