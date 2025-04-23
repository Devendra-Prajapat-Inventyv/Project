const express = require('express');
const client = require('prom-client');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Prometheus: collect default system metrics
client.collectDefaultMetrics();

// Counter for HTTP requests by method and status code
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

// Middleware to track HTTP requests
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter
      .labels(req.method, req.route ? req.route.path : req.path, String(res.statusCode))
      .inc();
  });
  next();
});

// Serve React build files
app.use(express.static(path.join(__dirname, 'build')));

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ App running at http://localhost:${PORT}`);
  console.log(`📊 Metrics exposed at http://localhost:${PORT}/metrics`);
});
