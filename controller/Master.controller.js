sap.ui.define([
	"demo_fiori/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(BaseController, JSONModel, Device) {
	"use strict";
	var dataArray = [];
	var subArray = [];
	return BaseController.extend("demo_fiori.controller.Master", {
			onInit: function(){
			// 	var oViewModel,
			// 	fnSetAppNotBusy,
			// 	oListSelector = this.getOwnerComponent().oListSelector,
			// 	iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			// 	oViewModel = new JSONModel({
			// 		busy: true,
			// 		delay: 0,
			// 		itemToSelect: null,
			// 		addEnabled: true,
			// 		submitEnabled: true,
			// 		editEnabled: false
	
			// 	});
			// //	this.setModel(new JSONModel({}), "masterList");	
		 //    	this.getOwnerComponent().setModel(new JSONModel({}), "masterList");
				var that = this;
				//	var sUrl="http://s4demo.ngs.com.vn:8000/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/";
				//	 var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl,true,"tech_pvn01","a123456");
					var sUrl="/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/";
				// var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);
				  var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);
					oModel2.read("/STUDENT_HSet()", {
						success: function(oData, oResponse) {	
							var oModelList = that.getModel("masterList");
								oModelList.setData(oData.results);
								that.dataArray = oData.results;
							
						},
						error: function(oError) {
							console.log('error');
						}
					});
			
			},
			// onSelectionChange: function(oEvent){
			// 	// var title = oEvent.getSource().getSelectedItem().getTitle();
			// 	// alert("You have clicked to "+title);
				
			
			// }
			
			onSelectionChange: function(oEvent) {
				var oItem = oEvent.getParameter("listItem") || oEvent.getSource();
				var oSelectItem = oItem.getBindingContext("masterList").getProperty();
				var id = oSelectItem.ID;
			    var bReplace = !Device.system.phone;
				this.getRouter().navTo("object", {
					ID: id
				}, bReplace);
				
			},
	
		
			onCreate: function(oEvent){
				this.getRouter().navTo("crst");
			},
			
			onSearch: function(oEvent){
				var that = this;
				that.getView().byId("list").removeSelections();
				that.subArray = [];
				var x = oEvent.getParameters();
				if(x.newValue !== ""){
				for(var i = 0; i< that.dataArray.length; i++){
					if( that.dataArray[i].NAME.includes(x.newValue)){
						that.subArray.push(that.dataArray[i]);
					}
				}}else{
					
					that.subArray = that.dataArray;
				}
			
				var oModel1 = that.getModel("masterList");
				oModel1.setData(that.subArray);
				oModel1.refresh();
		}
			
	});
});