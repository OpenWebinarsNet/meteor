import "./message_item.html";
import "./helpers.js";

Template.messageItem.onCreated(function() {
	this.autorun(() => {
		new SimpleSchema({
			createdAt: {type: Date},
			content: {type: String}
		}).validate(Template.currentData());
	});
});
