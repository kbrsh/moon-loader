# Moon Loader

Webpack loader for Moon view language.

## Usage

Use it as a JavaScript loader to compile your JavaScript files so that they can use the Moon view language.

```sh
npm install moon-loader
```

```js
// webpack.config.js
module.exports = {
	module: {
		rules: [
			{ test: /\.js/, use: "moon-loader" }
		]
	}
};
```

## License

Licensed under the [MIT License](https://kbrsh.github.io/license) by [Kabir Shah](https://kabir.sh)
