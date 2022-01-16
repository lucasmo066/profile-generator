const employee = require('./Employee');

class Engineer extends employee{
    constructor (name='', ID, Email, Github){
        super(name, ID, Email);

        this.Github = Github;
    }

    getGithub(){
        return `Github: <a href="https://github.com/${this.Github}" target="_blank" rel="noopener noreferrer">${this.Github}</a>`
    }

    getRole(){
        return `Engineer`;
    }
}

module.exports = Engineer;