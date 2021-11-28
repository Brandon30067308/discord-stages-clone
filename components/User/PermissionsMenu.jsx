import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  useHMSStore,
  selectLocalPeer,
  useHMSActions
} from '@100mslive/hms-video-react';

import RoomStyles from '../Room.module.css';

const PermissionsMenu = ({ audioTrack,
  id, styles }) => {
  const hmsActions = useHMSActions();

  /* for moderators */
  const mutePeer = () => {
    hmsActions.
      setRemoteTrackEnabled(audioTrack,
        false);
  };

  const changeRole = (role) => {
    hmsActions.changeRole(id, role, true);
  };

  const localPeer = useHMSStore(selectLocalPeer);
  const [showMenu, setShowMenu] = useState(false);

  const isModerator =
    localPeer.roleName === 'moderator';

  if (isModerator) {
    return (
      <div
        className="absolute w-100"
        style={{
          zIndex: "50",
          right: "0px",
          top: "5px",
          cursor: "pointer"
        }}>
        <AiOutlineMenu
          size="20"
          className="absolute"
          style={{ right: "0px", ...styles }}
          onClick={() =>
            setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div
            className={
              `${RoomStyles['menu']}`}>
            <button
              className={`${RoomStyles['permission-btn']}`}
              onClick={() => mutePeer()}>
              Mute
            </button>
            <button
              className={`${RoomStyles['permission-btn']}`}
              onClick={() => changeRole('listener')}>
              Make Listener
            </button>
            <button className={`${RoomStyles['permission-btn']}`}
              onClick={() => changeRole('speaker')}>
              Make Speaker
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default PermissionsMenu;
