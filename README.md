# 🛒 Gestion de Produits – React + Node.js (Express + TypeScript)

Ce projet est une application de gestion de produits composée de deux parties distinctes :

- **Frontend** : construit avec **React** via **Vite**, qui affiche une interface simple pour gérer les produits (affichage, ajout, suppression).
- **Backend** : API REST construite avec **Node.js**, **Express** et **TypeScript**, qui fournit les données des produits.

---

## 📁 Structure du projet
    test_technique/
    ├── pepper-react/ # React + Vite
    ├── api-peprs_node/ # Node.js + Express (TypeScript)
    ├── docker-compose
    ├── document d’architecture
    └── README.md


---

## 🚀 Lancer le projet en local

### 1. Backend – Node.js

Dans le dossier `backend`, installe les dépendances et lance le serveur :

```bash
npm install
npx ts-node server.ts

### 1. Front-end – Vite + React

```bash
npm install
npm run dev

## Fonctionnalités

- 📦 Affichage de la liste des produits depuis l'API jsonplaceholder.typicode.com  
- 📦 Affichage de la liste des produits depuis l'API REST GET /product, POST /product et DELETE /product/:id  
- ➕ Ajout d’un nouveau produit via formulaire  
- ❌ Suppression d’un produit  
- 🔁 Mise à jour en temps réel de la liste après action  
- 🔔 Simulation d’envoi de notification après ajout ou suppression de produit  


## 🧪 Technologies utilisées

### Frontend
- Vite
- React
- Fetch API

### Backend
- Node.js
- Express.js
- TypeScript

## 🌐 API REST disponible

- **GET /products** → Liste des produits
- **POST /products** → Ajout d’un produit ({ name, price })
- **DELETE /products/:id** → Suppression d’un produit
