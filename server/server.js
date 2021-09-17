const express = require('express');
const cors = require('cors')
const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// require files(route and mongoose)
require('./config/mongoose.config');

require('./routes/routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})