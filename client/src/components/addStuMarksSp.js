import React, {useState  } from 'react'
import axios from "axios";

export default function AddStuMarks(){
    
    const [group_id, setGroupId]= useState("");
    const [group_name, setGroupName]= useState("");
    const [topic, setTopic]= useState("");
    const [topic_status, setTopicStatus]= useState("");
    const [marking_type1, setMarkingType1]= useState("");
    const [marking_type2, setMarkingType2]= useState("");
    const [marking_type3, setMarkingType3]= useState("");
    const [total_marks, setTotalMarks]= useState("");
    const [evaluation_rep, setEvRp]= useState("");
    
    function sendData(e){
        e.preventDefault();
        const newAddStuMarks={
            group_id,
            group_name,
            topic,
            topic_status,
            marking_type1,
            marking_type2,
            marking_type3,
            total_marks,
            evaluation_rep
        }
        axios.post('http://localhost:5000/stumarks/add', newAddStuMarks).then(()=>{
            alert("Added!")
        }).catch((err)=>{
            alert(err)
        })
    }

    
    return(
        <div className="container">
        <form onSubmit={sendData}>
            <div class="mb-3">
                <label for="groupId" class="form-label">Group ID</label>
                <input type="text" class="form-control" id="groupId" placeholder="Group ID" onChange={(e)=>{
                    setGroupId(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="groupName" class="form-label">Group Name</label>
                <input type="text" class="form-control" id="groupName" placeholder="Group Name" onChange={(e)=>{
                    setGroupName(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="topic" class="form-label">Topic</label>
                <input type="text" class="form-control" id="topic" placeholder="Topic" onChange={(e)=>{
                    setTopic(e.target.value)
                }}/>
            </div>
           
            <div class="mb-3">
                <label for="topicStatus" class="form-label">Topic Status</label>
                {/*<input type="text" class="form-control" id="topicStatus" placeholder="Topic Status"/>*/}
                <select class="form-control" id="topicStatus" onChange={(e)=>{
                    setTopicStatus(e.target.value)
                }}> 
                    <option value="Submited On-Time">Select</option>
                    <option value="Submited On-Time">Submited On-Time</option>
                    <option value="Late Submition">Late Submition</option>
                </select>
            </div>
            
            <div class="mb-3">
                <label for="markingType1" class="form-label">Marking Type 01</label>
                <input type="number" class="form-control" id="markingYype1" onChange={(e)=>{
                    setMarkingType1(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="markingType2" class="form-label">Marking Type 02</label>
                <input type="number" class="form-control" id="markingType2" onChange={(e)=>{
                    setMarkingType2(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="markingType3" class="form-label">Marking Type 03</label>
                <input type="number" class="form-control" id="markingType3" onChange={(e)=>{
                    setMarkingType3(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="totalMarks" class="form-label">Full Marks</label>
                <input type="number" class="form-control" id="totalMarks" onChange={(e)=>{
                    setTotalMarks(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="evRep" class="form-label">Extra Evaluation Details</label>
                <input type="text" class="form-control" id="evRep" onChange={(e)=>{
                    setEvRp(e.target.value)
                }}/>
            </div>
            <button type="submit" class="btn btn-primary">ADD</button>
        </form>
        </div>
    )
}


