const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const appName = process.env.APP_NAME || 'Default App';
const mode = process.env.APP_MODE || 'development';

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/config', (req, res) => {
  res.json({ appName: appName, mode: mode });
});

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
  console.log('App name: ' + appName + ', mode: ' + mode);
});
