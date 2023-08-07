# Event Planner

Created with the use of a [personal react project template](https://github.com/supermacchan/react-project-template) bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with autodeploy to GH-pages.

### Live page

The live page for this project is available via the following link:
https://supermacchan.github.io/event-planner/

### The website currently allows:
- browsing through available events
- opening an event page to see more details about the selected event
- creating new events
- editing the existing events
- deleting events
- filtering the events by categories
- filtering the events by title via entering the keywords into the search form in the top bar

The website has adaptive [design](https://www.figma.com/file/HxMha50XQyTUVGxOsIgDrM/Event-Planner_%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B5?type=design&mode=design&t=FsffPSkyZIhIcwrG-0), developed for all types of devices (mobile phones, tablets and desktops).

The website has potential for some other features, like more sorting optons, pagination of the list of events, support of other languages, authorization and personal events. These (and some others) are included in a roadmap for further development of this project.

-----------------

## Getting ready: installing and launching the app

1. Make sure you have the LTS version of Node.js installed on your computer. [Download and install here](https://nodejs.org/en) if necessary.
2. Install the basic dependencies of the project with the `npm install` command.
3. Start development mode by executing `npm start` command.
4. Go to the browser at http://localhost:3000. This page will automatically reload after saving changes to project files.

## Deploy

The production version of the project will automatically be linted, compiled and deployed to GitHub Pages, in the gh-pages branch, whenever the main branch is updated. For example, after a direct push or an accepted pull request.

### Deploy status

The deployment status of the last commit is displayed by an icon next to its identifier.

- **Yellow color** - the project is being compiled and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, compilation or deployment.

More detailed information about the status can be viewed by clicking on the icon, then in in the drop-down window go to the Details link.
