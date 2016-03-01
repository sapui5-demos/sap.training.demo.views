sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.MyJSONView", {

		onButtonPress: function() {
			var oInput = this.getView().byId("idInput");
			oInput.setValue("Hallo JSON View");
		}

	});

});