import React,{useState,useEffect} from "react";
import axios from "axios";
import { Table, Button, Row ,Col, NavItem } from 'react-bootstrap';

export default function Retrivemarks(){
    const[retrievemarks,setRetrievemarks]=useState([]);
    useEffect(()=>{
        function getRetrievemarks(){
            axios.get('http://localhost:5000/stumarks/view',retrievemarks).then((res)=>{
                setRetrievemarks(res.data);
            }).catch((err)=>{
                alert(err.message);
                console.log(err);
            })
        }
        getRetrievemarks();
    },[retrievemarks])



    return(

         
             <Table striped bordered hover responsive className='table-sm'>
 
                 <thead>
                     <tr>
                         <th>Group ID</th>
                         <th>Group Name</th>
                         <th>Topic</th>
                         <th>Topic Status</th>
                         <th>Mark 01</th>
                        <th>Mark 02</th>
                         <th>Mark 03</th>
                         <th>Total Mark</th>
                         <th>Ev Report</th>
 
                     </tr>
                    
                 </thead>
                 <tbody>
                  
                    {retrievemarks.map((Items)=>(
                        <tr>
                            <td>
                                {Items.group_id}
                            </td>
                            <td>
                                {Items.group_name}
                            </td>
                            <td>
                                {Items.topic}
                            </td>
                            <td>
                                {Items.topic_status}
                            </td>
                            <td>
                                {Items.marking_type1}
                            </td>
                            <td>
                                {Items.marking_type2}
                            </td>
                            <td>
                                {Items.marking_type3}
                            </td>
                            <td>
                                {Items.total_marks}
                            </td>
                            <td>
                                {Items.evaluation_rep}
                            </td>
                        </tr>
                    ))}
                      
 
                         
                     
                     
                     
                 </tbody>
             </Table>
    )
}


