import {Button, Modal} from 'react-bootstrap'

const EditEmployee=({handleEditEmployee, showEditModal, setShowEditModal, currentEmployee})=>{
    return(
        <>
            <Modal size="lg" show={showEditModal} onHide={()=>{setShowEditModal(!showEditModal)}}>
                <Modal.Header className=' text-center bg-primary' closeButton>
                    <Modal.Title className='modal-title w-100 font-weight-bold py-2'>EDIT AREA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form  id="editForm" onSubmit={handleEditEmployee} className='formEditEmployee'>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Name:</label>
                            <input defaultValue={(currentEmployee!=undefined) ? currentEmployee.fullName : ''} type="text" className="form-control" id="recipient-name" name="fullName" required/>
                        </div>
                        
                        <div className="designationField animate__animated animate__fadeIn">
							<label id="designationLabel">Designation: </label>
							<div className="form-team-list">
								<div className="form-check">
									<input className="form-check-input" value="Python Developer" type="radio" name="designation" id="radio1"/>
									<label className="form-check-label">Python Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="Backend Developer" type="radio" name="designation" id="radio2"/>
									<label className="form-check-label" >Backend Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="C# Developer" type="radio" name="designation" id="radio3"/>
									<label className="form-check-label" >C# Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="Java Developer" type="radio" name="designation" id="radio4"/>
									<label className="form-check-label" >Java Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="Javascript Developer" type="radio" name="designation" id="radio5"/>
									<label className="form-check-label" >Javascript Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="Dotnet Developer" type="radio" name="designation" id="radio6"/>
									<label className="form-check-label" >Dotnet Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="Node Developer" type="radio" name="designation" id="radio7" />
									<label className="form-check-label" >Node Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="Data Engineer" type="radio" name="designation" id="radio8"/>
									<label className="form-check-label" >Data Engineer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" value="Docker Developer" type="radio" name="designation" id="radio8"/>
									<label className="form-check-label" >Docker Developer</label>
								</div>
							</div>
							<div className="genderField animate__animated animate__fadeIn">
								<label className="genderLabel">Gender:</label>
								<div className="form-MaleFemaleChoice">
									<div className="form-check">
										<input className="form-check-input" type="radio" value="male" name="gender" id="radio9"/>
										<label className="form-check-label" >Male</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" value="female" name="gender" id="radio10"/>
										<label className="form-check-label" >Female</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" value="Non-Binary" name="gender" id="radio10"/>
										<label className="form-check-label" >Non-Binary</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" value="Other" name="gender" id="radio10"/>
										<label className="form-check-label">Other</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" value="Prefer not to answer" name="gender" id="radio10"/>
										<label className="form-check-label" >Prefer not to answer</label>
									</div>
								</div>
							</div>
							<div>
							<input style={{display: 'none'}} name="_id" value={currentEmployee ? currentEmployee._id : ""} />
							</div>
							</div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-outline-secondary" onClick={()=>{setShowEditModal(!showEditModal)}}>Cancel</Button>
                    <Button variant="btn btn-primary" type='submit' form="editForm">Edit!</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default EditEmployee