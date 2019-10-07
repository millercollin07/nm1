This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run locally with Node

From the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building/Running a Docker Image

From the application directory containing Dockerfile, you can run:

### `docker build -t millercollin07/nm1 .`
### `sudo docker run -d -p 5000:5000 -t millercollin07/nm1:latest`

you will then be able to see the project running at [http://localhost:5000](http://localhost:5000) as it would run in production.
To pull the current image from docker hub run:

### `docker pull docker pull millercollin07/nm1`

