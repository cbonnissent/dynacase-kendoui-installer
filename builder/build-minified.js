({
    baseUrl : ".",
    shim : {
        "kendo/kendo.core" :  {
            "deps" : ["jquery"]
        }
    },
    paths :   {
        "kendo" :                "js/",
        "kendo-culture-fr" :     "js/cultures/kendo.culture.fr-FR",
        "kendo-culture-en" :     "js/cultures/kendo.culture.en",
        "jquery" : "empty:"
    },
    wrapShim: false,
    generateSourceMaps : true,
    preserveLicenseComments : false,
    optimize : "uglify2",
    name :    "main",
    out :     "js/kendo-ddui-builded.min.js"
})