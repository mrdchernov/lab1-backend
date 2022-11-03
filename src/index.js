const express = require('express');
const cors = require('cors');
const dogsRouter = require('./router/dogs');

process.on('unhandledRejection', (err) => {
  console.error(err);
});

const app = express();
app.use(cors());
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()}: url - ${req.url} method = ${req.method}`)
    next();
})
app.use('/api/dog', dogsRouter);

app.listen(3001, () => {
    console.log('listening on port 3001')
});