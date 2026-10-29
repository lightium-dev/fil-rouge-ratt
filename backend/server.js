const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à PostgreSQL réussie');

    await sequelize.sync();
    console.log('Table users synchronisée');

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur lors du démarrage :', error.message);
  }
};

startServer();