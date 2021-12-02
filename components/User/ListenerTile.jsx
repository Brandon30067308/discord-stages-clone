import Avatar from "boring-avatars";

import RoomStyles from '../Room.module.scss';
import PermissionsMenu from "./PermissionsMenu";
import HandRaiseBadge from './HandRaiseBadge';
import getName from '../../utils/getName';

const ListenerTile = ({ peer }) => {

  return (
    <div className={`${RoomStyles['listener-tile']} relative flex flex-column-gap-1`}>
      <PermissionsMenu id={peer.id}
        audioTrack={peer.audioTrack} />
      <div className="flex flex-column flex-row-gap">
        <Avatar name={peer.name} size="65" />
        <span style={{ letterSpacing: ".185px" }}
          className="text-sm">
          {getName(peer.name)}</span>
      </div>
      {peer.roleName === 'handraise' &&
        <HandRaiseBadge />}
    </div>
  );
}

export default ListenerTile;