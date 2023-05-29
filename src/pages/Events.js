import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Eventcontent from '../components/eventcontent/Eventcontent';
import Event from "../components/event/Event";

const Events = () => {
  return (
    <div>
      <Navbar />
      <Event />
      <Eventcontent />
      
    </div>
  )
}

export default Events;
