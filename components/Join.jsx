import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Avatar from 'boring-avatars';
import { useState } from 'react';
import { useHMSActions } from '@100mslive/hms-video-react';

import NameInput from './Join/NameInput';
import RoleSelect from './Join/RoleSelect';
import JoinButton from './Join/JoinButton';
import JoinStyles from './Join.module.css';

let timeoutId;

const Join = () => {
  const hmsActions = useHMSActions();
  const [name, setName] = useState('');
  const [role, setRole] = useState('listener');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const errRef = useRef();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      errRef.current.classList.toggle(JoinStyles['slide-in']);
      if (error) {
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setError(false);
        }, 4500);
      }
    } else {
      isMounted.current = true;
    }
  }, [error]);

  const joinRoom = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/token', {
        method: 'POST',
        body: JSON.stringify({ role })
      });
      if (response.status === 500) {
        const { errMsg } = await response.json();
        console.log('error message: ', errMsg);
        throw new Error(errMsg);
      }
      const { token } = await response.json();
      setLoading(false);
      hmsActions.join({
        userName: name || 'Anonymous',
        authToken: token,
        settings: {
          isAudioMuted: true
        }
      });
    } catch (err) {
      console.log('an error occurred: ', err.message);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <>
      <Image
        src="https://imgur.com/27iLD4R.png"
        alt="Login background"
        layout="fill"
      />
      <div
        className={`${JoinStyles['join-container']} flex flex-column`}>
        <Avatar name={name}
          variant="marble" size="80" />
        <NameInput name={name}
          setName={setName} />
        <RoleSelect role={role}
          setRole={setRole} />
        <JoinButton
          joinRoom={joinRoom}
          loading={loading}
          error={error}
          errRef={errRef} />
      </div>
    </>
  )
}

export default Join;