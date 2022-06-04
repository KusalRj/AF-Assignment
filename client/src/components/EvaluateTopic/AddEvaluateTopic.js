import React ,{useState}from "react";
import axios from "axios";

export default function AddEvaluateTopic(){

    const [group_name,setGroup_name] = useState("");
    const [topic_name,setTopic_name] = useState("");
    const [evaluate_detail,setEvaluate_detail] = useState("");
    const [panel_member,setPanel_member] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newEvaluateTopic = {
            group_name,
            topic_name,
            evaluate_detail,
            panel_member
        }
        
        axios.post("http://localhost:8082/evTopic/add",newEvaluateTopic).then(() => {
            alert("Evaluation added")
        }).catch((err) => {
            alert(err)
        })
        
    }

    return(
        <div className="container">
            <h1>Add Evaluation Topic</h1>
            <form onSubmit={sendData}>
            <div className="mb-3">
                    <label htmlFor="group_name" className="form-label">Group Name</label>
                    <input type="text" className="form-control" id="group_name" placeholder="Enter Group name"
                    onChange={(e) => {
                        setGroup_name(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="topic_name" className="form-label">Topic Name</label>
                    <input type="text" className="form-control" id="topic_name" placeholder="Enter Topic name"
                    onChange={(e) => {
                        setTopic_name(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Evaluate_detail" className="form-label">Evaluation Details</label>
                    <textarea className="form-control" id="Evaluate_detail" placeholder="Enter Evaluation Details" rows="3"
                    onChange={(e) => {
                        setEvaluate_detail(e.target.value);
                    }}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="panel_member" className="form-label">Panel Member Name</label>
                    <input type="text" className="form-control" id="panel_member" placeholder="Enter Panel member name"
                    onChange={(e) => {
                        setPanel_member(e.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}
