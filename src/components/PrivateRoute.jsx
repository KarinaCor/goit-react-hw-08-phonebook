import { CONTACTS_ROUTE, LOGIN_ROUTE } from "constants/routes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthenticated } from "redux/auth/auth.selector";


const PrivateRoute = ({children, navigateTo = LOGIN_ROUTE}) => {
    const authenticated = useSelector(selectAuthenticated)

    return authenticated ? children : <Navigate to = {navigateTo} replace />
}

export default PrivateRoute;