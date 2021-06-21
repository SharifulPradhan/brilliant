
<h1>Briliant</h1>
<img src="./src/images/logo.png" width="150px" alt="main-logo"/>

This is Briliant web repository.

### Contents
<nav>
    <ul>
        <li><a href="#instructions">Instructions</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#code-style">Code Style</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <ul>
            <li><a href="#screenshots-browser-view">Browser View</a></li>
            <li><a href="#screenshots-tablet-view">Tablet View</a></li>
            <li><a href="#screenshots-mobile-view">Mobile View</a></li>
        </ul>
        <li><a href="#available-scripts">Available Scripts</a></li>
        <li><a href="#frequently-asked-questions">Frequently Asked Questions</a></li>
    </ul>
</nav>

<h2 id="instructions">Instructions</h2>
<ul>
    <li>check if NPM, NODE, and Yarn are installed on your machine</li>
    <li>If not, install Node and Yarn in the order mentioned</li>
    <li>clone the repo</li>
    <li>At the root of the project, type "yarn install"</li>
    <li>run the project with "yarn start"</li>
</ul>

<h2 id="tech-stack">Tech Stack</h2>
<ul>
    <li>
        React -> Core Module of the Project.<br>
        Docs and useful Links:
        <ul>
            <li><a href="http://reactpatterns.com/">React patterns</a> - List of common react patterns</li>
        </ul>
    </li>
    <li>Bootstrap & React-Bootstrap -> The good old Bootstrap.<br>
        Documentation:
        <ul>
            <li><a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/">Bootstrap</a></li>
            <li><a href="https://react-bootstrap.github.io/">React-Bootstrap</a></li>
        </ul>
    </li>
    <li>React-Fontawesome -> Icon library. <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">Documentation</a></li>
    <li>axios -> Library for HTTP requests. <a href="https://github.com/axios/axios">Documentation</a></li>
    <li>React-i18next -> Translations provider. <a href="https://react.i18next.com/">Documentation</a></li>
    <li>Formik -> Forms handler <a href="https://formik.org/docs/tutorial">Documentation</a></li>
    <li>Yup -> Forms errors handler (couples well with formik) <a href="https://www.npmjs.com/package/yup">Documentation</a>. Formik has docs on how to couple with Yup.</li>
</ul>
This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a> and yarn.

<h2 id="code-style">Code Style</h2>
<h4>Linting</h4>
<p>This codebase uses `eslint` and `stylelint` for forcing code style. If using vscode, please install both extensions:</p>
<ul>
    <li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</a></li>
    <li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">StyleLint</a></li>
</ul>

<h4>BEM</h4>
<p>BEM is a CSS pattern for developing better styling that has less specificity. It aims to stop class nesting and overwriting, this way you can be sure that your component will inherit the styles you want.</p>
<p>Please, read more here: <a href="http://getbem.com/introduction/">BEM Pattern for CSS</a></p>

<h2 id="available-scripts"> Available Scripts</h2>
In the project directory, you can run:

### `yarn install`

Install packages in `package.json`. These packages are required for application to run.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn eslint`
Runs linting checks for .js and .jsx files.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

Make sure you have the firebase tools installed by running `npm install -g firebase-tools`. Request access to our firebase account and run `firebase login`.

1) Copy the environment variables to your `.env` that will be used in production
2) Run `yarn build` to build the frontend and get it ready for deployment
3) Run `firebase deploy` to deploy the application.

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


<dl>
    <dt><h2 id="frequently-asked-questions">Frequently Asked Questions</h2></dt>
    <dd>
    <details>
        <summary>How to add a user account to the database?</summary>
        <ol>
            <li>Clone the api repo and follow these steps:<br>
                * Start the container <code>$ docker-compose up</code><br>
                * Run migration <code>$ docker-compose exec web python manage.py migrate</code><br>
                * Create an admin user<code> $ docker-compose exec web python manage.py createsuperuser</code><br>
            </li>
            <li>Install <a href="https://tableplus.com">TablePlus</a>. After installing, follow these steps to connect to the db: <br>
                * Establish connection to the db: Connection -> New -> PostgresSQL -> Create <br>
                * Use following info for the connection<br><code>Name: pick-a-name | Host/socket: 127.0.0.1 | Port: 5432 | User: postgres | password: postgres | Database: postgres</code>
            </li>
            <li>Clone the web repo and follow these steps:<br>
                * Install dependencies<code>$ yarn install</code><br>
                * Run app <code>$ yarn start</code><br>
                * Create account: sign up for a new user at http://localhost:3000/register<br>
                * Verify account: go back to TablePlus -> open your conenction -> in tables tab, select account_emailaddress -> Set 'verified' variable of your new account to 'TRUE'. <br>==> Your account is ready for signing in.
            </li>
        </ol>
    </details>
    </dd>
</dl>
