require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackroute');
const contactRoutes = require('./routes/contactroute');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', feedbackRoutes);
app.use('/api', contactRoutes);
app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
