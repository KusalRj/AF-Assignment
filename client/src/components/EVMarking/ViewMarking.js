import React ,{useState ,useEffect}from "react";
import axios from "axios";

export default function ViewMarking () {

    const[evMarks,setEvMarks] = useState([]);

    useEffect(() => {

        function getEvMarks(){
            axios.get("http://localhost:8070/evMarking/",evMarks).then((res) => {
                setEvMarks(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getEvMarks();

    },[evMarks])

    return(

        <div className="container">
            <h1>All Marks </h1>
          
            <table className="table table-striped">
  
                <thead>
                    <tr>
                        <th scope="col">Group Name</th>
                        <th scope="col">Introduction marks</th>
                        <th scope="col">Body marks</th>
                        <th scope="col">Discussion & Conclusion marks</th>
                        <th scope="col">Fluency marks</th>
                        <th scope="col">Presentation marks</th>
                        <th scope="col">Grammar marks</th>
                        <th scope="col">Layout marks</th>
                        <th scope="col">Total marks</th>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        evMarks.map((evMark) =>(
                            <tr>
                                <td>{evMark.group_name}</td>
                                <td>{evMark.intro}</td>
                                <td>{evMark.body}</td>
                                <td>{evMark.conclusion}</td>
                                <td>{evMark.fluency}</td>
                                <td>{evMark.present}</td>
                                <td>{evMark.grammar}</td>
                                <td>{evMark.layout}</td>
                                <td>{evMark.intro+evMark.body+evMark.conclusion+evMark.fluency+evMark.present+evMark.grammar+evMark.layout}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            
        </div>
    )

}
