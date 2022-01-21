sap.ui.define([
	"demo_fiori/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/library",
	"sap/m/MessageBox"
], function(BaseController, JSONModel, MobileLibrary, MessageBox) {
	"use strict";
	var ListMode = MobileLibrary.ListMode,
		ListSeparators = MobileLibrary.ListSeparators;
		var ID;
	return BaseController.extend("demo_fiori.controller.Detail", {
			onInit: function(){
				this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
				
				this.getView().setModel(new JSONModel({
				"maximumFilenameLength": 55,
				"maximumFileSize": 1000,
				"mode": ListMode.MultiSelect,
				"uploadEnabled": true,
				"uploadButtonVisible": true,
				"enableEdit": false,
				"enableDelete": false,
				"visibleEdit": false,
				"visibleDelete": false,
				"listSeparatorItems": [
					ListSeparators.All,
					ListSeparators.None
				],
				"showSeparators": ListSeparators.All,
				"listModeItems": [{
					"key": ListMode.SingleSelectMaster,
					"text": "Single"
				}, {
					"key": ListMode.MultiSelect,
					"text": "Multi"
				}]
			}), "settings");
				
			},
	  
		   _onObjectMatched: function(oEvent) {
		   	    
		   		var that = this;
		   		
			    var oParameter = oEvent.getParameter("arguments");
				for (var value in oParameter) {
					oParameter[value] = decodeURIComponent(oParameter[value]);
				}
				 that.ID = oParameter.ID;
				 var oParam = oEvent.getParameter("arguments");
			 //    var pad = '0000000000';
				// ID = pad.substring(0, pad.length - ID.length) + ID;
				var sUrl="/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/";
				var oModel = new sap.ui.model.odata.v2.ODataModel(sUrl);
				oModel.read("/STUDENT_HSet('" + that.ID + "')", {
					success: function(oData, oResponse) {	
				    
				    	that.getModel("masterItem").setData(oData);
				    						
					},
					error: function(oError) {
					}
				});
				var ofilters = new Array();
				var wID = new sap.ui.model.Filter("ID", sap.ui.model.FilterOperator.EQ, oParam.ID);
				ofilters.push(wID);
				oModel.read("/STUDENT_ISet()", {
					async: false,
				    filters: ofilters,
					success: function(oData, oResponse) {	
				    	var oTableDetailItem = that.getView().byId("otableItem");
						var oJSONModel = new sap.ui.model.json.JSONModel();
						oJSONModel.setData(oData);
						oTableDetailItem.setModel(oJSONModel);
					},
					error: function(oError) {
					
					}
				});
				
				
			},
			onSave: function(oEvent){
				var that = this;
				var oEntry = {};
				var oTableDetailItem = that.getView().byId("otableItem");     
				var data = oTableDetailItem.getBinding().oList;
				oEntry.ID = that.ID;
			    oEntry.STUDENT_ISet = {
					results: data
				 };
				 
				 var oModel = that.getOwnerComponent().getModel();
					oModel.create("/STUDENT_HSet", oEntry, {
						async: false,
						success: function(oData, response) {
							sap.ui.core.BusyIndicator.hide();
							MessageBox.success("Cập nhật bảng điểm thành công");
							
						},
						error: function(oError) {
							sap.ui.core.BusyIndicator.hide();
							MessageBox.error(oError.statusText);
						}
				});
			}	
			
	});
});