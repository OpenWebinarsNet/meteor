import "./new_message.html";

Template.newMessage.events({
	'click #send':function(e,t){
		t.data.sendHandler(t.find("#content").value);
	}
});
