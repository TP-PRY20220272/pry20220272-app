import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import useAuth  from "../hooks/use-auth";
import MyNavbar from "./my-navbar/my-navbar";
import './MyStyles.css'


const RequireAuth = () => {

  const {auth} = useAuth();
  const location = useLocation();

  return(
    auth?.user
    ? <>
    <Row>
      <MyNavbar/>
      <Col>
        <Outlet/>
      </Col>
    </Row>
    </>
    : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;