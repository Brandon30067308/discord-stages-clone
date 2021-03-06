import {
  MicOffIcon,
  MicOnIcon,
  useHMSStore,
  selectPeerAudioByID,
  selectIsPeerAudioEnabled,
} from '@100mslive/hms-video-react';
import Avatar from 'boring-avatars';

import PermissionsMenu from './PermissionsMenu';
import RoomStyles from '../Room.module.scss';
import getName from '../../utils/getName';

const SpeakerTile = ({ peer }) => {
  const isSpeaking = useHMSStore(selectPeerAudioByID(peer.id)) > 0;;
  const isMicOn = useHMSStore(selectIsPeerAudioEnabled(peer.id));

  return (
    <div className={`${RoomStyles['speaker-tile']} relative flex-column-gap-1`}>
      <PermissionsMenu
        id={peer.id}
        audioTrack={peer.audioTrack} />
      <div className="flex flex-column flex-row-gap">
        <div className={`${isSpeaking &&
          RoomStyles['speaking']} flex`}>
          <Avatar name={peer.name}
            size="65" />
        </div>
        <span className="flex flex-column-gap">
          {getName(peer.name)}
          {
            isMicOn ? (
              <MicOnIcon
                style={{ width: '22px' }}
                className={RoomStyles['svg']} />
            ) : (<MicOffIcon
              style={{ width: '22px' }}
              className={RoomStyles['svg']} />)
          }
        </span>
      </div>
    </div>
  );
}

export default SpeakerTile;