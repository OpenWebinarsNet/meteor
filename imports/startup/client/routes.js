import "../../ui/layouts/app.js";
import "../../ui/layouts/app_public.js";
import "../../ui/pages/login_page.js";
import "../../ui/pages/messages_page.js";
import "../../ui/pages/register_page.js";

BlazeLayout.setRoot('body');

FlowRouter.route("/", {
	name: "home",
	action(params, queryParams) {
		BlazeLayout.render('App_body', {main: 'messagesPage'});
	}
});


FlowRouter.route("/login", {
	name: "login",
	action(params, queryParams) {
		BlazeLayout.render('App_body_public', {main: 'loginPage'});
	}
});

FlowRouter.route("/register", {
	name: "register",
	action(params, queryParams) {
		BlazeLayout.render('App_body_public', {main: 'registerPage'});
	}
});

AccountsTemplates.configureRoute('signIn', {
  name: 'login',
  path: '/login'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'register',
  path: '/register'
});
