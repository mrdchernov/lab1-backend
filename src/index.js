const express = require('express');
const cors = require('cors');
const dogsRouter = require('./router/dogs');

const app = express();
app.use(cors());

app.use('/api/dog', dogsRouter);

app.listen(3001, () => {
    console.log('listening on port 3001')
});