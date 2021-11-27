import { MdOutlineFrontHand } from 'react-icons/md';

import RoomStyles from '../Room.module.css';

const HandRaiseButton =
  ({ toggleHandRaise, isHandRaised }) => {
    return (
      <button
        onClick={toggleHandRaise}
        className={`${RoomStyles['handraise-btn']} flex`}
        style={{
          backgroundColor: `${isHandRaised ?
            'var(--color-active)' :
            'var(--tile-bg)'}`
        }}>
        <MdOutlineFrontHand size="22" />
      </button>
    )
  }

export default HandRaiseButton;