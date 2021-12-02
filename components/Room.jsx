import {
  useHMSStore, selectPeers
} from '@100mslive/hms-video-react';

import RoomStyles from './Room.module.scss';
import RoomInfo from './Room/RoomInfo';
import SpeakerTile from './User/SpeakerTile';
import ListenerTile from './User/ListenerTile';
import Controls from './Room/Controls';

const Room = () => {
  const peers = useHMSStore(selectPeers);

  const speakersAndModerators =
    peers.filter(
      (peer) => peer.roleName === 'speaker'
        || peer.roleName === 'moderator'
    );
  const listenersAndHandraised =
    peers.filter(
      (peer) => peer.roleName === 'listener'
        || peer.roleName === 'handraise'
    );

  return (
    <div
      className={`${RoomStyles['room-container']} flex flex-column space-between justify-start`}>
      <RoomInfo count={peers.length} />
      <div className="w-100 flex flex-column align-start justify-start my-2"
        style={{ flex: "1 1 0%" }}>
        <h3 className="heading-sm"
          style={{ marginBottom: '2rem' }}>
          Speakers - {speakersAndModerators.length}
        </h3>
        <div className="flex flex-wrap flex-row-gap"
          style={{ columnGap: ".75rem", rowGap: "1rem" }}>
          {speakersAndModerators.map(
            speaker => (
              <SpeakerTile
                key={speaker.id}
                peer={speaker} />
            ))}
        </div>
        <h3 className="heading-sm my-2">
          Listeners - {listenersAndHandraised.length}
        </h3>
        <div className="flex flex-wrap row-gap flex-column-gap-2 flex-row-gap-2">
          {listenersAndHandraised.map(
            listener => (
              <ListenerTile
                key={listener.id}
                peer={listener} />
            ))}
        </div>
      </div>
      <Controls />
    </div>);
}

export default Room;