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
                        <div class="form-group">
                            <label for="team-name" class="col-form-label">Name:</label>
                            <input  type="text" class="form-control" id="team-name"/>
                        </div>
						<label className='addedTeamsLabel'>Added teams(Delete):</label>
						<div className='checkBoxList'>
							<div class="form-check">
								<input class="form-check-input" onClick={handleCheckboxClicked} type="checkbox" value="" id="flexCheckDefault" defaultChecked/>
								<label class="form-check-label" for="flexCheckDefault">Team A</label>
							</div>
							<div class="form-check" >
								<input class="form-check-input" onClick={handleCheckboxClicked} type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
								<label class="form-check-label" for="flexCheckChecked">Team B</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" onClick={handleCheckboxClicked} type="checkbox" value="" id="flexCheckDefault" defaultChecked/>
								<label class="form-check-label" for="flexCheckDefault">Team C</label>
							</div>
							<div class="form-check" >
								<input class="form-check-input" onClick={handleCheckboxClicked} type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
								<label class="form-check-label" for="flexCheckChecked">Team D</label>
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