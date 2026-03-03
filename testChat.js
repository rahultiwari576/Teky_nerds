import http from 'http';

const data = JSON.stringify({ question: 'what services you offered' });
const options = {
  hostname: 'localhost',
  port: 5001,
  path: '/api/v1/chat',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (d) => (body += d));
  res.on('end', () => {
    console.log('response:', body);
  });
});

req.on('error', (e) => {
  console.error('request error', e);
});
req.write(data);
req.end();
