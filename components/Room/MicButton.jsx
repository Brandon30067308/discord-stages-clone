import { MicOffIcon, MicOnIcon } from '@100mslive/hms-video-react';

import RoomStyles from '../Room.module.scss';

const MicButton = ({ isMicOn, toggleMic }) => {
  return (
    <button onClick={toggleMic}
      className={`${RoomStyles['mic-btn']} flex`}>
      {isMicOn ? (<MicOnIcon
        style={{ width: "24px", fill: "#fff" }} />) :
        (<MicOffIcon
          style={{ width: "24px", fill: "#fff" }} />)}
    </button>
  );
}

export default MicButton;