
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const{writeFile} = require('./utils/generate-HTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

const promptUser=(employeeData)=>{
    if(!employeeData){
        employeeData=[];
    }

    //prompts user
    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message:"What is the employee's name?",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else{
                    console.log("Must enter a name!");
                    return false;
                }
            }
        },

        {
            type:'input',
            name:'ID',
            message:"What is the employee's ID?",
            validate: IDInput => {
                if(isNaN(IDInput)){
                    return "Please enter a number";
                }
                return true;
            }
        },

        {
            type:'input',
            name:'email',
            message:"What is the employee's company email?",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else{
                    console.log("Please enter an email address!");
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'employeeType',
            message: "What is the employee's new role",
            choices: ['Engineer', 'Intern', 'Manager'],
            default:['Manager'],
            validate: employeeInput => {
                if(employeeInput){
                    return true;
                } else {
                    console.log('A role must be selected');
                    return false;
                }
            }
        },

        {
           type:'input',
           name:'managerInput',
           message:'Please enter the office number for the Manager.',
            when:({employeeType}) => {
                if(employeeType === 'Manager'){
                    return true;
                } else{
                    return false
                }
            },
            validate: managerInput => {
                if(isNaN(managerInput)){
                    return "Please enter a number";
                }
                return true;
            }

        },

        {
            type: 'input',
            name: 'engineerInput',
            message: "What is the Engineer's GitHub username?",
            when:({employeeType}) => {
                if(employeeType === 'Engineer'){
                    return true;
                } else{
                    return false;
                }
            },
            validate: engineerInput => {
                if(engineerInput){
                    return true;
                } else{
                    console.log('Please enter the GitHub account.');
                    return false;
                }
            }
        },

        {
            type:'input',
            name:'internInput',
            message:"What school does the intern attend?",
            when:({employeeType})=>{
                if(employeeType === 'Intern'){
                    return true;
                }else{
                    return false;
                }
            },
            validate: internInput => {
                if(internInput){
                    return true;
                }else{
                    console.log('Please enter a school.');
                    return false;
                }
            }

        },

        {
            type:'confirm',
            name:'confirmAddEmployee',
            message:'Would you like to add another employee?',
            default: false
        },
    ])

    //creates new object using classes based on type designation
    .then(employeeData => {
        let {name, ID, email, employeeType, managerInput, engineerInput, internInput, confirmAddEmployee} = employeeData;
        let employee;

        if(employeeType === 'Manager'){
            employee = new Manager(name, ID, email, managerInput);
        } else if (employeeType === 'Engineer'){
            employee = new Engineer(name, ID, email, engineerInput);
        } else{
            employee = new Intern(name, ID, email, internInput);
        }
        //creates a new array with new objects
        teamArray.push(employee);
       
        if(employeeData.confirmAddEmployee){
            return promptUser(teamArray);
        } else{
            console.log(teamArray)
            return teamArray;
        }
    })
 
}

promptUser()
    .then(team => {
        return pageTemplate(team);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err)
    })