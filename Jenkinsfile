@Library('piper-lib-os') _


pipeline {

    agent any

    stages {
        stage("prepare") {
            steps {
                deleteDir()
                checkout scm
                setupCommonPipelineEnvironment script: this
            }
        }

        stage('build') {
            steps {
                // It depends on your project, what needs to be done here.
                // Use the SAPUI5 toolset to build your SAPUI5 application
                // and run the build command of the npmExecuteScripts step.
                npmExecuteScripts(script: this, runScripts: ['build'])
            }
        }
        // Get the transport request id from your git commit message.
        stage('request') {
            steps {
                transportRequestReqIDFromGit( script: this )
            }
        }
        // This attaches the deployable to a transport request.
        // Note: ODATA/CTS does not support the mtaBuild tool.
        stage('attach') {
            steps {
                transportRequestUploadCTS script: this)
            }
        }
    }
}
