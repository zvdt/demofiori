sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("demo_fiori.controller.demo", {
			onInit: function(){
				var oViewModel,
				fnSetAppNotBusy,
				oListSelector = this.getOwnerComponent().oListSelector,
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

				oViewModel = new JSONModel({
					busy: true,
					delay: 0,
					itemToSelect: null,
					addEnabled: true,
					submitEnabled: true,
					editEnabled: false
	
				});
			//	this.setModel(new JSONModel({}), "masterList");	
		     	this.getOwnerComponent().setModel(new JSONModel({}), "masterList");
				var that = this;
				//	var sUrl="http://s4demo.ngs.com.vn:8000/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/";
				//	 var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl,true,"tech_pvn01","a123456");
					var sUrl="/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/";
				// var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);
				  var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);
					oModel2.read("/mara_iSet()", {
						success: function(oData, oResponse) {	
							var oModelList = that.getOwnerComponent().getModel("masterList");
								oModelList.setData(oData.results);
							
						},
						error: function(oError) {
						
						}
					});
			
			},
			onSelectionChange: function(oEvent){
				var title = oEvent.getSource().getSelectedItem().getTitle();
				alert("You have clicked to "+title);
			}
			
	});
});