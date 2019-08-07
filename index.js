const MoonCompiler = require("moon-compiler");

module.exports = function MoonLoader(source) {
	return MoonCompiler.compile(source);
};
