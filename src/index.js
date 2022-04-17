const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, ormErrorHandler } = require('./middleware/errorHandler');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));

app.get('/', (req, res) => {
  res.send('Hi world');
})

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(errorHandler);


app.listen(port, (req, res) => {
  console.log('listening on port ' + port);
})
