import { Route } from "react-router-dom";
import SignUp from "./component/SignUp"
import LogIn from "./component/LogIn"
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      
      <NavBar/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={LogIn}/>
      
    </div>
  );
}

export default App; 