const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '96'
        },
        device: 'Windows',
        platform: {
            name: 'Windwos 10',
            version: 'Windows 10 64 bit'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Basic Calculator'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: '1'},
            {label: 'Regression', value: '0'},
            {label: 'Execution Start Time', value: 'Sep 13th 2021, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Spe 13th 2021, 02:56 PM EST'}
        ]
    }
});