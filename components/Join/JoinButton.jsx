import JoinStyles from '../Join.module.css';
import Loader from '../common/Loader';

const JoinButton = ({ joinRoom,
  loading, error, errRef }) => {

  return (
    <button
      type="submit"
      disabled={loading || error}
      className={`${JoinStyles['join-button']} flex`}
      style={{ columnGap: ".4rem" }}
      onClick={joinRoom}>
      Join
      {loading && <Loader />}
      <div
        ref={errRef}
        className={`flex flex-column-gap ${JoinStyles['error']}`}>
        Error...
      </div>
    </button>
  )
}

export default JoinButton;