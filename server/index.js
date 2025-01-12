require('dotenv').config(); 
const express = require('express');
const projectApi = require('./routes/projects');
const taskApi = require('./routes/tasks');
const userApi = require('./routes/users');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

require('./config/connect'); 

app.use('/project', projectApi);
app.use('/task', taskApi);
app.use('/user', userApi);

const port = process.env.PORT || 3001; 
// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
