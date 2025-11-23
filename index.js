const express = require('express');
const app = express();
const port = 3000;

// Middleware để parse JSON
app.use(express.json());

// Route cơ bản
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! This is an Express.js application.',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Route với parameter
app.get('/api/hello/:name', (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Hello ${name}! Welcome to Express.js`,
    timestamp: new Date().toISOString()
  });
});

// Route POST example
app.post('/api/echo', (req, res) => {
  res.json({
    message: 'Received your data',
    data: req.body,
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}/`);
  console.log(`Available routes:`);
  console.log(`  GET  http://localhost:${port}/`);
  console.log(`  GET  http://localhost:${port}/api/hello/:name`);
  console.log(`  POST http://localhost:${port}/api/echo`);
  console.log(`  GET  http://localhost:${port}/health`);
});
