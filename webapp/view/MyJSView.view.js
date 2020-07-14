sap.ui.jsview("student00.training.view.MyJSView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf student00.training.view.MyJSView
	 */
	getControllerName: function () {
		return "student00.training.controller.MyJSView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf student00.training.view.MyJSView
	 */
	createContent: function (oController) {

		var oButton = new sap.m.Button();
		oButton.setText("Button auf JavaScript View");
		oButton.attachPress(oController.onButtonPress, oController);

		var oInput = new sap.m.Input(this.createId("idInput"));

		return [oButton, oInput];

	}

});