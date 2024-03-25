# Utilisez une image Node.js
FROM node:14-alpine

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers du projet dans le conteneur
COPY . .

# Installez les dépendances
RUN npm install

# Exposez le port sur lequel Next.js fonctionne (par défaut 3000)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]