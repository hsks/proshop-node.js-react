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
    }
}
