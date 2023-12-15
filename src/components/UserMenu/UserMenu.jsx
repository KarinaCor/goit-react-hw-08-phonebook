const { useDispatch, useSelector } = require("react-redux")
const { selectAuthenticated } = require("redux/auth/auth.selector")
const { logOutThunk } = require("redux/auth/authOperation")


const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectAuthenticated)

    return (
        <div>
          <div>
            <h3>Welcome, {user.name}</h3>
            <p>{user.email}</p>
          </div>
          <button onClick={() => dispatch(logOutThunk())}>
            Log out
          </button>
        </div>
      );
}

export default UserMenu