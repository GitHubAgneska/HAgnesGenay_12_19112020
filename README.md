##  Développer un tableau de bord d'analytics avec React

1. [Cahier des charges (fr)](#CAHIER-DES-CHARGES)
2. [Installation steps and prerequisites (en)](#INSTALLATION-STEPS-AND-PREREQUISITES)

***

## CAHIER DES CHARGES

### CONTEXTE

#### Développer une page de profil pour une application sportive avec React :

##### Contraintes :
- Respecter les [users stories](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e).
- Utiliser D3 ou Recharts pour intégrer les graphiques.
- Développer pour Desktop (1440 x 1080).
- Réaliser des calls HTTP sur le backend.
- Réaliser les calls avec Fetch ou Axios.
- Réaliser les calls en dehors des composants Reacts.
- Rédiger la documention en anglais (voir 2.).
- Documenter chaque fonction et méthode.

#### TECHNOLOGIES UTILISÉES
- HTML5.
- CSS3.
- Javascript.
- ESLinter.
- Prettier.
- React.
- React Router.
- Recharts.
- Create React App.
- Visual Studio Code.

***

## INSTALLATION STEPS AND PREREQUISITES

Build a user profile page in React, fetching data from a NodeJS external server.

### DEPENDENCIES ---------------------------------------------------

- [React](https://reactjs.org/) v17.0.2
- [React-router-dom](https://reactrouter.com/web/guides/quick-start) v17.0.2
- [Recharts](https://recharts.org/en-US) v2.0.10
- [Styled-components](https://styled-components.com/) v5.3.0

#### Installation Dependencies

- You need [Git](https://git-scm.com/) to clone the repository
- You need [Node](https://nodejs.org/en/) (v14.17.5) to run the `npm` commands


### INSTALL AND RUN PROJECT ---------------------------------------

#### Installation

- Clone the project to your computer:

`git clone https://github.com/GitHubAgneska/HAgnesGenay_12_19112020`

- Open the project folder
- Go to the app:

`cd sportsee-app`

- Install the packages:

`npm i`

#### Running

- Run the project (port 3001 by default):

`npm run start`

- The 2 URL available (for the 2 users) are:
  - `http://localhost:3001/12`
  - `http://localhost:3001/18`


### BACKEND ---------------------------------------------------------
- Backend using [Node.js](https://nodejs.org/en/).
- To get the backend API, fork [this repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) and follow the instructions.
---
## Further information

- Project build with [Create React App](https://github.com/facebook/create-react-app).
- Run the project with npm or yarn.

---