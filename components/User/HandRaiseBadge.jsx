import { MdOutlineFrontHand } from 'react-icons/md';

import RoomStyles from '../Room.module.css';

const HandRaiseBadge = () => {
  return (
    <div className={`${RoomStyles['badge-container']} flex`}>
      <MdOutlineFrontHand
        style={{
          height: '22px', width: '22px',
          fill: 'var(--color-active)'
        }} />
    </div>
  );
};

export default HandRaiseBadge;