import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Empform from './components/Empform';
// import Navbar from './components/Navbar';
// import EmpDash from './components/EmpDash';
import EmployeeForm from './EmployeeForm';
import EmployeeDashboard from './EmployeeDashboard';


function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
   <Route path='/list' element={<EmployeeDashboard/>} />
        <Route path='/form' element={<EmployeeForm/>} />
      </Routes>
    
    </div>
  );
}

export default App;

