import React ,{useState ,useEffect}from "react";
import axios from "axios";

export default function ViewPanel () {

    const[viewPanels,setViewPanels] = useState([]);

    useEffect(() => {

        function getViewPanels(){
            axios.get("http://localhost:8070/viewPanel/",viewPanels).then((res) => {
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
                    </tr>
                </thead>
                <tbody>                    
                    {
                        viewPanels.map((viewPanel) =>(
                            <tr>
                                <td>{viewPanel.group_name}</td>
                                <td>{viewPanel.panel_name}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            
        </div>
    )

}
