import { Link } from 'react-router-dom'
import CreateEmployeeModal from './CreateTeamModal'
const Nav = ({setShowCreateModal, showCreateModal}) => {
  const turnOnCreateModal=()=>{
    setShowCreateModal(!showCreateModal)
  }
  return (
    <nav className="bg-dark">
      <CreateEmployeeModal setShowCreateModal={setShowCreateModal} showCreateModal={showCreateModal}></CreateEmployeeModal>
      <ul id="navbar-nav" className="navbar-list">
        <div className='linkList' id='rightLinks'>
          <li className='nav-item '>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/GroupTeamMembers">Teams</Link>
          </li>
        </div>
        <div className='linkList' id="leftLinks">
          <li className='nav-item '>
            <Link className='nav-link' to="/addEmployees">Add Employees</Link>
          </li>
          <li className='nav-item '>
            <div className='nav-link' onClick={turnOnCreateModal}>Add Teams</div>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav