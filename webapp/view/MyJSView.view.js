sap.ui.jsview("sap.training.view.MyJSView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.training.demo03.view.MyJSView
	 */
	getControllerName: function() {
		return "sap.training.controller.MyJSView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf sap.training.demo03.view.MyJSView
	 */
	createContent: function(oController) {
		var oButton = new sap.m.Button({
			text: "Button auf JS View"
		});
		var oInput = new sap.m.Input(this.createId("idInput"));

		oButton.attachPress(oController.onButtonPress, oController);

		return [oButton, oInput];
	}

});