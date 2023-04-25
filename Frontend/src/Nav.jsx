import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-dark">
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
            <Link className='nav-link' to="/addTeams">Add Teams</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav