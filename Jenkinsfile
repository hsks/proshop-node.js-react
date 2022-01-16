pipeline {
    agent {
        docker { 
        label 'ec2' 
        image 'node:16.13.1-alpine' 
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'cd frontend'
                sh 'npm install'
            }
        }        
    }
}
