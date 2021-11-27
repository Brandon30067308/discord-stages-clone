import { v4 } from 'uuid';

export default async function
  getAuthToken(req, res) {
  try {
    console.log('procees.env.: ', process.env.TOKEN_ENDPOINT);
    const { role } = JSON.parse(req.body);

    /* creates a new user and receives a token for the user */
    const response = await
      fetch(`${process.env.TOKEN_ENDPOINT}api/token`, {
        method: 'POST',
        body: JSON.stringify({
          user_id: v4(),
          room_id: process.env.ROOM_ID,
          role,
        }),
      });

    /* respond with token received from 100ms */
    const { token } = await response.json();
    console.log('token: ', token)
    res.status(200).json({ token });
  } catch (error) {
    console.log('error while trying to get auth token: ', error);
    res.status(500).json({ errMsg: error.message });
  }
}
