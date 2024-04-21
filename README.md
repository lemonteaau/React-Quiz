# React-Quiz

This is a quiz application built with React. It fetches questions from a fake API using json-server. The user can select an answer for each question and receive points based on the correctness of their answers. The app also includes a timer that limits the total time available to complete the quiz.

<img width="1299" alt="image" src="https://github.com/lemonteaau/React-Quiz/assets/104964583/0a89e34c-f528-4776-93d4-3804ae8359ef">


## Features

- Fetches questions from a fake API using json-server
- Displays questions one at a time
- Allows the user to select an answer for each question
- Awards points based on the correctness of the user's answers
- Includes a timer that limits the total time available to complete the quiz
- Tracks the user's highscore across quiz attempts
- Provides a start screen, finish screen, and error handling


## Getting Started

1. Clone the repository:

```
git clone https://github.com/lemonteaau/React-Quiz.git
```

2. Install the dependencies:

```
cd React-Quiz
npm install
```

3. Start the json-server:

```
npm run server
```

This will start the json-server and watch the `data/questions.json` file for changes. The server will run on `http://localhost:8000`.

4. In a separate terminal, start the React development server:

```
npm start
```

This will start the React app and open it in your default browser. The app will be available at `http://localhost:3000`.


## Credits

- This project is based on a project from JONAS SCHMEDTMANN's "The Ultimate React Course". The course provided the foundation and guidance for building this app.


## License

This project is open source and available under the [MIT License](https://github.com/lemonteaau/React-Quiz/blob/master/LICENSE).
