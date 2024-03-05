const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json());

let config = {
    "api_endpoint": process.env.API_ENDPOINT || 'localhost'
};

app.post('/config', (req, res) => {
    const newConfig = req.body;

    Object.keys(newConfig).forEach(key => {
        process.env[key] = newConfig[key];
        config[key] = newConfig[key];
    });

    res.json({message: 'Configuration updated successfully', config});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})