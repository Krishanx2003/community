import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'

const Career = () => {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link to="/career">Go to Career Page</Link>
    </div>
  )
}

export default Career
