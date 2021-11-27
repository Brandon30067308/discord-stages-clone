import Avatar from "boring-avatars";

import PermissionsMenu from "./PermissionsMenu";
import HandRaiseBadge from './HandRaiseBadge';
import getName from '../../utils/getName';

const ListenerTile = ({ peer }) => {
  console.log('peer parameter changed: ', console.log('new peer role: ', peer.role));

  return (
    <div className="relative"
      style={{ padding: "1.65rem" }}>
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