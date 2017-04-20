# React-Redux Todos

A React-Redux todos mini-application made with [create-react-app](https://github.com/facebookincubator/create-react-app).

The app shows some of the features included in both React and Redux. By default it shows a React-only app, but you can quickly switch to the full app by changing a line in the `index.js`.

## Usage

### Prerequisites

This is a Node application. Please install the latest Node version beforehand.

### Installing

```bash
npm install
```

### Running

```bash
npm start
```

### Testing

```bash
npm test
```

### Switching

To switch from React-only to React+Redux, change the following line:

```js
import App from './ui/ReactApp.jsx';
```

into:

```js
import App from './ui/ReactReduxApp.jsx';
```

### Comparing

There's also an uber-minimal AngularJS 1.5.x version, just run the app and browse to http://localhost:3000/angular-todos.html.

### Deploying

Why would you even need to do that? It's just a sample! Anyway:

```bash
npm run build
```

## Contributing

PRs are always welcome, just keep in mind that we want to keep this sample as minimal as possible.

## Authors

- [Matteo Antony Mistretta](https://github.com/IceOnFire)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
