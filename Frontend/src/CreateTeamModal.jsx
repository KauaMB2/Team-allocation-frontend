import {Button, Modal} from 'react-bootstrap'

const EditEmployee=({showCreateModal, setShowCreateModal})=>{
    const handleCreate=()=>{
        setShowCreateModal(!showCreateModal)
    }
	const handleCheckboxClicked=(event)=>{
		var currentCheckbox={... event.target}
		currentCheckbox.checked=!currentCheckbox.checked
		console.log(currentCheckbox.checked)
	}
    return(
        <>
            <Modal size="lg" show={showCreateModal} onHide={()=>{setShowCreateModal(!showCreateModal)}}>
                <Modal.Header className=' text-center bg-success' closeButton>
                    <Modal.Title className='modal-title w-100 font-weight-bold py-2'>ADD AREA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='formEditEmployee animate__animated animate__fadeIn'>
                        <div className="form-group">
                            <label for="team-name" className="col-form-label">Name:</label>
                            <input  type="text" className="form-control" id="team-name"/>
                        </div>
						<label className='addedTeamsLabel'>Added teams(Delete):</label>
						<div className='checkBoxList'>
							<div className="form-check">
								<input className="form-check-input" onClick={handleCheckboxClicked} type="checkbox" defaultValue="" id="flexCheckDefault" defaultChecked/>
								<label className="form-check-label" for="flexCheckDefault">Team A</label>
							</div>
							<div className="form-check" >
								<input className="form-check-input" onClick={handleCheckboxClicked} type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked/>
								<label className="form-check-label" for="flexCheckChecked">Team B</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" onClick={handleCheckboxClicked} type="checkbox" defaultValue="" id="flexCheckDefault" defaultChecked/>
								<label className="form-check-label" for="flexCheckDefault">Team C</label>
							</div>
							<div className="form-check" >
								<input className="form-check-input" onClick={handleCheckboxClicked} type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked/>
								<label className="form-check-label" for="flexCheckChecked">Team D</label>
							</div>
						</div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-outline-secondary" onClick={()=>{setShowCreateModal(!showCreateModal)}}>Cancel</Button>
                    <Button variant="btn btn-success" onClick={handleCreate}>Edit!</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default EditEmployee