import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { Messages } from "./messages.js";

export const saveMessage = new ValidatedMethod({
  name: "messages.add",
  validate: new SimpleSchema({
      content: { type: String },
      date: { type: Date }
    }).validator(),
  run({ content, date }) {
    if(!this.userId){
		throw new Meteor.Error("messages.add.unauthorized",
        "Cannot create new message if user not logged in");
	}
	return Messages.insert({content:content,createdAt:date,authorId:this.userId});
  }
});
