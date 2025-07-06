const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/test', (req, res) => {
  res.send('Test route works!');
});

// ❌ This must be at the bottom (not before):
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found nn' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
