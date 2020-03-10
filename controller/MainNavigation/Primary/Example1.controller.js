sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    "UI5FioriForTools/controller/MainNavigation/BaseController",
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel'
], function (jQuery, Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MainNavigation.Primary.Example1", {

        onInit: function () {

            var oRouter = this.getRouter();

            //Creating and starting MockServer
            jQuery.sap.require("sap.ui.app.MockServer");

            sap.ui.app.MockServer.config({
                autoRespond: true,
                autoRespondAfter: 0
            });

            // create mockserver
            var oMockServer = new sap.ui.app.MockServer({
                rootUri: "/"
            });

            // start and return
            oMockServer.simulate("localService/metadata.xml", "localService/mockdata");
            oMockServer.start();

            var sURL = "/";
            var amodel = new sap.ui.model.odata.ODataModel(sURL, true);
            this.getView().setModel(amodel);
        },

        onUpdateFinished: function (oEvent) {
            var oList = oEvent.getSource();
            var oFirstItem = oEvent.getSource().getItems()[0];
            oList.setSelectedItem(oFirstItem);
            var oContext1 = oFirstItem.getBindingContext().getProperty("FirstName");
            var oContext2 = oFirstItem.getBindingContext().getProperty("LastName");
            var oContext3 = oFirstItem.getBindingContext().getProperty("EmployeeID");
            var oContext4 = oFirstItem.getBindingContext().getProperty("HomePhone");
            var oContext5 = oFirstItem.getBindingContext().getProperty("ImageURI");
            var updatedModel = new sap.ui.model.json.JSONModel();
            updatedModel.setData({
                firstName: oContext1,
                lastName: oContext2,
                employeeID: oContext3,
                homePhone: oContext4,
                imageURI: oContext5,
            });
            this.getView().setModel(updatedModel, "profile");
        },

        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onPress: function (oEvent) {
            var oContext1 = oEvent.getParameter("listItem").getBindingContext().getProperty("FirstName");
            var oContext2 = oEvent.getParameter("listItem").getBindingContext().getProperty("LastName");
            var oContext3 = oEvent.getParameter("listItem").getBindingContext().getProperty("EmployeeID");
            var oContext4 = oEvent.getParameter("listItem").getBindingContext().getProperty("HomePhone");
            var oContext5 = oEvent.getParameter("listItem").getBindingContext().getProperty("ImageURI");
            var updatedModel = new sap.ui.model.json.JSONModel();
            updatedModel.setData({
                firstName: oContext1,
                lastName: oContext2,
                employeeID: oContext3,
                homePhone: oContext4,
                imageURI: oContext5,
            });
            this.getView().setModel(updatedModel, "profile");
        }

    });

    return Controller;
});