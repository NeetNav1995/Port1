import HomeBase from "./Components/Home/HomeBase";
import ProtectedRoutes from "./Routes/ProtectedRoutes";


function App() {
  //return <h1>hello</h1>
   return <ProtectedRoutes />;
}

export default App;
