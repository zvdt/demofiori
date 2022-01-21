sap.ui.define([
	"demo_fiori/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("demo_fiori.controller.App", {
			onInit: function() {
			 var oViewModel;

			oViewModel = new JSONModel({
				saveEnabled: false,
				submitEnabled: false,
				downloadAttachEnabled: false,
				attachDeleteEnabled: false,
				downloadItemEnabled: false,
				uploadItemEnabled: false,
				attachFileEnabled: false,
				manage : false
			});
			this.setModel(oViewModel, "detailView");
			
			var oModel = new JSONModel({});
			this.setModel(oModel, "masterItem");
			var oModel1 = new JSONModel({});
			this.setModel(oModel1, "listItem");
			var oModel2 = new JSONModel({});
			this.setModel(oModel2, "masterList");
		}
	
	});
});