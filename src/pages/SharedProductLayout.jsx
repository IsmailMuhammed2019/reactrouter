import { Outlet } from "react-router-dom"

const SharedProductLayout = () => {
  return (
    <div className="section">
        <Outlet />
    </div>
  )
}

export default SharedProductLayout