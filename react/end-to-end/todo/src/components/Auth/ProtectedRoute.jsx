import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({children}){
    const {isLogin} = useAuth();
    if(!isLogin){
        return <Navigate to={'/'} replace/>
    }
    return children

}
export default ProtectedRoute;