import MicButton from './MicButton';
import ExitButton from './ExitButton';
import HandRaiseButton from './HandRaiseButton';
import {
  useHMSStore,
  useHMSActions,
  selectIsPeerAudioEnabled,
  selectLocalPeer,
  useHMSNotifications
} from '@100mslive/hms-video-react';

import RoomStyles from '../Room.module.scss';

const Controls = () => {
  const hmsActions = useHMSActions();
  const peer =
    useHMSStore
      (selectLocalPeer);
  const isMicOn = useHMSStore(selectIsPeerAudioEnabled(peer.id));
  const hmsNotifications = useHMSNotifications();

  const isListenerOrHandraised =
    peer.roleName === 'listener' || peer.roleName === 'handraise';

  return (
    <div className={`${RoomStyles['controls']} flex flex-column-gap-1 m-1`}>
      {!isListenerOrHandraised && (
        <MicButton isMicOn={isMicOn}
          toggleMic={() => {
            hmsActions.
              setLocalAudioEnabled(!isMicOn);
          }} />
      )}
      {isListenerOrHandraised && (
        <HandRaiseButton
          isHandRaised={peer.roleName === 'handraise'}
          toggleHandRaise={() => {
            hmsActions.changeRole(
              peer.id,
              peer.roleName === 'listener' ? 'handraise' : 'listener',
              true
            )
          }}
        />
      )}
      <ExitButton exitRoom={() => {
        hmsActions.leave();
      }} />
    </div>
  );
};

export default Controls;