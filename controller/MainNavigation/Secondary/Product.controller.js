sap.ui.define([
	"UI5FioriForTools/controller/MainNavigation/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("UI5FioriForTools.controller.MainNavigation.Secondary.Product", {

		onInit: function () {
			var oRouter = this.getRouter();

			oRouter.getRoute("product").attachMatched(this._onRouteMatched, this);

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

		_onRouteMatched: function (oEvent) {
			var oArgs, oView;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path: "/Products(" + oArgs.productId + ")",
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},

		_onBindingChange: function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		}

	});

});
