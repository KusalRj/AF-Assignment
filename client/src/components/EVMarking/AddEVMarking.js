import React ,{useState}from "react";
import axios from "axios";

export default function AddEVMarking(){

    const [group_name,setGroup_name] = useState("");
    const [intro,setIntro] = useState("");
    const [body,setBody] = useState("");
    const [conclusion,setConclusion] = useState("");
    const [fluency,setFluency] = useState("");
    const [present,setPresent] = useState("");
    const [grammar,setGrammar] = useState("");
    const [layout,setLayout] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newEvMarking = {
            group_name,
            intro,
            body,
            conclusion,
            fluency,
            present,
            grammar,
            layout
        }
        
        axios.post("http://localhost:8082/evMarking/addEvP",newEvMarking).then(() => {
            alert("Evaluation marks will be added")
        }).catch((err) => {
            alert(err)
        })
        
    }

    return(
        <div className="container">
            <h1>Add Evaluation presentations mark</h1>
            <form onSubmit={sendData}>
            <div className="mb-3">
                    <label htmlFor="group_name" className="form-label">Group Name</label>
                    <input type="text" className="form-control" id="group_name" placeholder="Enter Group name"
                    onChange={(e) => {
                        setGroup_name(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="intro" className="form-label">Introduction marks (max mark = 10)</label>
                    <input type="text" className="form-control" id="intro" placeholder="Enter Introduction marks"
                    onChange={(e) => {
                        setIntro(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body marks (max mark = 20)</label>
                    <input type="text" className="form-control" id="body" placeholder="Enter body marks"
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="conclusion" className="form-label">Discussion and Conclusion marks (max mark = 10)</label>
                    <input type="text" className="form-control" id="conclusion" placeholder="Enter Discussion and Conclusion marks"
                    onChange={(e) => {
                        setConclusion(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fluency" className="form-label">Fluency marks (max mark = 10)</label>
                    <input type="text" className="form-control" id="fluency" placeholder="Enter Fluency marks"
                    onChange={(e) => {
                        setFluency(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="present" className="form-label">Presentation marks (max mark = 15)</label>
                    <input type="text" className="form-control" id="present" placeholder="Enter Presentation marks"
                    onChange={(e) => {
                        setPresent(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="grammar" className="form-label">Grammar marks (max mark = 15)</label>
                    <input type="text" className="form-control" id="grammar" placeholder="Enter Grammar marks"
                    onChange={(e) => {
                        setGrammar(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="layout" className="form-label">Layout marks (max mark = 10)</label>
                    <input type="text" className="form-control" id="layout" placeholder="Enter Layout marks"
                    onChange={(e) => {
                        setLayout(e.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}
