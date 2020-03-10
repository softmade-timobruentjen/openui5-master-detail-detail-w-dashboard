sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/Popover',
    'sap/m/Button'
], function (jQuery, Fragment, Controller, JSONModel, Popover, Button) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.Root1", {

        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onPress: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            console.log(this);
            oRouter.navTo("page2");
        },

        onAfterRendering: function () {

            var cellNavigation = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "1",
                });
            };
            this.byId("cell1").attachBrowserEvent("click", cellNavigation.bind(this));

            var cellNavigation2 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "2",
                });
            };
            this.byId("cell2").attachBrowserEvent("click", cellNavigation2.bind(this));

            var cellNavigation3 = function () {
                var oRouter3 = sap.ui.core.UIComponent.getRouterFor(this);
                this.getRouter().navTo("employee", {
                    employeeId: "3",
                });
            };
            this.byId("cell3").attachBrowserEvent("click", cellNavigation3.bind(this));

            var cellNavigation4 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "4",
                });
            };
            this.byId("cell4").attachBrowserEvent("click", cellNavigation4.bind(this));

            var cellNavigation5 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "5",
                });
            };
            this.byId("cell5").attachBrowserEvent("click", cellNavigation5.bind(this));

            var cellNavigation6 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "6",
                });
            };
            this.byId("cell6").attachBrowserEvent("click", cellNavigation6.bind(this));

            var cellNavigation7 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "7",
                });
            };
            this.byId("cell7").attachBrowserEvent("click", cellNavigation7.bind(this));

            var cellNavigation8 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "8",
                });
            };
            this.byId("cell8").attachBrowserEvent("click", cellNavigation8.bind(this));

            var cellNavigation9 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "9",
                });
            };
            this.byId("cell9").attachBrowserEvent("click", cellNavigation9.bind(this));

            var cellNavigation10 = function () {
                this.getRouter().navTo("employee", {
                    employeeId: "10",
                });
            };
            this.byId("cell10").attachBrowserEvent("click", cellNavigation10.bind(this));

        }

    });

    return Controller;
});