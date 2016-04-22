import "./app_public.html";

Template.App_body_public.onCreated(function(){
	this.autorun(()=>{
		if(Meteor.userId()){
			FlowRouter.go("home");
		}
	})
})
