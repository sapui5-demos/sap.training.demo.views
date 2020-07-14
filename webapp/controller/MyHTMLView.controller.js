sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("student00.training.controller.MyHTMLView", {

		onButtonPress: function () {
			var oInput = this.byId("idInput");
			oInput.setValue("Hallo HTML View");
		}

	});

});