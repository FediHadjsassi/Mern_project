pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'ToolLocationNodeJS'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://gitlab.com/your-repository.git'  // Remplacez par l'URL de votre dépôt GitLab
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'npm run deploy'
                }
            }
        }
    }
}
