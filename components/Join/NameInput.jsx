import JoinStyles from '../Join.module.css';

const NameInput = ({ name, setName }) => {
  return (
    <input
      type="text"
      placeholder="Username"
      className={JoinStyles['join-input']}
      value={name}
      onChange={e => setName(e.target.value)}
    />
  )
}

export default NameInput;