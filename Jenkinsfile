pipeline {
    agent any

    environment {
        DOCKER_PATH= '/Applications/Docker.app/Contents/Resources/bin/docker'    
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
        stage('Deploy') {
            steps {
                sh '${DOCKER_PATH} build -t docker-project:latest .'
            }
        }
     }
}
