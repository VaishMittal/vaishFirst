import "./MainLayout.css";
import {Link,Outlet} from "react-router-dom";
function MainLayout() {
  return (
    <div >
      <nav>
        <ul className="mynav">
            {/* <li><Link to="/">About</Link></li> */}
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            
        </ul>
      </nav>
      {/* outlet tells where to display */}
      <Outlet>

      </Outlet>
    </div>
  )
}

export default MainLayout
