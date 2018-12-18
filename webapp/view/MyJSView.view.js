sap.ui.define(["sap/m/Button", "sap/m/Input"], function (Button, Input) {

	return sap.ui.jsview("sap.training.view.MyJSView", {

		getControllerName: function () {
			return "sap.training.controller.MyJSView";
		},

		createContent: function (oController) {
			var oButton = new Button({
				text: "Button auf JS View"
			});
			var oInput = new Input(this.createId("idInput"));

			oButton.attachPress(oController.onButtonPress, oController);

			return [oButton, oInput];
		}

	});

});