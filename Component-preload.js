/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "demo_fiori/Component-preload",
	"modules": {
		"demo_fiori/view/Master.view.xml": "<mvc:View controllerName=\"demo_fiori.controller.Master\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns:semantic=\"sap.m.semantic\"\n\tdisplayBlock=\"true\" xmlns=\"sap.m\">\n\n\t\t\t<!--<Page title=\"Danh sách học sinh\">-->\n\t\t\t<!--\t<content>-->\n\t\t\t<!--\t   <List id=\"list\" items=\"{ path: 'masterList>/' }\"  noDataText=\"No Data\" mode=\"{= ${device>/system/phone} ? 'None' : 'SingleSelectMaster'}\" growing=\"true\" growingScrollToLoad=\"true\" updateFinished=\"onUpdateFinished\" selectionChange=\"onSelectionChange\">-->\n\t\t\t\t\t\t\n\t\t\t<!--\t\t\t<items>-->\n\t\t\t<!--\t\t\t\t<ObjectListItem type=\"{= ${device>/system/phone} ? 'Active' : 'Inactive'}\" activeIcon=\"sap-icon://accelerated\" press=\"onSelectionChange\" title=\"{masterList>NAME}\">-->\n\t\t\t<!--\t\t\t\t\t<firstStatus>-->\n\t\t\t<!--\t\t\t\t\t\t<ObjectStatus class=\"rfqStatus\" text=\"{masterList>CLASS}\">-->\n\t\t\t<!--\t\t\t\t\t\t</ObjectStatus>-->\n\t\t\t<!--\t\t\t\t\t</firstStatus>-->\n\t\t\t<!--\t\t\t\t\t<attributes>-->\n\t\t\t<!--\t\t\t\t\t\t<ObjectAttribute text=\"{path: 'masterList>BIRTHDAY',type: 'sap.ui.model.type.Date',formatOptions: {style:'medium',pattern:'dd.MM.yyyy', source: {pattern: 'yyyyMMdd'}}}\"/> -->\n\t\t\t\t\t\t\t\t\n\t\t\t<!--\t\t\t\t\t</attributes>-->\n\t\t\t<!--\t\t\t\t</ObjectListItem>-->\n\t\t\t<!--\t\t\t</items>-->\n\t\t\t<!--\t\t</List>-->\n\t\t\t<!--\t</content>-->\n\t\t\t<!--</Page>-->\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t<semantic:MasterPage  id=\"page\" title=\"Danh sách học sinh\">\n\t\t<semantic:subHeader>\n\t\t\t<Bar id=\"headerBar\">\n\t\t\t\t<contentMiddle>\n\t\t\t\t\t<!--<SearchField id=\"searchField\" showRefreshButton=\"{= !${device>/support/touch} }\" tooltip=\"{i18n>masterSearchTooltip}\" width=\"100%\" search=\"onSearch\"/>-->\n\t\t\t\t\t<SearchField id=\"searchRFQ\" placeholder=\"Search\" liveChange=\"onSearch\"/>\n\t\t\t\t</contentMiddle>\n\t\t\t</Bar>\n\t\t</semantic:subHeader>\n\t\t<semantic:content>\n\t\t\t<PullToRefresh id=\"pullToRefresh\" visible=\"{device>/support/touch}\" refresh=\"onRefresh\"/>\n\t\t\t  <List id=\"list\" items=\"{ path: 'masterList>/' }\"  noDataText=\"No Data\" mode=\"{= ${device>/system/phone} ? 'None' : 'SingleSelectMaster'}\" growing=\"true\" growingScrollToLoad=\"true\" updateFinished=\"onUpdateFinished\" selectionChange=\"onSelectionChange\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<ObjectListItem type=\"{= ${device>/system/phone} ? 'Active' : 'Inactive'}\" activeIcon=\"sap-icon://accelerated\" press=\"onSelectionChange\" title=\"{masterList>NAME}\">\n\t\t\t\t\t\t\t\t<firstStatus>\n\t\t\t\t\t\t\t\t\t<ObjectStatus class=\"rfqStatus\" text=\"{masterList>CLASS}\">\n\t\t\t\t\t\t\t\t\t</ObjectStatus>\n\t\t\t\t\t\t\t\t</firstStatus>\n\t\t\t\t\t\t\t\t<attributes>\n\t\t\t\t\t\t\t\t\t<ObjectAttribute text=\"{path: 'masterList>BIRTHDAY',type: 'sap.ui.model.type.Date',formatOptions: {style:'medium',pattern:'dd.MM.yyyy', source: {pattern: 'yyyyMMdd'}}}\"/> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</attributes>\n\t\t\t\t\t\t\t</ObjectListItem>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</List>\n\t\t</semantic:content>\n\t\t<semantic:customFooterContent>\n\t\t\t<Button text=\"Thêm học sinh\" id=\"createButton\" enabled=\"{appView>/addEnabled}\" press=\"onCreate\" icon=\"sap-icon://add\" visible=\"{appView>/manage}\"/>\n\t\t</semantic:customFooterContent>\t\t\n\t</semantic:MasterPage>\n\t\n</mvc:View>",
		"demo_fiori/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"demo_fiori/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"demo_fiori.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t\t\n\t\t\tthis.getRouter().initialize();\n\t\t}\n\t});\n});",
		"demo_fiori/controller/AddNewStudent.controller.js": "sap.ui.define([\n\t\"demo_fiori/controller/BaseController\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/m/MessageBox\"\n], function(BaseController, JSONModel, MessageBox) {\n\t\"use strict\";\n\n\treturn BaseController.extend(\"demo_fiori.controller.AddNewStudent\", {\n\t\t\tonInit: function(){\n\t\t\t\tthis.getRouter().getRoute(\"object\").attachPatternMatched(this._onObjectMatched, this);\n\t\t\t},\n\t  \n\t\t   _onObjectMatched: function(oEvent) {\n\t\t   \t\n\t\t\t\t\n\t\t\t\t\n\t\t\t},\n\t\t\tonSave: function(){\n\t\t\t\tvar that = this;\n\t\t\t\tvar nName = that.getView().byId(\"NAME\");\n\t\t\t\tvar nBirthday = that.getView().byId(\"BIRTHDAY\");\n\t\t\t\tvar nClass = that.getView().byId(\"CLASS\");\n\t\t\t\tvar nGender = that.getView().byId(\"GENDER\").getSelectedItem();\n\t\t\t\tvar nPhone = that.getView().byId(\"PHONE\");\n\t\t\t\tvar nAddress = that.getView().byId(\"ADDRESS\");\n\t\t\t\t\n\t\t\t\tif(nName.getValue()=== \"\"){\n\t\t\t\t\talert(\"Không được để trống trường Họ và tên\");\n\t\t\t\t}else if(nBirthday.getValue()===\"\"){\n\t\t\t\t\talert(\"Không được để trống trường Ngày sinh\");\n\t\t\t\t}else if(nClass.getValue()===\"\"){\n\t\t\t\t\talert(\"Không được để trống trường Lớp\");\n\t\t\t\t}else if(!nGender){\n\t\t\t\t\talert(\"Bạn chưa chọn Giới tính\");\n\t\t\t\t}else if(nPhone.getValue()===\"\"){\n\t\t\t\t\talert(\"Không được bỏ trống trường số điện thoại\");\n\t\t\t\t}else if(nAddress.getValue()===\"\"){\n\t\t\t\t\talert(\"Vui lòng nhập địa chỉ\");\n\t\t\t\t}else{\n\t\t\t\t\tthat.onSubmit();\n\t\t\t\t}\n\t\t\t},\n\t\t\tonSubmit: function(){\n\t\t\t\tvar that = this;\n\t\t\t\tvar oEntry = {};\n\t\t\t\tvar oArr = [];\n\t\t\t\tvar nName = that.getView().byId(\"NAME\");\n\t\t\t\tvar nBirthday = that.getView().byId(\"BIRTHDAY\");\n\t\t\t\tvar nClass = that.getView().byId(\"CLASS\");\n\t\t\t\tvar nGender = that.getView().byId(\"GENDER\");\n\t\t\t\tvar nPhone = that.getView().byId(\"PHONE\");\n\t\t\t\tvar nAddress = that.getView().byId(\"ADDRESS\");\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvar Submit = function () {\n\t\t\t\t\t// oEntry.ACTION = \"SAVE\";\n\t\t\t\t\tvar time = new Date();\n\t\t\t\t\tvar second = time.getSeconds();\n\t\t\t\t\tvar minute = time.getMinutes();\n\t\t\t\t\tvar hour = time.getHours();\n\t\t\t\t\tvar id = \"0000\" + hour+minute+second;\n\t\t\t\t\t oEntry.ID = id;\n\t\t\t\t\toEntry.NAME = nName.getValue();\n\t\t\t\t\toEntry.BIRTHDAY = nBirthday.getValue();\n\t\t\t\t\toEntry.CLASS = nClass.getValue();\n\t\t\t\t\toEntry.GENDER = nGender.getValue();\n\t\t\t\t\toEntry.PHONE_NUMBER = nPhone.getValue();\n\t\t\t\t\toEntry.ADDRESS = nAddress.getValue();\n\t\t\t\t\t//oEntry.STUDENT_ISet = [];\n\t\t\t\t\t//  results: oArr\n\t\t\t  //  \t};\n\t\t\t\t\tvar oModel = that.getOwnerComponent().getModel();\n\t\t\t\t\toModel.create(\"/STUDENT_HSet\", oEntry, {\n\t\t\t\t\t\tasync: false,\n\t\t\t\t\t\tsuccess: function(oData, response) {\n\t\t\t\t\t\t\tsap.ui.core.BusyIndicator.hide();\n\t\t\t\t\t\t\tlocation.reload();\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t},\n\t\t\t\t\t\terror: function(oError) {\n\t\t\t\t\t\t\tsap.ui.core.BusyIndicator.hide();\n\t\t\t\t\t\t\tMessageBox.error(oError.statusText);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\n\t\t\t\t}.bind(this);\n\t\t\t\t\n\t\t\t\tMessageBox.show('Bạn có muốn lưu học sinh này không ?', {\n\t\t\t\t\t\tasync: false,\n\t\t\t\t\t\ttitle: 'Submit comfirmation',\n\t\t\t\t\t\tactions: [\n\t\t\t\t\t\t\tMessageBox.Action.OK,\n\t\t\t\t\t\t\tMessageBox.Action.CANCEL\n\t\t\t\t\t\t],\n\t\t\t\t\t\tonClose: function(oAction) {\n\t\t\t\t\t\t\tif (oAction === MessageBox.Action.OK) {\n\t\t\t\t\t\t\t\tSubmit(); \n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\t\n\t\t\t}\n\t\t\t\n\t});\n});",
		"demo_fiori/controller/Master.controller.js": "sap.ui.define([\n\t\"demo_fiori/controller/BaseController\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(BaseController, JSONModel, Device) {\n\t\"use strict\";\n\tvar dataArray = [];\n\tvar subArray = [];\n\treturn BaseController.extend(\"demo_fiori.controller.Master\", {\n\t\t\tonInit: function(){\n\t\t\t// \tvar oViewModel,\n\t\t\t// \tfnSetAppNotBusy,\n\t\t\t// \toListSelector = this.getOwnerComponent().oListSelector,\n\t\t\t// \tiOriginalBusyDelay = this.getView().getBusyIndicatorDelay();\n\n\t\t\t// \toViewModel = new JSONModel({\n\t\t\t// \t\tbusy: true,\n\t\t\t// \t\tdelay: 0,\n\t\t\t// \t\titemToSelect: null,\n\t\t\t// \t\taddEnabled: true,\n\t\t\t// \t\tsubmitEnabled: true,\n\t\t\t// \t\teditEnabled: false\n\t\n\t\t\t// \t});\n\t\t\t// //\tthis.setModel(new JSONModel({}), \"masterList\");\t\n\t\t //    \tthis.getOwnerComponent().setModel(new JSONModel({}), \"masterList\");\n\t\t\t\tvar that = this;\n\t\t\t\t//\tvar sUrl=\"http://s4demo.ngs.com.vn:8000/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/\";\n\t\t\t\t//\t var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl,true,\"tech_pvn01\",\"a123456\");\n\t\t\t\t\tvar sUrl=\"/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/\";\n\t\t\t\t// var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);\n\t\t\t\t  var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);\n\t\t\t\t\toModel2.read(\"/STUDENT_HSet()\", {\n\t\t\t\t\t\tsuccess: function(oData, oResponse) {\t\n\t\t\t\t\t\t\tvar oModelList = that.getModel(\"masterList\");\n\t\t\t\t\t\t\t\toModelList.setData(oData.results);\n\t\t\t\t\t\t\t\tthat.dataArray = oData.results;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t},\n\t\t\t\t\t\terror: function(oError) {\n\t\t\t\t\t\t\tconsole.log('error');\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\n\t\t\t},\n\t\t\t// onSelectionChange: function(oEvent){\n\t\t\t// \t// var title = oEvent.getSource().getSelectedItem().getTitle();\n\t\t\t// \t// alert(\"You have clicked to \"+title);\n\t\t\t\t\n\t\t\t\n\t\t\t// }\n\t\t\t\n\t\t\tonSelectionChange: function(oEvent) {\n\t\t\t\tvar oItem = oEvent.getParameter(\"listItem\") || oEvent.getSource();\n\t\t\t\tvar oSelectItem = oItem.getBindingContext(\"masterList\").getProperty();\n\t\t\t\tvar id = oSelectItem.ID;\n\t\t\t    var bReplace = !Device.system.phone;\n\t\t\t\tthis.getRouter().navTo(\"object\", {\n\t\t\t\t\tID: id\n\t\t\t\t}, bReplace);\n\t\t\t\t\n\t\t\t},\n\t\n\t\t\n\t\t\tonCreate: function(oEvent){\n\t\t\t\tthis.getRouter().navTo(\"crst\");\n\t\t\t},\n\t\t\t\n\t\t\tonSearch: function(oEvent){\n\t\t\t\tvar that = this;\n\t\t\t\tthat.getView().byId(\"list\").removeSelections();\n\t\t\t\tthat.subArray = [];\n\t\t\t\tvar x = oEvent.getParameters();\n\t\t\t\tif(x.newValue !== \"\"){\n\t\t\t\tfor(var i = 0; i< that.dataArray.length; i++){\n\t\t\t\t\tif( that.dataArray[i].NAME.includes(x.newValue)){\n\t\t\t\t\t\tthat.subArray.push(that.dataArray[i]);\n\t\t\t\t\t}\n\t\t\t\t}}else{\n\t\t\t\t\t\n\t\t\t\t\tthat.subArray = that.dataArray;\n\t\t\t\t}\n\t\t\t\n\t\t\t\tvar oModel1 = that.getModel(\"masterList\");\n\t\t\t\toModel1.setData(that.subArray);\n\t\t\t\toModel1.refresh();\n\t\t}\n\t\t\t\n\t});\n});",
		"demo_fiori/controller/Detail.controller.js": "sap.ui.define([\n\t\"demo_fiori/controller/BaseController\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/m/library\",\n\t\"sap/m/MessageBox\"\n], function(BaseController, JSONModel, MobileLibrary, MessageBox) {\n\t\"use strict\";\n\tvar ListMode = MobileLibrary.ListMode,\n\t\tListSeparators = MobileLibrary.ListSeparators;\n\t\tvar ID;\n\treturn BaseController.extend(\"demo_fiori.controller.Detail\", {\n\t\t\tonInit: function(){\n\t\t\t\tthis.getRouter().getRoute(\"object\").attachPatternMatched(this._onObjectMatched, this);\n\t\t\t\t\n\t\t\t\tthis.getView().setModel(new JSONModel({\n\t\t\t\t\"maximumFilenameLength\": 55,\n\t\t\t\t\"maximumFileSize\": 1000,\n\t\t\t\t\"mode\": ListMode.MultiSelect,\n\t\t\t\t\"uploadEnabled\": true,\n\t\t\t\t\"uploadButtonVisible\": true,\n\t\t\t\t\"enableEdit\": false,\n\t\t\t\t\"enableDelete\": false,\n\t\t\t\t\"visibleEdit\": false,\n\t\t\t\t\"visibleDelete\": false,\n\t\t\t\t\"listSeparatorItems\": [\n\t\t\t\t\tListSeparators.All,\n\t\t\t\t\tListSeparators.None\n\t\t\t\t],\n\t\t\t\t\"showSeparators\": ListSeparators.All,\n\t\t\t\t\"listModeItems\": [{\n\t\t\t\t\t\"key\": ListMode.SingleSelectMaster,\n\t\t\t\t\t\"text\": \"Single\"\n\t\t\t\t}, {\n\t\t\t\t\t\"key\": ListMode.MultiSelect,\n\t\t\t\t\t\"text\": \"Multi\"\n\t\t\t\t}]\n\t\t\t}), \"settings\");\n\t\t\t\t\n\t\t\t},\n\t  \n\t\t   _onObjectMatched: function(oEvent) {\n\t\t   \t    \n\t\t   \t\tvar that = this;\n\t\t   \t\t\n\t\t\t    var oParameter = oEvent.getParameter(\"arguments\");\n\t\t\t\tfor (var value in oParameter) {\n\t\t\t\t\toParameter[value] = decodeURIComponent(oParameter[value]);\n\t\t\t\t}\n\t\t\t\t that.ID = oParameter.ID;\n\t\t\t\t var oParam = oEvent.getParameter(\"arguments\");\n\t\t\t //    var pad = '0000000000';\n\t\t\t\t// ID = pad.substring(0, pad.length - ID.length) + ID;\n\t\t\t\tvar sUrl=\"/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/\";\n\t\t\t\tvar oModel = new sap.ui.model.odata.v2.ODataModel(sUrl);\n\t\t\t\toModel.read(\"/STUDENT_HSet('\" + that.ID + \"')\", {\n\t\t\t\t\tsuccess: function(oData, oResponse) {\t\n\t\t\t\t    \n\t\t\t\t    \tthat.getModel(\"masterItem\").setData(oData);\n\t\t\t\t    \t\t\t\t\t\t\n\t\t\t\t\t},\n\t\t\t\t\terror: function(oError) {\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tvar ofilters = new Array();\n\t\t\t\tvar wID = new sap.ui.model.Filter(\"ID\", sap.ui.model.FilterOperator.EQ, oParam.ID);\n\t\t\t\tofilters.push(wID);\n\t\t\t\toModel.read(\"/STUDENT_ISet()\", {\n\t\t\t\t\tasync: false,\n\t\t\t\t    filters: ofilters,\n\t\t\t\t\tsuccess: function(oData, oResponse) {\t\n\t\t\t\t    \tvar oTableDetailItem = that.getView().byId(\"otableItem\");\n\t\t\t\t\t\tvar oJSONModel = new sap.ui.model.json.JSONModel();\n\t\t\t\t\t\toJSONModel.setData(oData);\n\t\t\t\t\t\toTableDetailItem.setModel(oJSONModel);\n\t\t\t\t\t},\n\t\t\t\t\terror: function(oError) {\n\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\t\n\t\t\t\t\n\t\t\t},\n\t\t\tonSave: function(oEvent){\n\t\t\t\tvar that = this;\n\t\t\t\tvar oEntry = {};\n\t\t\t\tvar oTableDetailItem = that.getView().byId(\"otableItem\");     \n\t\t\t\tvar data = oTableDetailItem.getBinding().oList;\n\t\t\t\toEntry.ID = that.ID;\n\t\t\t    oEntry.STUDENT_ISet = {\n\t\t\t\t\tresults: data\n\t\t\t\t };\n\t\t\t\t \n\t\t\t\t var oModel = that.getOwnerComponent().getModel();\n\t\t\t\t\toModel.create(\"/STUDENT_HSet\", oEntry, {\n\t\t\t\t\t\tasync: false,\n\t\t\t\t\t\tsuccess: function(oData, response) {\n\t\t\t\t\t\t\tsap.ui.core.BusyIndicator.hide();\n\t\t\t\t\t\t\tMessageBox.success(\"Cập nhật bảng điểm thành công\");\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t},\n\t\t\t\t\t\terror: function(oError) {\n\t\t\t\t\t\t\tsap.ui.core.BusyIndicator.hide();\n\t\t\t\t\t\t\tMessageBox.error(oError.statusText);\n\t\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\t\n\t\t\t\n\t});\n});",
		"demo_fiori/view/AddNewStudent.view.xml": "<mvc:View xmlns=\"sap.m\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns:semantic=\"sap.m.semantic\" xmlns:core=\"sap.ui.core\" xmlns:l=\"sap.ui.layout\" xmlns:footerbar=\"sap.ushell.ui.footerbar\" xmlns:tb=\"sap.ui.table\" xmlns:f=\"sap.ui.layout.form\" controllerName=\"demo_fiori.controller.AddNewStudent\">\n\t<semantic:DetailPage id=\"page\" title=\"Điền thông tin học sinh\" navButtonPress=\"onNavBack\" showNavButton=\"{device>/system/phone}\">\n\t\t<semantic:content>\n\t\t\t<Table showSeparators=\"None\" width=\"auto\" backgroundDesign=\"Transparent\">\n\t\t\t\t<columns>\n\t\t\t\t\t<Column hAlign=\"Left\" vAlign=\"Middle\" width=\"1%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Left\" vAlign=\"Middle\" width=\"3%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Left\" vAlign=\"Middle\" width=\"5%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Left\" vAlign=\"Middle\" width=\"5%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t</columns>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Họ và tên (*)\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Input id=\"NAME\"  textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Ngày sinh (*)\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<DatePicker id=\"BIRTHDAY\" displayFormat=\"dd.MM.YYYY\" valueFormat=\"yyyyMMdd\"/>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Lớp (*)\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Input id=\"CLASS\" textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label class=\"masterFont\" text=\"Giới tính (*)\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<!--<Input id=\"GENDER\"  textAlign=\"Left\"/>-->\n\t\t\t\t\t\t\t<ComboBox xmlns=\"sap.m\" id=\"GENDER\">\n\t\t\t\t\t\t\t    <items>\n\t\t\t\t\t\t\t      <core:Item xmlns:core=\"sap.ui.core\" key=\"1\" \n\t\t\t\t\t\t\t           text=\"Nam\"  id=\"gender1\"/>\n\t\t\t\t\t\t\t      <core:Item xmlns:core=\"sap.ui.core\" key=\"2\" \n\t\t\t\t\t\t\t           text=\"Nữ\" id=\"gender2\"/>\n\t\t\t\t\t\t\t    </items>\n\t\t\t\t\t\t\t  </ComboBox>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Số điện thoại (*)\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Input id=\"PHONE\"  textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\t\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Địa chỉ (*)\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Input id=\"ADDRESS\"  textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Text textAlign=\"Left\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\n\t\t\t</Table>\n\t\t</semantic:content>\n\t\t<semantic:customFooterContent>\n\t\t\t<Button text=\"Lưu\" id=\"createButton\" enabled=\"{appView>/addEnabled}\" press=\"onSave\" icon=\"sap-icon://create-form\" visible=\"{appView>/manage}\"/>\n\t\t</semantic:customFooterContent>\t\t\n\t</semantic:DetailPage>\n</mvc:View>",
		"demo_fiori/controller/demo.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\",\n\t\"sap/ui/model/json/JSONModel\"\n], function(Controller, JSONModel) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"demo_fiori.controller.demo\", {\n\t\t\tonInit: function(){\n\t\t\t\tvar oViewModel,\n\t\t\t\tfnSetAppNotBusy,\n\t\t\t\toListSelector = this.getOwnerComponent().oListSelector,\n\t\t\t\tiOriginalBusyDelay = this.getView().getBusyIndicatorDelay();\n\n\t\t\t\toViewModel = new JSONModel({\n\t\t\t\t\tbusy: true,\n\t\t\t\t\tdelay: 0,\n\t\t\t\t\titemToSelect: null,\n\t\t\t\t\taddEnabled: true,\n\t\t\t\t\tsubmitEnabled: true,\n\t\t\t\t\teditEnabled: false\n\t\n\t\t\t\t});\n\t\t\t//\tthis.setModel(new JSONModel({}), \"masterList\");\t\n\t\t     \tthis.getOwnerComponent().setModel(new JSONModel({}), \"masterList\");\n\t\t\t\tvar that = this;\n\t\t\t\t//\tvar sUrl=\"http://s4demo.ngs.com.vn:8000/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/\";\n\t\t\t\t//\t var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl,true,\"tech_pvn01\",\"a123456\");\n\t\t\t\t\tvar sUrl=\"/sap/opu/odata/SAP/ZO_PVN_DEMO_SRV/\";\n\t\t\t\t// var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);\n\t\t\t\t  var oModel2 = new sap.ui.model.odata.v2.ODataModel(sUrl);\n\t\t\t\t\toModel2.read(\"/mara_iSet()\", {\n\t\t\t\t\t\tsuccess: function(oData, oResponse) {\t\n\t\t\t\t\t\t\tvar oModelList = that.getOwnerComponent().getModel(\"masterList\");\n\t\t\t\t\t\t\t\toModelList.setData(oData.results);\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t},\n\t\t\t\t\t\terror: function(oError) {\n\t\t\t\t\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\n\t\t\t},\n\t\t\tonSelectionChange: function(oEvent){\n\t\t\t\tvar title = oEvent.getSource().getSelectedItem().getTitle();\n\t\t\t\talert(\"You have clicked to \"+title);\n\t\t\t}\n\t\t\t\n\t});\n});",
		"demo_fiori/view/Detail.view.xml": "<mvc:View xmlns=\"sap.m\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns:semantic=\"sap.m.semantic\" xmlns:core=\"sap.ui.core\" xmlns:l=\"sap.ui.layout\" xmlns:footerbar=\"sap.ushell.ui.footerbar\" xmlns:tb=\"sap.ui.table\" xmlns:f=\"sap.ui.layout.form\" controllerName=\"demo_fiori.controller.Detail\">\n\t<semantic:DetailPage id=\"page\" title=\"Thông tin chi tiết\" navButtonPress=\"onNavBack\" showNavButton=\"{device>/system/phone}\">\n\t\t<semantic:content>\n\t\t\t<Table showSeparators=\"None\" width=\"auto\" backgroundDesign=\"Transparent\">\n\t\t\t\t<columns>\n\t\t\t\t\t<Column hAlign=\"Initial\" vAlign=\"Middle\" width=\"6%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Initial\" vAlign=\"Middle\" width=\"21%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Initial\" vAlign=\"Middle\" width=\"10%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Initial\" vAlign=\"Middle\" width=\"8%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Initial\" vAlign=\"Middle\" width=\"10%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t\t<Column hAlign=\"Initial\" vAlign=\"Middle\" width=\"8%\" minScreenWidth=\"Tablet\" demandPopin=\"true\" popinDisplay=\"Inline\" mergeDuplicates=\"false\"/>\n\t\t\t\t</columns>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Label text=\"Họ và tên\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Text id=\"NAME\" text=\"{masterItem>/NAME}\" textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Ngày sinh\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Text id=\"QUO_FROM\" text=\"{path: 'masterItem>/BIRTHDAY', type: 'sap.ui.model.type.Date',formatOptions: {style:'medium',pattern:'dd.MM.YYYY', source: {pattern: 'yyyyMMdd'}}}\"/>\n\t\t\t\t\t\t\t<Label text=\"Lớp\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Text id=\"CLASS\" text=\"{masterItem>/CLASS}\" textAlign=\"Left\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Label class=\"masterFont\" text=\"Giới tính\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Text id=\"GENDER\" text=\"{masterItem>/GENDER}\" textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Số điện thoại\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Text id=\"PHONE\" text=\"{masterItem>/PHONE_NUMBER}\" textAlign=\"Left\"/>\n\t\t\t\t\t\t\t<Label text=\"Địa chỉ\" design=\"Bold\"/>\n\t\t\t\t\t\t\t<Text id=\"ADDRESS\" text=\"{masterItem>/ADDRESS}\" textAlign=\"Left\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\n\t\t\t</Table>\n\t\t\t\n\t\t\t<tb:Table rows=\"{path: '/results'}\" id=\"otableItem\" noDataText=\"No Data\" selectionMode=\"MultiSelect\" visibleRowCount='10' columnSelect=\"onColumnSelect\">\n\t\t\t\t<tb:columns>\n\t\t\t\t\t<tb:Column>\n\t\t\t\t\t\t<Label text=\"Môn học\"/>\n\t\t\t\t\t\t<tb:template>\n\t\t\t\t\t\t\t<Text text=\"{SUBJECT}\"/>\n\t\t\t\t\t\t</tb:template>\n\t\t\t\t\t</tb:Column>\n\t\t\t\t\t<tb:Column>\n\t\t\t\t\t\t<Label text=\"Học kỳ 1\"/>\n\t\t\t\t\t\t<tb:template>\n\t\t\t\t\t\t\t<!--<Text text=\"{SESMESTER_1}\"/>-->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<Input value=\"{SESMESTER_1}\"  editable=\"{settings>/enableEdit}\" change=\"onChangeItem\"\n\t\t\t\t\t\t\t\t\t\t\tenabled=\"{ path: 'Zstt', formatter: '.onformatEnabledInput2'}\"/>\n\t\t\t\t\t\t</tb:template>\n\t\t\t\t\t</tb:Column>\n\t\t\t\t\t<tb:Column>\n\t\t\t\t\t\t<Label text=\"Học kỳ 2\"/>\n\t\t\t\t\t\t<tb:template>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<Input value=\"{SESMESTER_2}\"  editable=\"{settings>/enableEdit}\" change=\"onChangeItem\"\n\t\t\t\t\t\t\t\t\t\t\tenabled=\"{ path: 'Zstt', formatter: '.onformatEnabledInput2'}\"/>\n\t\t\t\t\t\t</tb:template>\n\t\t\t\t\t</tb:Column>\n\t\t\t\t\t<tb:Column>\n\t\t\t\t\t\t<Label text=\"Cuối năm\"/>\n\t\t\t\t\t\t<tb:template>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t    <Input value=\"{SUMMARY}\"  editable=\"{settings>/enableEdit}\" change=\"onChangeItem\"\n\t\t\t\t\t\t\t\t\t\t\tenabled=\"{ path: 'Zstt', formatter: '.onformatEnabledInput2'}\"/>\n\t\t\t\t\t\t</tb:template>\n\t\t\t\t\t</tb:Column>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</tb:columns>\n\t\t\t</tb:Table>\n\t\t\t\n\t\t</semantic:content>\n\t\t<semantic:customFooterContent>\n\t\t\t<ToggleButton text=\"Sửa bảng điểm\" id=\"createButton\" enabled=\"{appView>/addEnabled}\" pressed=\"{settings>/enableEdit}\" icon=\"sap-icon://edit\" visible=\"{appView>/manage}\"/>\n\t\t\t\t<Button id=\"saveButton\" press=\"onSave\" text=\"Lưu bảng điểm\" icon=\"sap-icon://save\" enabled=\"{appView>/saveEnabled}\" tooltip=\"Save change\"\n\t\t\t\tvisible=\"{settings>/enableEdit}\"/>\n\t\t</semantic:customFooterContent>\n\t</semantic:DetailPage>\n</mvc:View>",
		"demo_fiori/controller/BaseController.js": "/*global history */\nsap.ui.define([\n\t\"sap/ui/core/mvc/Controller\",\n\t\"sap/ui/core/routing/History\"\n], function(Controller, History) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"demo_fiori.controller.BaseController\", {\n\t\t/**\n\t\t * Convenience method for accessing the router in every controller of the application.\n\t\t * @public\n\t\t * @returns {sap.ui.core.routing.Router} the router for this component\n\t\t */\n\t\tgetRouter: function() {\n\t\t\treturn this.getOwnerComponent().getRouter();\n\t\t},\n\n\t\t/**\n\t\t * Convenience method for getting the view model by name in every controller of the application.\n\t\t * @public\n\t\t * @param {string} sName the model name\n\t\t * @returns {sap.ui.model.Model} the model instance\n\t\t */\n\t\tgetModel: function(sName) {\n\t\t\treturn this.getView().getModel(sName);\n\t\t},\n\n\t\t/**\n\t\t * Convenience method for setting the view model in every controller of the application.\n\t\t * @public\n\t\t * @param {sap.ui.model.Model} oModel the model instance\n\t\t * @param {string} sName the model name\n\t\t * @returns {sap.ui.mvc.View} the view instance\n\t\t */\n\t\tsetModel: function(oModel, sName) {\n\t\t\treturn this.getView().setModel(oModel, sName);\n\t\t},\n\n\t\t/**\n\t\t * Convenience method for getting the resource bundle.\n\t\t * @public\n\t\t * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component\n\t\t */\n\t\tgetResourceBundle: function() {\n\t\t\treturn this.getOwnerComponent().getModel(\"i18n\").getResourceBundle();\n\t\t},\n\n\t\t/**\n\t\t * Event handler  for navigating back.\n\t\t * It checks if there is a history entry. If yes, history.go(-1) will happen.\n\t\t * If not, it will replace the current entry of the browser history with the master route.\n\t\t * @public\n\t\t */\n\t\tonNavBack: function() {\n\t\t\tvar sPreviousHash = History.getInstance().getPreviousHash();\n\n\t\t\tif (sPreviousHash !== undefined) {\n\t\t\t\t// The history contains a previous entry\n\t\t\t\thistory.go(-1);\n\t\t\t} else {\n\t\t\t\t// Otherwise we go backwards with a forward history\n\t\t\t\tvar bReplace = true;\n\t\t\t\tthis.getRouter().navTo(\"master\", {}, bReplace);\n\t\t\t}\n\t\t}\n\n\t});\n\n});",
		"demo_fiori/view/demo.view.xml": "<mvc:View controllerName=\"demo_fiori.controller.demo\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\"\n\tdisplayBlock=\"true\" xmlns=\"sap.m\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t   <List id=\"list\" items=\"{ path: 'masterList>/' }\"  noDataText=\"No Data\" mode=\"{= ${device>/system/phone} ? 'None' : 'SingleSelectMaster'}\" growing=\"true\" growingScrollToLoad=\"true\" updateFinished=\"onUpdateFinished\" selectionChange=\"onSelectionChange\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<ObjectListItem type=\"{= ${device>/system/phone} ? 'Active' : 'Inactive'}\" activeIcon=\"sap-icon://accelerated\" press=\"onSelectionChange\" title=\"{masterList>MATNR}\">\n\t\t\t\t\t\t\t\t<firstStatus>\n\t\t\t\t\t\t\t\t\t<ObjectStatus class=\"rfqStatus\" text=\"{masterList>ERSDA}\">\n\t\t\t\t\t\t\t\t\t</ObjectStatus>\n\t\t\t\t\t\t\t\t</firstStatus>\n\t\t\t\t\t\t\t\t<attributes>\n\t\t\t\t\t\t\t\t\t<ObjectAttribute text=\"{path: 'masterList>CREATED_AT_TIME',type: 'sap.ui.model.type.Time',formatOptions: {style:'medium',pattern:'hh:mm:ss', source: {pattern: 'hhmmss'}}}\"/> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</attributes>\n\t\t\t\t\t\t\t</ObjectListItem>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</List>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"demo_fiori/controller/App.Controller.js": "sap.ui.define([\n\t\"demo_fiori/controller/BaseController\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/m/MessageBox\"\n], function(BaseController, JSONModel, MessageBox) {\n\t\"use strict\";\n\n\treturn BaseController.extend(\"demo_fiori.controller.App\", {\n\t\t\tonInit: function() {\n\t\t\t var oViewModel;\n\n\t\t\toViewModel = new JSONModel({\n\t\t\t\tsaveEnabled: false,\n\t\t\t\tsubmitEnabled: false,\n\t\t\t\tdownloadAttachEnabled: false,\n\t\t\t\tattachDeleteEnabled: false,\n\t\t\t\tdownloadItemEnabled: false,\n\t\t\t\tuploadItemEnabled: false,\n\t\t\t\tattachFileEnabled: false,\n\t\t\t\tmanage : false\n\t\t\t});\n\t\t\tthis.setModel(oViewModel, \"detailView\");\n\t\t\t\n\t\t\tvar oModel = new JSONModel({});\n\t\t\tthis.setModel(oModel, \"masterItem\");\n\t\t\tvar oModel1 = new JSONModel({});\n\t\t\tthis.setModel(oModel1, \"listItem\");\n\t\t\tvar oModel2 = new JSONModel({});\n\t\t\tthis.setModel(oModel2, \"masterList\");\n\t\t}\n\t\n\t});\n});",
		"demo_fiori/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});"
	}
});