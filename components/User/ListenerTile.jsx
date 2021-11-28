import Avatar from "boring-avatars";

import RoomStyles from '../Room.module.css';
import PermissionsMenu from "./PermissionsMenu";
import HandRaiseBadge from './HandRaiseBadge';
import getName from '../../utils/getName';

const ListenerTile = ({ peer }) => {

  return (
    <div className={`${RoomStyles['listener-tile']} relative flex`}>
      <PermissionsMenu id={peer.id}
        audioTrack={peer.audioTrack} />
      <div className="flex flex-column flex-row-gap">
        <Avatar name={peer.name} size="65" />
        <span style={{ letterSpacing: ".185px", fontSize: 'var(--font-sm' }}>
          {getName(peer.name)}</span>
      </div>
      {peer.roleName === 'handraise' &&
        <HandRaiseBadge />}
    </div>
  );
}

export default ListenerTile;