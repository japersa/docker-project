pipeline {
    agent any

    environment {
        DOCKER_PATH = '/Applications/Docker.app/Contents/Resources/bin/docker'
        DOCKER_COMPOSE = '/Applications/Docker.app/Contents/Resources/bin/docker-compose'
    }
    
    stages {
        stage('Check Docker') {
            steps {
                script {
                    // Verificar si Docker está instalado
                    sh '''#!/bin/bash
                    if ! command -v ${DOCKER_PATH} &> /dev/null
                    then
                        echo "Docker no está instalado. Abortando..."
                        exit 1
                    fi
                    '''
                }
            }
        }

        stage('Check Docker Compose') {
            steps {
                script {
                    // Verificar si Docker Compose está instalado
                    sh '''#!/bin/bash
                    if ! command -v ${DOCKER_COMPOSE} &> /dev/null
                    then
                        echo "Docker Compose no está instalado. Abortando..."
                        exit 1
                    fi
                    '''
                }
            }
        }

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
                script {
                    // Construcción de la imagen Docker
                    sh '''#!/bin/bash
                    echo "Building Docker image"
                    ${DOCKER_PATH} build -t docker-project:latest .
                    '''
                }
            }
        }

        stage('Build with Docker Compose') {
            steps {
                script {
                    // Construcción con Docker Compose
                    echo "Building with Docker Compose"
                    sh '${DOCKER_COMPOSE} build'
                }
            }
        }

        stage('Run Docker Containers') {
            steps {
                script {
                    // Levantar los contenedores con Docker Compose
                    echo "Starting Docker containers"
                    sh '${DOCKER_COMPOSE} up -d'
                }
            }
        }
    }

    post {
        always {
            // Limpiar contenedores si hay un error
            sh '${DOCKER_COMPOSE} down || true'
        }
    }
}
