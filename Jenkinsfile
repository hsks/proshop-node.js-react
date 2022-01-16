pipeline {
    agent {
        docker { 
        label 'ec2-fleet' 
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
