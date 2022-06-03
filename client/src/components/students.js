import React, {useState, useEffect, Fragment} from 'react';
import axios from "axios";

function Students() {

    const [students, setStudents] = useState([]);
    const [editStudentID, setEditStudentID] = useState();
    const [editStudents, setEditStudents] = useState({
        firstName: "",
        lastName: "",
        faculty: "",
        regNum: "",
        email: ""
    });

    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8082/api/users/").then(res => {
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
            axios.delete(`http://localhost:8082/api/users/delete/${id}`).then(res => {
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
            firstName: student.firstName,
            lastName: student.lastName,
            faculty: student.faculty,
            regNum: student.regNum,
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
            firstName: editStudents.firstName,
            lastName: editStudents.lastName,
            faculty: editStudents.faculty,
            regNum: editStudents.regNum,
            email: editStudents.email
        }
                
        //console.log(edits);

        axios.put(`http://localhost:8082/api/users/update/${editStudentID}`, edits).then(res => {
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Faculty</th>
                        <th>Register Number</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => 
                    <Fragment>
                        {editStudentID === student._id ? (
                            <tr> 
                            <td><input 
                                type="text" 
                                required
                                name='firstName'
                                placeholder="first name"
                                value={editStudents.firstName}
                                onChange={EditStudents}></input></td>
                            <td><input 
                                type="text" 
                                required
                                name='lastName'
                                placeholder="last name"
                                value={editStudents.lastName}
                                onChange={EditStudents}></input></td>
                            <td><input 
                                type="text" 
                                required
                                name='faculty'
                                placeholder="faculty"
                                value={editStudents.faculty}
                                onChange={EditStudents}></input></td>
                            <td><input 
                                type="text" 
                                required
                                name='regNum'
                                placeholder="register number"
                                value={editStudents.regNum}
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
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.faculty}</td>
                                <td>{student.regNum}</td>
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