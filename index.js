// array of questions for user
let inquirer = require("inquirer"); 
let fs = require("fs");
let generate = require("./utils/generateMarkdown");

const questions = [

        {
            type: "input",
            message: "What is your title?",
            name: "title",
        },
        {
            type: "input",
            message: "Put your description here.",
            name: "Description",
        },
        {
            type: "input",
            message: "Here will be your Table of Contents.",
            name: "Contents",
        },
        {
            type: "input",
            message: "How will you install the app?",
            name: "Installation",
        },
        {
            type: "input",
            message: "What will be the usage?",
            name: "Usage"
        },
        {
            type: "input",
            message: "Write liscense here.",
            name: "License",
        },
        {
            type: "input",
            message: "Who contributed into this project?",
            name: "Contribution",
        },
        {
            type: "input",
            message: "How often did you test this project?",
            name: "Tests",
        },
        {
            type: "input",
            message: "What are you questions?",
            name: "Questions",
        },

];

// function to write README file
inquirer.prompt(questions).then(function (data) {
    fs.writeFile("README.md", generate(data), function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("success");
      }
    });
  });
  
  // function to initialize program
  function init() {}
  
  // function call to initialize program
  init();
  
