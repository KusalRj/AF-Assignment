import axios from "axios";
import React, { useEffect, useState } from "react";

function Panels() {

    const [staffs, setStaffs] = useState([]);
    const [staffs2, setStaffs2] = useState([]);
    const [staffs3, setStaffs3] = useState([]);
    const [topics, setTopics] = useState([]);
    const [group, setGroup] = useState();
    const [topicName, setTopicName] = useState();
    const [supervisor, setSupervisor] = useState();
    const [coSupervisor, setCoSupervisor] = useState();
    const [member1, setMember1] = useState();
    const [member2, setMember2] = useState();
    const [member3, setMember3] = useState();

    useEffect(() => {
        function getStaff() {
            axios.get("http://localhost:8070/staff/").then(res => {
                setStaffs(res.data);
            }).catch(err => {
                console.log(err);
            })
        };
        getStaff();

        function getTopics() {
            axios.get("http://localhost:8070/topic/").then(res => {
                setTopics(res.data);
            }).catch(err => {
                console.log(err);
            })
        };
        getTopics();

    }, []);

    const groupName = (event) => {
        event.preventDefault();

        const gID = event.target.value;

        const selectedGroup = topics.find(topic => topic._id === gID);
        setGroup(selectedGroup.groupName);
        setTopicName(selectedGroup.topic);
        setSupervisor(selectedGroup.supervisor);
        setCoSupervisor(selectedGroup.coSupervisor);

        const sv = selectedGroup.supervisor;
        const csv = selectedGroup.coSupervisor;

        const newStaff = staffs.filter(staff => (staff.S_name !== sv) && (staff.S_name !== csv));
        setStaffs(newStaff);
    }

    const panelMember1 = (event) => {
        event.preventDefault();
        
        const memID1 = event.target.value;
        
        const selectedMember1 = staffs.find(staff => staff._id === memID1);
        setMember1(selectedMember1.S_name);

        const newStaff1 = staffs.filter(staff => staff._id !== memID1);
        setStaffs2(newStaff1);
    }

    const panelMember2 = (event) => {
        event.preventDefault();
        
        const memID2 = event.target.value;
        
        const selectedMember2 = staffs2.find(staff => staff._id === memID2);
        setMember2(selectedMember2.S_name);

        const newStaff2 = staffs2.filter(staff => staff._id !== memID2);
        setStaffs3(newStaff2);
    }

    const panelMember3 = (event) => {
        event.preventDefault();
        
        const memID3 = event.target.value;
        
        const selectedMember3 = staffs3.find(staff => staff._id === memID3);
        setMember3(selectedMember3.S_name);
    }

    const submitPanel = (event) => {
        event.preventDefault();

        const panelDetails = {
            group,
            topicName,
            member1,
            member2,
            member3
        }
        console.log(panelDetails);

        axios.post("http://localhost:8070/panel/add", panelDetails).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <h1>Allocating Panels</h1>
            <br></br>
            <br></br>
            <form className="form-control needs-validation" onSubmit={(event) => submitPanel(event)} noValidate>
            <br></br>
            <div className="col-md-8">
                <label className="form-label">Group Names</label>
                    <select className="form-select" onChange={(event) => groupName(event)} required>
                        <option selected disabled>Select Group</option>
                        {
                            topics.map((topic) => {
                                return (
                                    <option value={topic._id}>{topic.groupName}</option>
                                )
                            }) 
                        }
                    </select>
                </div>
                <br></br>
                <div className="col-md-8">
                    <label className="form-label">Topic</label>
                    <input type="text" className="form-control" value={topicName} readOnly></input>
                </div>
                <br></br>
                <div className="col-md-8">
                    <label className="form-label">Supervisor</label>
                    <input type="text" className="form-control" value={supervisor} readOnly></input>
                </div>
                <br></br>
                <div className="col-md-8">
                    <label className="form-label">Co-Supervisor</label>
                    <input type="text" className="form-control" value={coSupervisor} readOnly></input>
                </div>
                <br></br>
                <div className="col-md-8">
                <label className="form-label">Panel Member 1</label>
                    <select className="form-select" onChange={(event) => panelMember1(event)} required>
                        <option selected disabled>Select Panel Member 1</option>
                        {
                            staffs.map((staff) => {
                                return (
                                    <option value={staff._id}>{staff.S_name}</option>
                                )
                            }) 
                        }
                    </select>
                </div>
                <br></br>
                <div className="col-md-8">
                <label className="form-label">Panel Member 2</label>
                    <select className="form-select" onChange={(event) => panelMember2(event)} required>
                        <option selected disabled>Select Panel Member 2</option>
                        {
                            staffs2.map((staff) => {
                                return (
                                    <option value={staff._id}>{staff.S_name}</option>
                                )
                            }) 
                        }
                    </select>
                </div>
                <br></br>
                <div className="col-md-8">
                <label className="form-label">Panel Member 3</label>
                    <select className="form-select" onChange={(event) => panelMember3(event)} required>
                        <option selected disabled>Select Panel Member 3</option>
                        {
                            staffs3.map((staff) => {
                                return (
                                    <option value={staff._id}>{staff.S_name}</option>
                                )
                            }) 
                        }
                    </select>
                </div>
                <br></br>
                <button type="submit" className="btn btn-success">Save</button>
                <br></br>
                <br></br>
            </form>
            <br></br>
            <br></br>
        </div>
    )
}

export default Panels;