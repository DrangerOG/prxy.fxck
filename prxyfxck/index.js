// index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Specify the target URL
const TARGET_URL = 'https://prxyfxck'; // Change this to your target URL

// Create a proxy middleware
app.use('/api', createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '', // Optionally removes "/api" from the proxied request URL
    },
}));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Proxy Server</h1><p>Use /api to proxy requests.</p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});
