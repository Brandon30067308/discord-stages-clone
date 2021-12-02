import { MdOutlineFrontHand } from 'react-icons/md';

import RoomStyles from '../Room.module.scss';

const HandRaiseBadge = () => {
  return (
    <div className={`${RoomStyles['badge-container']} flex`}>
      <MdOutlineFrontHand
        className={`${RoomStyles['badge-icon']}`}
        size="22" />
    </div>
  );
};

export default HandRaiseBadge;