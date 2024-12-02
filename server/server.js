const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors'); // Import cors
const fs = require('fs');

const PORT = 8080;

// Serve static files from the "dist" directory
console.log(path.join(__dirname, 'dist'))
app.use(cors()); // This will allow all origins
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

app.post('/data', (req, res) => {
    const d = path.join(__dirname, 'data')
    const filename = `data-${Date.now()}.txt`;
    fs.writeFileSync(filename, JSON.stringify(req.body));
    res.send(`Data saved to ${filename}`);
});

// Start the server
app.listen(PORT,  () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
