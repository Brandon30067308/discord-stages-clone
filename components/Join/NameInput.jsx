import JoinStyles from '../Join.module.scss';

const NameInput = ({ name, setName }) => {
  return (
    <input
      type="text"
      placeholder="Username"
      className={`${JoinStyles['join-input']} w-100`}
      value={name}
      onChange={e => setName(e.target.value)}
    />
  )
}

export default NameInput;