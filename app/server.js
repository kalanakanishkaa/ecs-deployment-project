const express = require('express');
const app = express();
const PORT = 8080;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Main page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My ECS Application</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255,255,255,0.1);
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        h1 { font-size: 2.5em; margin-bottom: 10px; }
        p { font-size: 1.2em; }
        .info { 
          background: rgba(255,255,255,0.2);
          padding: 20px;
          margin-top: 20px;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Welcome to My ECS Application!</h1>
        <p><strong>Created by: YOUR NAME HERE</strong></p>
        <div class="info">
          <p>✅ This application is running on AWS ECS Fargate</p>
          <p>🐳 Deployed automatically using GitHub Actions</p>
          <p>🏗️ Infrastructure managed by Terraform</p>
          <p>⏰ Current time: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});