import React, {useState, useEffect, Fragment} from 'react';
import axios from "axios";

function Students() {

    const [students, setStudents] = useState([]);
    const [editStudentID, setEditStudentID] = useState();
    const [editStudents, setEditStudents] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8070/student/").then(res => {
                setStudents(res.data);
            }).catch(err => {
                console.log(err);
            })
        };
        getStudents();
    }, []);

    const DeleteStudents = (event, id) => {
        event.preventDefault();
        if (id !== null) {
            axios.delete(`http://localhost:8070/student/delete/${id}`).then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })  
        };
    };

    const EditClick = (event, student) => {
        event.preventDefault();
        setEditStudentID(student._id);

        const formValues = {
            name: student.name,
            email: student.email
        }
        setEditStudents(formValues);
    };

    const EditStudents = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const Data = {...editStudents};
        Data[fieldName] = fieldValue;

        setEditStudents(Data);
    } 
    
    const EditSubmit = (event) => {
        event.preventDefault();

        const edits = {
            id: editStudentID,
            name: editStudents.name,
            email: editStudents.email
        }
                
        //console.log(edits);

        axios.put(`http://localhost:8070/student/update/${editStudentID}`, edits).then(res => {
            setStudents(res.data);
            setEditStudentID('');
        }).catch(err => {
            console.log(err);
        }) 
    }

    return (
        <div className="container">
            <h1>Student List</h1>
            <form onSubmit={(event) => EditSubmit(event)}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Email Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => 
                    <Fragment>
                        {editStudentID === student._id ? (
                            <tr> 
                            <td><input 
                                type="text" 
                                required="required"
                                name='name'
                                placeholder="name"
                                value={editStudents.name}
                                onChange={EditStudents}></input></td>
                            <td><input 
                                type="email" 
                                required="required"
                                name='email'
                                placeholder="email"
                                value={editStudents.email}
                                onChange={EditStudents}></input></td>
                            <td>
                                <button type='submit' className="btn btn-success">Save</button>
                            </td>
                         </tr>
                        ) : (
                            <tr> 
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button type="button" onClick={(event) => DeleteStudents(event, student._id)} className="btn btn-danger">Delete</button>
                                    <button type='button' onClick={(event) => EditClick(event, student)} className="btn btn-warning">Edit</button>
                                </td>
                            </tr>
                        )}
                    </Fragment>  
                    )}
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default Students;