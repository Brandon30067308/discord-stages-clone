import JoinStyles from '../Join.module.scss';

const RoleSelect = ({ role, setRole }) => {
  return (
    <select
      type="text"
      className={`${JoinStyles['join-select']} w-100`}
      value={role}
      onChange={e => setRole(e.target.value)}>
      <option value="listener">Listener</option>
      <option value="speaker">Speaker</option>
      <option value="moderator">Moderator</option>
    </select>);
}

export default RoleSelect;