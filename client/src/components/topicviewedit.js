import React,{useState,useEffect, Fragment} from 'react';
import axios from "axios";
import { Table, Button, Row ,Col, NavItem } from 'react-bootstrap';


export default function Topicedit(){
    const[topieditview, setTopiceditview]=useState([]);
    const [editTopicID, setEditTopicID] = useState();
    const [editTopics, setEditTopics] = useState({
        groupId: "",
        groupName: "",
        topic: "",
        topicStatus: ""
    });



    useEffect(()=>{
        function getTopiceditview(){
            axios.get('http://localhost:5000/edittopic/').then((res)=>{
                setTopiceditview(res.data);
            }).catch((err)=>{
                alert(err.message);
                console.log(err);
            })
        }
        getTopiceditview();
    },[])


    const EditClick = (event, Topic) => {
        event.preventDefault();
        setEditTopicID(Topic._id);

        const formValues = {
            groupId: Topic.groupId,
            groupName: Topic.groupName,
            topic: Topic.topic,
            topicStatus: Topic.topicStatus,
        
        }
        setEditTopics(formValues);
    };

    const EditTopics = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const Data = {...editTopics};
        Data[fieldName] = fieldValue;

        setEditTopics(Data);
    } 
    
    const EditSubmit = (event) => {
        event.preventDefault();

        const edits = {
            id: editTopicID,
            groupId: editTopics.groupId,
            groupName: editTopics.groupName,
            topic: editTopics.topic,
            topicStatus: editTopics.topicStatus,
            
        }
        axios.put(`http://localhost:5000/edittopic/update/${editTopicID}`, edits).then(res => {
          //  setTopiceditview(res.data);
          //  setEditTopicID('');
        }).catch(err => {
            console.log(err);
        }) 
    }


    return(
        <div className='container'>
        <form onSubmit={(event) => EditSubmit(event)}>
        <Table striped bordered hover responsive className='table-sm'>
 
                 <thead>
                     <tr>
                         <th>Group ID</th>
                         <th>Group Name</th>
                         <th>Topic</th>
                         <th>Topic Status</th>
                        
                     </tr>
                    
                 </thead>
                 <tbody>
                    {topieditview.map(Items => 
                    <Fragment>
                        {editTopicID === Items._id ? (
                            <tr> 
                            <td><input 
                                type="text" 
                                required
                                name='groupId'
                               
                                value={editTopics.groupId}
                                onChange={EditTopics}></input></td>
                            <td><input 
                                type="text" 
                                readOnly
                                name='groupName'
                                
                                value={editTopics.groupName}
                                onChange={EditTopics}></input></td>
                            <td><input 
                                type="text" 
                                readOnly
                                name='topic'
                                placeholder="topic"
                                value={editTopics.topic}
                                onChange={EditTopics}></input></td>
                            <td><input 
                                type="text" 
                                required
                                name='topicStatus'
                                placeholder="Approved/Rejected"
                                value={editTopics.topicStatus}
                                onChange={EditTopics}></input></td>
                      
                            <td>
                     
                                <button type='submit' className="btn btn-success">Save</button>
                            </td>
                         </tr>
                        ) : (
                     
                  
                    
                        <tr>
                            <td>
                                {Items.groupId}
                            </td>
                            <td>
                                {Items.groupName}
                            </td>
                            <td>
                                {Items.topic}
                            </td>
                            <td>
                                {Items.topicStatus}
                            </td>
                            <td>
                         <button type='button' onClick={(event) => EditClick(event, Items)} className="btn btn-warning">Edit</button>
                            </td>
                        </tr>
                     )}
                     </Fragment>
                     )
                     
                     
                     }
                     
                      
 
                         
                     
                     
                     
                 </tbody>
            </Table>
            </form>
            </div>
    )

}