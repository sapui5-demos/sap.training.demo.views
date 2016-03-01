sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.MyHTMLView", {

		onButtonPress: function() {
			var oInput = this.getView().byId("idInput");
			oInput.setValue("Hallo HTML View");
		}

	});

});