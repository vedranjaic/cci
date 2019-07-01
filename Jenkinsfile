pipeline {
    agent { 
        label 'OCI-agent' 
    }
    
    stages {
        stage('Prepare') {
            steps {
                sh 'npm install'
                sh 'gulp install'
            }
        }
        stage('SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh """/opt/sonar/bin/sonar-scanner \
                            -Dsonar.projectName=${env.JOB_NAME} \
                            -Dsonar.projectKey=${env.JOB_NAME} \
                            -Dsonar.sources=. \
                            -Dsonar.exclusions=node_modules/**,dist/**,build/assets/js/vendors/**"""
                }
            }
        }        
        stage('Publish') {
            steps {
                sh 'npm publish'
            }
        }
    }

    post {
        /*
        always {  
            echo 'This will always run'  
        }  
        success {  
            echo 'This will run only if successful'  
        }  
        unstable {  
            echo 'This will run only if the run was marked as unstable'  
        }  
        changed {  
            echo 'This will run only if the state of the Pipeline has changed'  
            echo 'For example, if the Pipeline was previously failing but is now successful'  
        }
        */
        failure {  
            mail from: 'jenkins@neos.hr', to: "devops@neos.hr", cc: '', bcc: '', subject: "Jenkins error: ${env.JOB_NAME}", body: "Failed project ${env.JOB_NAME} with build number ${env.BUILD_NUMBER} <br> Build URL: ${env.BUILD_URL}", charset: 'UTF-8', mimeType: 'text/html', replyTo: '';  
        }
    }    
}
