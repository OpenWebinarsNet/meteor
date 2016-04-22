import "./messages_page.html";
import "../components/messages.js";
import "../components/new_message.js";
import { Messages } from '../../api/messages/messages.js';
import { saveMessage } from '../../api/messages/methods.js';
import { NewMessage } from '../components/new_message.jsx';

Template.messagesPage.helpers({
	messagesCursor:function(){
		return Messages.find();
	},
	sendHandler:function(){
		return (content) => {
			saveMessage.call({
				content: content,
				date: new Date()
			},(err, res) => {
			  if (err) {
				  console.log(err);
			  } else {
				  console.log(`Documento creado con id: ${res}`);
			  }
			});
		}
	},
	NewMessage:function(){
		return NewMessage;
	}
});

Template.messagesPage.onCreated(function(){
	this.subscribe("messages");
})
