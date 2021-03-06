sap.ui.define([
    'UI5FioriForTools/controller/MainNavigation/BaseController'
], function (BaseController) {
    "use strict";

    var Controller = BaseController.extend("UI5FioriForTools.controller.MainNavigation.Primary.Example4", {
        onInit: function () {
            var oRouter = this.getRouter();

            oRouter.getRoute("employee").attachMatched(this._onRouteMatched, this);

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
            var model = new sap.ui.model.odata.ODataModel(sURL, true);
            this.getView().setModel(model);
        },
        onPress: function (oEvent) {
            var oItem, oCtx;
            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();
            this.getRouter().navTo("employee", {
                employeeId: oCtx.getProperty("EmployeeID")
            });
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },
        onUpdateFinished: function (oEvent) {
            var sTitle = "Local Administrators",
                oList = this.getView().byId("list");

            if (oList.getBinding("items").isLengthFinal()) {
                var iCount = oEvent.getParameter("total"),
                    iItems = oList.getItems().length;
                sTitle += "(" + iCount + ")";
            }
            this.getView().byId("title").setText(sTitle);
        }
    });

    return Controller;
});