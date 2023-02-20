#! /usr/bin/env node
const simpleGit = require("simple-git");

const repoUrl = "https://github.com/softcery/shopify-app-template-go.git";

const cloneRepo = () => {
  localPath = "./softcery-shopify-app-template-go";

  console.log(`Cloning repository to "." ...`);
  const git = simpleGit();

  git.clone(repoUrl, localPath, (err) => {
    if (err) {
      console.error(`Error cloning repository: ${err}`);
      return;
    }

    console.log("Repository cloned!");

    process.chdir(localPath);
  });
};

cloneRepo();
