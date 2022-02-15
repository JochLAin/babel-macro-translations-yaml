var getTranslationMacro = require("@jochlain/translations-json").default;
var { createMacro } = require("babel-plugin-macros");

var macro = getTranslationMacro({
    extension: /\.json$/,
    load: function (content) {
        return JSON.parse(content);
    },
});

module.exports = createMacro(macro, {
    configName: '@jochlain/translations-yaml',
});
