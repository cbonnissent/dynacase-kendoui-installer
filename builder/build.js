//noinspection BadExpressionStatementJS
({
    baseUrl : "./js",
    paths :   {
        "kendo-culture-fr" :     "cultures/kendo.culture.fr-FR",
        "kendo-culture-en" :     "cultures/kendo.culture.en",
        "jquery" : "empty:"
    },
    map : {
        "kendo-culture-en" : {
            "../kendo.core" : "kendo.core"
        },
        "kendo-culture-fr" : {
            "../kendo.core" : "kendo.core"
        }
    },
    onBuildWrite : function (name, path, contents) {
        contents = contents.replace(/(['"])\.\.\/kendo\.(\w+['"])/g, "$1kendo.$2");
        return contents.replace(/(['"])kendo\.(\w+['"])/g, "$1kendo/kendo.$2");
    },
    wrap: {
        startFile: '../../../builder/start.js.frag',
        endFile: '../../../builder/end.js.frag'
    },
    optimize : "none",
    name :    "../main",
    out :     "./js/kendo-ddui-builded.js"
})