# Image de base Node
FROM node:18

# Dossier de travail dans le container
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code backend
COPY . .

# Exposer le port utilisé par le backend (ex : 3001)
EXPOSE 3001

# Démarrer le serveur Node
CMD ["node", "server.js"]
