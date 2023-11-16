const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use('/api/facility', require('./controllers/facilityControl'))
app.use('/api/package', require('./controllers/packageControl'))
app.use('/api/rentalobject', require('./controllers/rentalObjectControl'))
app.use('/api/user', require('./controllers/userControl'))
app.use('/api/order', require('./controllers/orderControl'))
app.use('/api/contact', require('./controllers/contactControl'))
app.use('/api/admin', require('./controllers/adminControl'))


module.exports = app;