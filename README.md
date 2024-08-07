# Pré-requis:
- Node.js > 20
- npm > 10

# Installation du microservice d'authentification
```cd auth```
```npm install```
Puis dupliquer le fichier .env.example en .env et y insérer les données.

# Installation du microservice des produits
```cd products```
```npm install```
Puis dupliquer le fichier .env.example en .env et y insérer les données.

# Installation de l'API Gateway
```cd gateway```
```npm install```
Puis dupliquer le fichier .env.example en .env et y insérer les données.

# Lancement de Docker Compose en developpement
docker compose up --watch