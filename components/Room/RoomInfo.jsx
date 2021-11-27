import { GoBroadcast } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import RoomStyles from '../Room.module.css';

const RoomInfo = ({ count }) => {
  return (<div
    className={`${RoomStyles['room-header']} flex space-between`}>
    <h3
      className="heading-lg text-light flex"
    >
      <GoBroadcast
        style={{
          marginRight: '10px', width: '22px',
          height: '22px'
        }} />
      Stages Clone
    </h3>
    <h3
      className="heading-lg text-light flex"
    ><FiUsers
        style={{
          marginRight: '10px', width: '22px',
          height: '22px'
        }} />{count}
    </h3>
  </div>);
}

export default RoomInfo;