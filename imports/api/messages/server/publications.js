import {Meteor} from 'meteor/meteor';
import { Messages } from '../messages.js';

export default function () {
	Meteor.publish("messages", function() {
		if(!this.userId){
			return this.ready();
		}
		return Messages.find({});
	});
};
