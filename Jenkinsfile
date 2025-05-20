pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts artifacts: '**/*', fingerprint: true
      }
    }

    stage('Deploy') {
      steps {
        sshagent(['Sumanth-Keypair']) {
          sh '''
            echo "Deploying app to cloud VM..."

            # Upload code to the VM
            scp -o StrictHostKeyChecking=no -r * ubuntu@13.51.172.212:/home/ubuntu/myapp

            # SSH in and restart app
            ssh -o StrictHostKeyChecking=no ubuntu@<VM_IP> << EOF
              cd /home/ubuntu/myapp
              npm install
              pm2 startOrRestart index.js --name my-node-app
            EOF
          '''
        }
      }
    }
  }
}

