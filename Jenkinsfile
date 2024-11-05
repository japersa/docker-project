pipeline {
    agent any

    environment {
        DOCKER_PATH= '/Applications/Docker.app/Contents/Resources/bin/docker'
        DOCKER_COMPOSE= '/Applications/Docker.app/Contents/Resources/bin/docker-compose'
    }
    
    stages {
        stage('Build') {
            steps {
                echo 'Run build'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Run Code Analysis'
            }
        }
        stage('Test') {
            steps {
                echo 'Run test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh '${DOCKER_PATH} build -t docker-project:latest .'
            }
        }
        stage('Build with Docker Compose'){
            steps {
                sh '${DOCKER_COMPOSE} build'
            }
        }
        stage('Run docker images'){
            steps {
                sh '${DOCKER_COMPOSE} up -d'
            }
        }
     }
}
