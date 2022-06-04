import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import StudentProfile from "./components/StudentProfile";
import Signup from "./components/Singup/signUp";
import Login from "./components/Login";
import RegTopic from "./components/RegTopic";
import RegGroup from "./components/RegGroup";
import RegTopicUpdate from"./components/RegTopicUpdate";
import TopicDetailsRetrieve from"./components/TopicDetailsRetrieve";
import Home from "./components/Home";
import Panels from "./components/panels";
import Staff from "./components/staff";
import Students from "./components/students";
import AddStuMarks from './components/addStuMarksSp';
import Retrivemarks from './components/retrievemarks';
//import ChatPage from './components/chatpage';
import Accepttopics from './components/accepttopics';
import Topicedit from './components/topicviewedit';
import AddEvaluateTopic from './components/EvaluateTopic/AddEvaluateTopic';
import AllEvaluateTopics from './components/EvaluateTopic/AllEvaluateTopic';
import AddEVMarking from './components/EVMarking/AddEVMarking';
import ViewMarking from './components/EVMarking/ViewMarking';
import ViewPanel from './components/ViewPanel/ViewPanel';
import StaffSignup from './components/StaffRegister/StaffRegister';

//import FileUpload from "./components/FileUpload";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<StudentProfile />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/regtopic" exact element={<RegTopic />} />
			<Route path="/reggroup" exact element={<RegGroup />} />
			<Route path="/regtopicupdate" exact element={<RegTopicUpdate />} />
			<Route path="/regtopicretrieve" exact element={< TopicDetailsRetrieve/>} />
			<Route path="/students" element={<Students/>}/>
            <Route path="/staff" element={<Staff/>}/>
            <Route path="/panels" element = {<Panels/>}/>
        	<Route path="/admin" element = {<Home/>}/>
			<Route path="/add"  exact element={<AddStuMarks />}></Route>
          {/*<Route path="/chat"  exact element={<ChatPage />}></Route>*/}
          <Route path='/view' exact element={<Retrivemarks/>}></Route>
          <Route path="/topic" exact element={<Accepttopics/>}></Route>
          <Route path="/topicview" exact element={<Topicedit/>}></Route>
			{/* <Route path="/fileupload" exact element={< FileUpload/>} /> */}

			<Route path='/addT' element={<AddEvaluateTopic/>}/>
          <Route path='/viewT' element={ <AllEvaluateTopics/>} /> 
          <Route path='/addEvP' element={ <AddEVMarking/>} /> 
          <Route path='/viewMarks' element={ <ViewMarking/>}/>
          <Route path='/viewP' element={ <ViewPanel/>}/>
          <Route path='/addStaff' element={<StaffSignup/>}/>

		</Routes>
	);
}

export default App;
