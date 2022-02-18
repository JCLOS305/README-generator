var readmeGenerator = require("./readmeGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// questions i want to be asked  //
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "Please describe the repository.",
        name: "description"

    },{

        type: "input",
        message: "installation instructions",
        name: "install"
    },{

        type: "input",
        message: "usage information",
        name: "Usage"
    },{
        type: "input",
        message: "Can other users contribute?",
        name: "contribute"
    },{
        type: "input",
        message: "Can project be tested? How?",
        name: "test"
    },{

        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Was a license used for this project?",
        choices : [
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Please provide a screenshot",
        name: "scriptjs"
    },
    
];


