const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");


const employeeObjArray = []

answerArr = () => {

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name? ",
                name: "name",
                default: "a"
            },
            {
                type: "input",
                message: "What is your ID? ",
                name: "id",
                default: "a"

            },
            {
                type: "list",
                message: "What is your role? ",
                name: "role",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ],
                default: "a"

            },
            {
                type: "input",
                message: "What is your email? ",
                name: "email",
                default: "a"

            },
        ])
        .then((answers) => {
            if (answers.role == "Engineer") {

                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What is your GitHub? ",
                            name: "github",
                            default: "a"
                        }
                    ])
                    .then((answers2) => {
                        const engineer = new Engineer(answers.name, answers.id, answers.role, answers.email, answers2.github)
                        employeeObjArray.push(engineer)
                        console.log(employeeObjArray)


                        inquirer
                            .prompt([
                                {
                                    type: "confirm",
                                    message: "Would you like to continue? ",
                                    name: "end"
                                }
                            ])
                            .then((finish) => {
                                if (finish.end) {
                                    answerArr()
                                } else (
                                    // console.log(employeeObjArray)
                                    fs.writeFile("./output/index.html", render(employeeObjArray), function (err) {
                                        if (err) throw err;
                                        console.log('Check the index.html!')
                                    })

                                )
                            })

                    })
            }
            else if (answers.role == "Intern") {

                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What school did you attend? ",
                            name: "school",
                            default: "a"
                        }
                    ])
                    .then((answers3) => {
                        const intern = new Intern(answers.name, answers.id, answers.role, answers.email, answers3.school)
                        employeeObjArray.push(intern)

                        inquirer
                            .prompt([
                                {
                                    type: "confirm",
                                    message: "Would you like to continue? ",
                                    name: "end"
                                }
                            ])
                            .then((finish) => {
                                if (finish.end) {
                                    answerArr()
                                } else (
                                    fs.writeFile("./output/index.html", render(employeeObjArray), function (err) {
                                        if (err) throw err;
                                        console.log('Check the index.html!')
                                    }))
                            })
                    })
            }
            else if (answers.role == "Manager") {

                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What is your Office Number? ",
                            name: "officeNum",
                            default: "a"
                        }
                    ])
                    .then((answers4) => {
                        const manager = new Manager(answers.name, answers.id, answers.role, answers.email, answers4.officeNum)
                        employeeObjArray.push(manager)

                        inquirer
                            .prompt([
                                {
                                    type: "confirm",
                                    message: "Would you like to continue? ",
                                    name: "end"
                                }
                            ])
                            .then((finish) => {
                                if (finish.end) {
                                    answerArr()
                                } else (
                                    fs.writeFile("./output/index.html", render(employeeObjArray), function (err) {
                                        if (err) throw err;
                                        console.log('Check the index.html!')
                                    }))

                            })
                    })
            }

        })

}
answerArr()

