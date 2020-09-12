const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, role, email, officeNumber) {
        super(name, id, role, email)
        this.officeNumber = officeNumber

    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager


