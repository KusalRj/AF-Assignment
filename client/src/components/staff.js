import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";

function Staff() {
    
    const [staffs, setStaffs] = useState([]);
    const [editStaffID, setEditStaffID] = useState();
    const [editStaff, setEditStaff] = useState({
        name: "",
        email: "",
        position: ""
    });

    useEffect(() => {
        function getStaff() {
            axios.get("http://localhost:8070/staff/").then(res => {
                setStaffs(res.data);
            }).catch(err => {
                console.log(err);
            })
        };
        getStaff();
    }, []);

    const DeleteStaffs = (event, id) => {
        event.preventDefault();
        if (id !== null) {
            axios.delete(`http://localhost:8070/staff/delete/${id}`).then(res => {
                console.log(res.data);    
            }).catch(err => {
                console.log(err);
            })  
        };
    };

    const EditClick = (event, staff) => {
        event.preventDefault();
        setEditStaffID(staff._id);

        const formValues = {
            name: staff.name,
            email: staff.email,
            position: staff.position
        }
        setEditStaff(formValues);
    };

    const EditStaff = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const Data = {...editStaff};
        Data[fieldName] = fieldValue;

        setEditStaff(Data);
    }

    const EditSubmit = (event) => {
        event.preventDefault();

        const edits = {
            id: editStaffID,
            name: editStaff.name,
            email: editStaff.email,
            position: editStaff.position
        }

        axios.put(`http://localhost:8070/staff/update/${editStaffID}`, edits).then(res => {
            setStaffs(res.data);
            setEditStaffID('');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <h1>Staff List</h1>
            <form onSubmit={(event) => EditSubmit(event)}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Member Name</th>
                        <th>Email Address</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {staffs.map(staff =>
                    <Fragment>
                        {editStaffID === staff._id ? (
                            <tr>
                            <td><input
                                type='text'
                                required='required'
                                name='name'
                                placeholder='name'
                                value={editStaff.name}
                                onChange={EditStaff}></input></td>
                            <td><input
                                type='email'
                                required='required'
                                name='email'
                                placeholder='email'
                                value={editStaff.email}
                                onChange={EditStaff}></input></td>
                            <td><input
                                type='text'
                                required='required'
                                name='position'
                                placeholder='position'
                                value={editStaff.position}
                                onChange={EditStaff}></input></td>
                            <td>
                                <button type="submit" className="btn btn-success">Save</button>
                            </td>
                            </tr>
                        ) : (
                            <tr> 
                                <td>{staff.name}</td>
                                <td>{staff.email}</td>
                                <td>{staff.position}</td>
                                <td>
                                    <button type="button" onClick={(event) => DeleteStaffs(event, staff._id)} className="btn btn-danger">Delete</button>
                                    <button type='button' onClick={(event) => EditClick(event, staff)} className="btn btn-warning">Edit</button>
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

export default Staff;