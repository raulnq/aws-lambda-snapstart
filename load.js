import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 20,
  duration: '60s',
};
export default function () {
  http.get('<MY_ENDPOINT_URL>');
  sleep(1);
}