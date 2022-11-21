const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const courseRoutes = require('./src/routes/course-routes');
const moduleRoutes = require('./src/routes/module-routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', courseRoutes.routes);
app.use('/api', moduleRoutes.routes);

app.listen(config.port, () => console.log('App listening on url http://localhost:' + config.port));
