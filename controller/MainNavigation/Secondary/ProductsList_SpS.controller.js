sap.ui.define([
	"UI5FioriForTools/controller/MainNavigation/BaseController",
	'jquery.sap.global',
	'sap/m/TablePersoController',
	'UI5FioriForTools/controller/MainNavigation/DemoPersoService',

	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function (BaseController, jQuery, TablePersoController, DemoPersoService, JSONModel) {
	"use strict";

	var TableController = BaseController.extend("UI5FioriForTools.controller.MainNavigation.Secondary.ProductsList_SpS", {

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

			this._oTPC = new TablePersoController({
				table: this.byId("table"),
				//specify the first part of persistence ids e.g. 'demoApp-productsTable-dimensionsCol'
				componentName: "demoApp",
				persoService: DemoPersoService
			}).activate();
		},
		onPress: function (oEvent) {
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("product", {
				productId: oCtx.getProperty("ProductID")
			});
		},
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onUpdateFinished: function (oEvent) {
			var sTitle = "Products",
				oTable = this.getView().byId("table");

			if (oTable.getBinding("items").isLengthFinal()) {
				var iCount = oEvent.getParameter("total"),
					iItems = oTable.getItems().length;
				sTitle += "(" + iCount + ")";
			}
			this.getView().byId("title").setText(sTitle);
		},
		onPersoButtonPressed: function (oEvent) {
			this._oTPC.openDialog();
		}
	});
	return TableController;
});
