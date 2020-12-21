import React, {useState, useEffect} from 'react'
import EditTodo from './EditTodo'

export default function ListTodos() {
    
    const [students, setStudents] = useState([]);

    const getTodos = async () => {
        try {
            
            const response = await fetch("http://localhost:5000/students")
            const data = await response.json();
            setStudents(data);
            
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteStudent = async (id) => {
        try {
            const delete_student = await fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            });
            setStudents(students.filter(student => student.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []) 

    console.log(students);

    return (
        <div>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key = {student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td><EditTodo student={student}/></td>
                            <td><button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
