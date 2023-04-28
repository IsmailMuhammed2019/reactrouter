import { Navigate } from "react-router-dom"

const Protectedpage = ({children, user}) => {

    if(!user) {
        return <Navigate to='/' />
    }

  return children
}

export default Protectedpage