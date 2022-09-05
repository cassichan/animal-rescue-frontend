import Login from "../components/Common/Login"
import Logout from "../components/Common/Logout"

export default function LogInLogOut () {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <>
         {isLoggedIn
        ? <Logout setIsLoggedIn={setIsLoggedIn} />
        : <Login setIsLoggedIn={setIsLoggedIn} />
      }
        </>
    )
}