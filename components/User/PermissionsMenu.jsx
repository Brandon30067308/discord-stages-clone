import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  useHMSStore,
  selectLocalPeer,
  useHMSActions
} from '@100mslive/hms-video-react';

import RoomStyles from '../Room.module.scss';

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
        className={`${RoomStyles['permission-menu']} w-100 absolute`}
        style={{
          zIndex: "50",
          right: "0px",
          top: "2px",
          cursor: "pointer"
        }}>
        <AiOutlineMenu
          size="20"
          className={`${RoomStyles['menu-icon']} absolute`}
          onClick={() =>
            setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div
            className={
              `${RoomStyles['menu']}`}
            style={styles}>
            <button
              className={`${RoomStyles['permission-btn']} w-100`}
              onClick={() => mutePeer()}>
              Mute
            </button>
            <button
              className={`${RoomStyles['permission-btn']} w-100`}
              onClick={() => changeRole('listener')}>
              Make Listener
            </button>
            <button className={`${RoomStyles['permission-btn']} w-100`}
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
