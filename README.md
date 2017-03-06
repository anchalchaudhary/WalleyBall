# Walley Ball

An obligatory readme.

# Pre-setup

Make sure you have `npm` installed beforehand.

# How to setup

Clone this repository

`git clone https://github.com/Software-Incubator/WalleyBall.git`

Switch to App directory

`cd WalleyBall`

Spin your App

`npm start`

Visit `http://localhost:3000` to see your app spinning

# How to contribute

Fork this repo to your user account.

Create a local clone of this repo.

`git clone https://github.com/YOUR-USERNAME/WalleyBall`

Set up an `upstream` `remote` pointing to Software-Incubator/WalleyBall repo.

`git remote add upstream https://github.com/Software-Incubator/WalleyBall.git`

Our central development branch is `dev` branch. Coding is done on feature branches based off of `dev` and merged into it once stable and reviewed.
To submit code, follow these steps:

Create a new branch off `dev` and select a descriptive branch name

`git fetch upstream`

`git checkout dev`

`git merge upstream/dev`

`git checkout -b your-sensible-branch-name`

Commit (always use sensible commit messages) and push code to your branch.

`git push origin your-sensible-branch-name`

Create a Pull Request:

On your Github fork, select your branch and click `New pull request`. Select `dev` as the base branch and `your-sensible-branch-name` in the `compare` dropdown.
If the code is mergeable (you get a message saying `Able to merge`), go ahead and create the pull request.