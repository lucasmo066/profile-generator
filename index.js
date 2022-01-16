
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const{writeFile} = require('./utils/generate-HTML');
const mock = require('./src/mock-data');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

