This project simulates a movie database. It is using HTML, CSS (with Sass preprocessor, Bootstrap 5 framework and FontAwesome 6) and JavaScript (with React + React Router v6). Fetching data was handled using json-server (see: https://www.npmjs.com/package/json-server).

In order to run the project please type following commands in your VSCode terminal once you've opened the project's root directory:

npm start (start the server, port 3000 by default)
json-server --watch src/vendors/json-server/db.json -c .\src\vendors\json-server\json-server.json (start the json-server to handle fetching, db.json contains data and json-server.json contains config).
Watch a video presenting the project: https://www.youtube.com/watch?v=VsbXyodExYU

Layout inspired by:
https://dribbble.com/shots/14233681-Movie-Theatre-layout-pack-Divi
