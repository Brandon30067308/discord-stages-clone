import { BiExit } from 'react-icons/bi';

import RoomStyles from '../Room.module.scss';

const ExitButton = ({ exitRoom }) => {
  return (
    <button
      onClick={exitRoom}
      className={`${RoomStyles['exit-btn']} flex flex-column-gap`}
    >
      Exit Quietly
      <BiExit size="22" />
    </button>
  )
}

export default ExitButton;