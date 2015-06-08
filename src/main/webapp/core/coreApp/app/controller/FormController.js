/**
 * 表单控制器
 */
Ext.define("core.app.controller.FormController",{
	extend:"Ext.app.Controller",
	initForm:function(){
		var self=this;
		var formCtr={
			//获取模块对象的方法
			"baseform":{
				render:function(form){
					var basePanel=form.up("basepanel");
					var funCode=basePanel.funCode;
					form.funCode=funCode;
					form.itemId=funCode+"_form";
				}
			}
		}
		Ext.apply(self.ctr,formCtr);
	}
});