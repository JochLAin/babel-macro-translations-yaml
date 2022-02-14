var getTranslationMacro = require("@jochlain/translations-json").default;
var { createMacro } = require("babel-plugin-macros");
var yaml = require("js-yaml");

module.exports = createMacro(getTranslationMacro({
    extension: /\.ya?ml$/,
    load: function (content) {
        return yaml.load(content);
    },
}), {
    configName: '@jochlain/translations-yaml',
});
