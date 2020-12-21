import React, {useState} from 'react'

export default function EditTodo({ student }) {
    
    const [name, setName] = useState(student.name);

    const updateStudent = async (e) => {
        e.preventDefault();
        try {
            const body = {name};
            const response = await fetch(`http://localhost:5000/edit/${student.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return (
        <div>
            <button type="button" className="btn btn-success" data-toggle="modal" data-target={`#id${student.id}`}>Edit</button>

            <div className="modal" id={`id${student.id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit entry</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => setName(student.name)}>&times;</button>
                        </div>

                        <div className="modal-body"><input type="text" className="form-control" value={name}  onChange={e =>
                        setName(e.target.value)}></input></div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateStudent(e)}>Edit</button>
                            <button type="button" className="btn btn-danger " data-dismiss="modal" onClick={() => setName(student.name)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
