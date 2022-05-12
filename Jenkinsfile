pipeline {
    agent any
    environment{
	    scannerHome = tool 'SonarScanner 3.1.0';
	}
    stages {
        stage ( 'install' ) {
            steps {
                dir( 'build_node' ) {
                    sh 'npm install'
                }
            }
        }
        stage ( 'test' ) {
            // steps {
            //     dir( 'build_node' ) {
            //         sh 'npm test'
            //     }
            // }
            steps {
                echo 'build'
            }
        }
        stage('SonarQube analysis') {
    			steps {
				echo "sonarqube"
				dir("/var/lib/jenkins/workspace/public-page-dev"){
				    withSonarQubeEnv('sonarqube') { // Will pick the global server connection you have configured
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
				}
			}
  		}
        stage ( 'docker Build' ) {
            steps {
                echo 'build'
            }
        }
        stage ( 'docker push' ) {
            steps {
                echo 'push'
            }
        }
        stage('End') {
            steps {
                echo "Deploying Backend"
            }
        }
    }
}