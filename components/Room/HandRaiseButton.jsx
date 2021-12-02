import { MdOutlineFrontHand } from 'react-icons/md';

import RoomStyles from '../Room.module.scss';

const HandRaiseButton =
  ({ toggleHandRaise, isHandRaised }) => {
    return (
      <button
        onClick={toggleHandRaise}
        className={`${RoomStyles['handraise-btn']} flex`}
        style={{
          backgroundColor: `${isHandRaised ?
            '#373734' :
            '#171716'}`
        }}>
        <MdOutlineFrontHand size="22" />
      </button>
    )
  }

export default HandRaiseButton;