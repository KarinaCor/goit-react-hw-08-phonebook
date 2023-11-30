import { useSelector } from "react-redux"
import { selectAuthenticated, selectUserData } from "redux/auth/auth.selector"


export const Layout = () => {

    const authenticated = useSelector(selectAuthenticated)
    const userData = useSelector(selectUserData)
    return(
        <></>
    )
}