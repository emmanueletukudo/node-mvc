import arg from "arg";
import inquirer from "inquirer";
import {createProject} from "./main";

function passArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
      skipPrompt: args["--install"] || false,
      git: args["--git"] || false,
      template: args._[0],
      runInstall: args["--install"] || false,
  }
}

async function propmtForMissingOptions(options){
    const defaultTemplate = "Javascript";
    if(options.skipPrompt){
        return{
            ...options,
            template: options.template || defaultTemplate,
        }
    };

    const questions = [];
    if (!options.template) {
        questions.push({
            type: "list",
            name: "template",
            message: "Please selcet a template to use",
            choices: ["Javascript", "Typescript"],
            default: defaultTemplate,
        });
    }

    if (!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Initialize a git respository',
            default: false,
        })
    }

    const asnswers =  await inquirer.prompt(questions);

    return{
        ...options,
        template: options.template || asnswers.template,
        git: options.git || asnswers.git,
    }
}


export async function cli(args) {
    let options = passArgumentsIntoOptions(args);
    options = await propmtForMissingOptions(options);
  await createProject(options);
}
