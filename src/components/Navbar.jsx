import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </div>
  )
}

export default Navbar