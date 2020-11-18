const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lots', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on(' connected', function() {
    console.log(`connected to MongoDB at ${bd.host}: ${db.port}`)
});

