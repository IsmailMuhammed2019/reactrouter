import { NavLink } from "react-router-dom"

const Error = () => {
  return (
    <div className="section">
        <h3>Page Not Found</h3>
        <NavLink to='/'>Back to Home</NavLink>
    </div>
  )
}

export default Error