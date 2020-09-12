const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, role, email, github) {
        super(name, id, role, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }

}

module.exports = Engineer

