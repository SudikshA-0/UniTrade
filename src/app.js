const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // You can change the port number if you like

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/browse.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'browse.html'));
});

app.get('/post-item.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'post-item.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
