(function packKendo() {

    "use strict";

    if (typeof define === 'function' && define.amd) {
        require([
            "kendo.core",
            "kendo-culture-en",
            "kendo-culture-fr",
            "kendo.popup",
            "kendo.notification",
            "kendo.menu",
            "kendo.window",
            "kendo.autocomplete",
            "kendo.numerictextbox",
            "kendo.calendar",
            "kendo.datepicker",
            "kendo.timepicker",
            "kendo.datetimepicker",
            "kendo.multiselect",
            "kendo.combobox",
            "kendo.dropdownlist",
            "kendo.color",
            "kendo.slider",
            "kendo.colorpicker",
            "kendo.tabstrip",
            "kendo.button"
        ], function require_kendo()
        {
        });
    }
})();
