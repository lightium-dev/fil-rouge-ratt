# Fil Rouge - Application Mobile et API Backend

Mini-projet full-stack d'authentification et de gestion des utilisateurs (Node.js, Express, PostgreSQL / Sequelize, React Native Expo, Zustand, SecureStore).

## 1. Lancer le Backend

1. Ouvrir un terminal dans le dossier backend :
   cd backend

2. Installer les dependances :
   npm install

3. Demarrer la base de donnees PostgreSQL avec Docker :
   docker compose up -d

4. Creer un fichier .env dans backend/ avec les variables suivantes :
   PORT=5000
   DB_NAME=filrouge_db
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_HOST=localhost
   DB_PORT=5432
   JWT_SECRET=votre_secret_jwt

5. Lancer le serveur :
   npm run dev

## 2. Lancer le Mobile (React Native / Expo)

1. Ouvrir un terminal dans le dossier mobile :
   cd mobile

2. Installer les dependances :
   npm install

3. Mettre a jour l'adresse IP locale de votre machine dans mobile/services/api.js (http://VOTRE_IP:5000/api).

4. Demarrer l'application Expo :
   npx expo start

5. Scanner le QR code avec l'application Expo Go sur votre telephone.
