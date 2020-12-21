import React, {useState} from 'react'

export default function AddStudent() {
    
    const [name, setName] = useState("");   

    const submitForm = async e => {
        e.preventDefault()
        try {
            const body = {name};
            const response = await fetch("http://localhost:5000/add", {
                method: "POST",
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
            <h1 className='text-center mt-5'>Add Student</h1>
            <form className='d-flex mt-5' onSubmit={submitForm}>
                <input type="text" className='form-control' placeholder='John Doe'onChange={e => setName(e.target.value)} />
                <button className='btn btn-success'>Add</button>
            </form>
        </div>
    )
}
