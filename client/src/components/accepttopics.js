import React, {useState  } from 'react'
import axios from "axios";

export default function Accepttopics(){
    
    const [group_id, setGroupId]= useState("");
    const [group_name, setGroupName]= useState("");
    const [topic, setTopic]= useState("");
    const [topic_status, setTopicStatus]= useState("");
    
    function sendData(e){
        e.preventDefault();
        const newAccepttopics={
            group_id,
            group_name,
            topic,
            topic_status,
          
        }
        axios.post('http://localhost:5000/accepttopics/add', newAccepttopics).then(()=>{
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
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">ADD</button>
        </form>
        </div>
    )
}