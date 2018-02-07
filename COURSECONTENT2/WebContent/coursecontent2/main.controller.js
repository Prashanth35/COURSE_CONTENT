sap.ui.controller("coursecontent2.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf coursecontent2.main
*/
onInit: function() {

	
	var oModel = new sap.ui.model.json.JSONModel();
   
    oModel.loadData("model/model.json");

    this.getView().setModel(oModel);
	
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf coursecontent2.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf coursecontent2.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf coursecontent2.main
*/
//	onExit: function() {
//
//	}
	
	gotoContent:function(){
	
		
		
		var oModel = new sap.ui.model.json.JSONModel();

        oModel.loadData("model/model.json");

		
		
  		//debugger;
         var oDialog=new sap.m.Dialog({title  : "Course Content",templateShareable:false} )
         debugger;
      
         oDialog.setModel(oModel);
        // 1
  		
        
         var otemp=new sap.m.List({templateShareable:false,
        	 
         items : [
        	 new sap.m.StandardListItem({
      		title :"{subtitle}"})]
         
         
         });			
       
        var panel1 = new sap.m.Panel({headerText:"{title}", expandable :true, templateShareable:false})
			
		panel1.bindAggregation("content","subcontent",otemp);
         
         ////3
        var vbox= new sap.m.VBox()
        vbox.bindAggregation("items","content",panel1)
         ////4	
         var simplform= new sap.ui.layout.form.SimpleForm({title:"{title}",templateShareable:false})
         
         simplform.bindAggregation("content","/coursecontentset/coursetype",vbox);
        
         
         
         oDialog.bindAggregation("content","/coursecontentset/coursetype",simplform)
        oDialog.addButton(new sap.m.Button({text: "close", 
			press:function(oEvent){
			
				//var rejectBtn = this.getView().byId("Idpage").setShowFooter(true)
				 oDialog.close();
			}.bind(this)}));
         oDialog.open();
        
        
	}
	
	

});