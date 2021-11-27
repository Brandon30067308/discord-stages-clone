import Head from 'next/head';

import Join from '../components/Join';
import Room from '../components/Room';
import {
  HMSRoomProvider,
  selectIsConnectedToRoom,
  useHMSStore
} from '@100mslive/hms-video-react';

const StagesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  console.log('is connected changed: ', isConnected);
  // const isConnected = true;
  return isConnected ? <Room /> : <Join />;
};

const App = () => {
  return (
    <HMSRoomProvider>
      <Head>
        <title>Discord Stages Clone</title>
      </Head>
      <StagesApp />
    </HMSRoomProvider>
  );
};

export default App;
