var getTranslationMacro = require("@jochlain/babel-macro-translations").default;
var { createMacro } = require("babel-plugin-macros");
var yaml = require("js-yaml");

var macro = getTranslationMacro({
    extension: /\.ya?ml$/,
    load: function (content) {
        return yaml.load(content);
    },
});

module.exports = createMacro(macro, {
    configName: '@jochlain/translations-yaml',
});
