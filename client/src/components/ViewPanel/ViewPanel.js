import React ,{useState ,useEffect}from "react";
import axios from "axios";

export default function ViewPanel () {

    const[viewPanels,setViewPanels] = useState([]);

    useEffect(() => {

        function getViewPanels(){
            axios.get("http://localhost:8082/api/panel/",viewPanels).then((res) => {
                setViewPanels(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getViewPanels();

    },[viewPanels])

    return(

        <div className="container">
            <h1>View add them to Panel</h1>
          
            <table className="table table-striped">
  
                <thead>
                    <tr>
                        <th scope="col">Group Name</th>
                        <th scope="col">Panel Member Name</th>  
                        <th scope="col">Panel Member Name</th>
                        <th scope="col">Panel Member Name</th>                      
                    </tr>
                </thead>
                <tbody>                    
                    {
                        viewPanels.map((viewPanel) =>(
                            <tr>
                                <td>{viewPanel.group}</td>
                                <td>{viewPanel.member1}</td>
                                <td>{viewPanel.member2}</td>
                                <td>{viewPanel.member3}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            
        </div>
    )

}
