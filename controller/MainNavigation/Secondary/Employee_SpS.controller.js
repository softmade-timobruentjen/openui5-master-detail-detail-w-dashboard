sap.ui.define([
	"UI5FioriForTools/controller/MainNavigation/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("UI5FioriForTools.controller.MainNavigation.Secondary.Employee_SpS", {

		onInit: function () {
			/*var oRouter = this.getRouter();

			oRouter.getRoute("employee_SpS").attachMatched(this._onRouteMatched, this);
		
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
			this.getView().setModel(model);*/

		}
	});
});
