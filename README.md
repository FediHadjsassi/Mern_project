# 📋 Application de Gestion de Projets et Tâches

## 🖋️ Description

Une application web conçue pour gérer efficacement les projets et les tâches. Développée avec le MERN stack (MongoDB, Express, React, Node.js), elle permet de créer, suivre et organiser des projets, tout en assignant et suivant les tâches de manière simple et efficace. L'interface utilisateur est intuitive et le backend robuste, offrant une gestion fluide des projets et de leur progression.

---


## 🚀 Fonctionnalités
- **Gestion des Projets** : Créer, modifier et archiver des projets.
- **Gestion des Tâches** : Ajouter, assigner et suivre l’état des tâches (en cours, terminées, en attente).
- **Tableaux de Bord** : Vue d’ensemble des projets et statistiques des tâches.
- **Gestion des Priorités** : Classement des tâches par priorité.
- **Authentification Sécurisée** : Connexion et inscription des utilisateurs avec rôles spécifiques.
- **Design Réactif** : Optimisé pour les ordinateurs et appareils mobiles.
- **Containerization with Docker**: Simplified deployment using Docker containers.
- **Continuous Integration with Jenkins**: Automated builds, tests, and Docker image publishing.
- **Deployment with Kubernetes**: Scalable and reliable deployment with Kubernetes.
- **Application Deployment with ArgoCD:** GitOps approach for Kubernetes deployment.

---

## 🔧 Tech Stack
### **Frontend**
- **React.js** with TailwindCSS/Bootstrap
- **React Router:** For navigation
- **Axios:** For API calls

### **Backend**
- **Node.js** with Express.js
- **MongoDB:** Database for storing all data

### **Containerization and Orchestration**
- **Docker**: Dockerize the application for better portability and consistency across environments.
- **Kubernetes**: Manage deployment, scaling, and operations of application containers.

### **CI/CD**
- **Jenkins**: Automate the deployment pipeline, including testing, building Docker images, and deploying to Kubernetes.



---

## 📂 Structure du Projet

### **Frontend**
Located in the `/frontend` folder:
```
src/
├── components/        
├── index.js            
├──setupTests.js
└── App.js             
```

### **Backend**
Located in the `/backend` folder:
```
routes/
├── projects.js
├── tasks.js
├── users.js
```

### **Kubernetes Configuration**

```
- `server-deployment.yaml`: Kubernetes configuration for the backend deployment
- `client-deployment.yaml`: Kubernetes configuration for the frontend deployment
- `mongodb-deployment.yaml`: Kubernetes configuration for the MongoDB service
```

---

## 🚀 Installation et Lancement

### Install Dependencies

1. **Navigate to the backend folder**:

```bash
cd server
npm install
```

2. **Navigate to the frontend folder**:

```bash
cd ../client
npm install
```

### Start the Application

1. **Start the backend server**:

```bash
cd server
npm start
```

2. **Start the React frontend**:

```bash
cd ../client
npm start
```

### Access the Application
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3001`

---

## 🔑 Default Users

**Admin**
- Username: `admin`
- Password: `test123`

---

## 📦 Conteneurisation avec Docker


### Dockeriser l'Application

1. **Dockerfile Backend** : Dans le dossier /server, crée un Dockerfile pour construire l'image de l'application backend.

2. **Frontend Dockerfile**:  Dans le dossier /client, crée un Dockerfile pour le frontend.

3. **Build Docker Images**

```bash
# Build backend image
docker build -t fedihajsassi/mern-server ./server
# Build frontend image
docker build -t fedihajsassi/mern-client ./client
```

4. **Run Docker Containers**

```bash
docker run -p 5000:5000 project_mern-server
docker run -p 3000:3000 project_mern-client
```

### Docker Compose
To simplify multi-container management, use Docker Compose for the entire application.

1. **docker-compose.yml**:

2. **Start Tous Les Services**

```bash
docker-compose up --build
```
  *  Poussez les images Docker sur Docker Hub
![ dockerlance]((https://github.com/FediHadjsassi/Mern_project/issues/1#issue-2788245852)) 
---

## 🤖 Jenkins Setup

1. **Installer Jenkins**: 
Suivez les instructions d'installation de Jenkins pour votre environnement (https://www.jenkins.io/doc/book/installing/).

2. **Jenkins Pipeline for CI/CD**:

3. **Jenkins Job**: Créez un job de pipeline Jenkins et pointez-le vers le repository contenant votre Jenkinsfile. Configurez le job pour exécuter le script de pipeline ci-dessus.
![dock](https://github.com/user-attachments/assets/b1fcf5c0-66e2-47a1-980e-a643e59417c8)
---

## 🛥️ Deployment Kubernetes 

1. **Kubernetes Configurations**:

2. **Apply Kubernetes Configurations**:

```bash
kubectl apply -f .server-deployment.yaml
kubectl apply -f .client-deployment.yaml
kubectl apply -f .mongodb-deployment.yaml
```

3. **Check Pod Status**:

```bash
kubectl get pods
```
![Page](Screen/dock.PNG)
---

## 🔹 Helm and ArgoCD Integration



1. **Ajouter Helm Repositories**:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

2. **Install Prometheus**:

```bash
helm install prometheus prometheus-community/prometheus --namespace monitoring --create-namespace
```



### Set Up ArgoCD

1. **Install ArgoCD**:

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```





## 🖍 Conclusion
Cette application de gestion de projets et de tâches fournit une solution complète et évolutive pour organiser vos workflows, améliorer la collaboration en équipe et suivre les performances en temps réel. Grâce aux technologies modernes comme Kubernetes, Docker, et Grafana, elle garantit une expérience fiable et efficace.
