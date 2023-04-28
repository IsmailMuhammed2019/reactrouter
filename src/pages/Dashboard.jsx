
const Dashboard = ({user}) => {
  return (
    <div className="section">
        <h3>Hello, {user?.name}</h3>
    </div>
  )
}

export default Dashboard