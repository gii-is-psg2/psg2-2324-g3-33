const scanner = require('sonarqube-scanner');
// Replace with your project name key and token and 
// use the command 'node ./sonarqube/sonarscan.js' 
// on the frontend folder to analyze
scanner(
    {
        serverUrl: 'https://oitilo.us.es/sonar',
        token: "0957716c42a229673d176555294440d62db55b60",
        options: {
            'sonar.projectName': 'PSG2-2324-G3-33-frontend',
            'sonar.projectDescription': 'Proyecto del grupo G3-33',
            'sonar.projectKey': 'PSG2-2324-G3-33-frontend',
            'sonar.projectVersion': '0.0.1',
            'sonar.login': '0957716c42a229673d176555294440d62db55b60',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)