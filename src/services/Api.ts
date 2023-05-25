import axios from 'axios';

const accountSid = 'AC06798f2080e5f9605bd733a130b41c30';
const authToken = '6cc6bd35328904328b1ab8974dbfd546';
const baseUrl = 'https://api.twilio.com/';

const api = axios.create({
  baseURL: baseUrl,
  auth: {
    username: accountSid,
    password: authToken,
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default api;
