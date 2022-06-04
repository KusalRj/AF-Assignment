import React ,{useState ,useEffect}from "react";
import axios from "axios";

export default function AllEvaluateTopics () {

    const[evaluateTopics,setEvaluateTopics] = useState([]);

    useEffect(() => {

        function getEvaluateTopics(){
            axios.get("http://localhost:8082/evTopic/",evaluateTopics).then((res) => {
                setEvaluateTopics(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getEvaluateTopics();

    },[evaluateTopics])

    return(

        <div className="container">
            <h1>All Evaluate Topics</h1>
          
            <table className="table table-striped">
  
                <thead>
                    <tr>
                        <th scope="col">Group Name</th>
                        <th scope="col">Topic Name</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Panel Member Name</th>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        evaluateTopics.map((evaluateTopic) =>(
                            <tr>
                                <td>{evaluateTopic.group_name}</td>
                                <td>{evaluateTopic.topic_name}</td>
                                <td>{evaluateTopic.evaluate_detail}</td>
                                <td>{evaluateTopic.panel_member}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            
        </div>
    )

}
