import moment from 'moment';
require('moment/locale/es');

Template.registerHelper('timeAgo', (date) => {
	return moment(date).fromNow();
});
