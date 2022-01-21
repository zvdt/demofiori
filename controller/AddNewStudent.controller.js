sap.ui.define([
	"demo_fiori/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("demo_fiori.controller.AddNewStudent", {
			onInit: function(){
				this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
			},
	  
		   _onObjectMatched: function(oEvent) {
		   	
				
				
			},
			onSave: function(){
				var that = this;
				var nName = that.getView().byId("NAME");
				var nBirthday = that.getView().byId("BIRTHDAY");
				var nClass = that.getView().byId("CLASS");
				var nGender = that.getView().byId("GENDER").getSelectedItem();
				var nPhone = that.getView().byId("PHONE");
				var nAddress = that.getView().byId("ADDRESS");
				
				if(nName.getValue()=== ""){
					alert("Không được để trống trường Họ và tên");
				}else if(nBirthday.getValue()===""){
					alert("Không được để trống trường Ngày sinh");
				}else if(nClass.getValue()===""){
					alert("Không được để trống trường Lớp");
				}else if(!nGender){
					alert("Bạn chưa chọn Giới tính");
				}else if(nPhone.getValue()===""){
					alert("Không được bỏ trống trường số điện thoại");
				}else if(nAddress.getValue()===""){
					alert("Vui lòng nhập địa chỉ");
				}else{
					that.onSubmit();
				}
			},
			onSubmit: function(){
				var that = this;
				var oEntry = {};
				var oArr = [];
				var nName = that.getView().byId("NAME");
				var nBirthday = that.getView().byId("BIRTHDAY");
				var nClass = that.getView().byId("CLASS");
				var nGender = that.getView().byId("GENDER");
				var nPhone = that.getView().byId("PHONE");
				var nAddress = that.getView().byId("ADDRESS");
				
				
				
				
				var Submit = function () {
					// oEntry.ACTION = "SAVE";
					var time = new Date();
					var second = time.getSeconds();
					var minute = time.getMinutes();
					var hour = time.getHours();
					var id = "0000" + hour+minute+second;
					 oEntry.ID = id;
					oEntry.NAME = nName.getValue();
					oEntry.BIRTHDAY = nBirthday.getValue();
					oEntry.CLASS = nClass.getValue();
					oEntry.GENDER = nGender.getValue();
					oEntry.PHONE_NUMBER = nPhone.getValue();
					oEntry.ADDRESS = nAddress.getValue();
					//oEntry.STUDENT_ISet = [];
					//  results: oArr
			  //  	};
					var oModel = that.getOwnerComponent().getModel();
					oModel.create("/STUDENT_HSet", oEntry, {
						async: false,
						success: function(oData, response) {
							sap.ui.core.BusyIndicator.hide();
							location.reload();
							
						},
						error: function(oError) {
							sap.ui.core.BusyIndicator.hide();
							MessageBox.error(oError.statusText);
						}
					});
	
				}.bind(this);
				
				MessageBox.show('Bạn có muốn lưu học sinh này không ?', {
						async: false,
						title: 'Submit comfirmation',
						actions: [
							MessageBox.Action.OK,
							MessageBox.Action.CANCEL
						],
						onClose: function(oAction) {
							if (oAction === MessageBox.Action.OK) {
								Submit(); 
							}
						}
					});	
			}
			
	});
});