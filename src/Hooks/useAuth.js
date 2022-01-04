// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"
// import useFirebase from "./useFirebase"

// const useAuth = () => {
//     const firebaseContent = useFirebase()
//     const dispatch = useDispatch()
//     dispatch(firebaseContent)
//     const allresult = useSelector(state => state.authProvider.auth)
//     return allresult
// }
// export default useAuth
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;