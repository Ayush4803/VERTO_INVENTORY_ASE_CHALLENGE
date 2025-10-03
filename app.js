const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Correct path to routes
const routes = require('./src/routes');
const errorHandler = require('./src/middlewares/error-handler');

app.get('/', (req, res) => res.send("Success"));

// Mount routes
app.use('/api/products', routes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
