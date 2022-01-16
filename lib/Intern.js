const employee = require('./Employee');

class Intern extends employee{
    constructor (name='', ID, Email, School){
        super(name, ID, Email);

        this.School = School;
    }

    getSchool(){
        return `School: ${this.School}`;
    }

    getRole(){
        return `Intern`;
    }
}

module.exports = Intern;