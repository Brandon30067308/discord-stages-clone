import JoinStyles from '../Join.module.scss';
import Loader from '../common/Loader';

const JoinButton = ({ joinRoom,
  loading, error, errRef }) => {

  return (
    <button
      type="submit"
      disabled={loading || error}
      className={`${JoinStyles['join-button']} flex relative w-100`}
      style={{ columnGap: ".4rem" }}
      onClick={joinRoom}>
      Join
      {loading && <Loader />}
      <div
        ref={errRef}
        className={`${JoinStyles['error']} flex flex-column-gap w-100 absolute`}>
        Error...
      </div>
    </button>
  )
}

export default JoinButton;