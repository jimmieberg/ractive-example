var Ractive = require('ractive');

var Text = require('components/Text');

/**
 * Main view
 */
var ractive = new Ractive({
	el: 'content',
	template: require('./main.html'),
	data: {
		title: 'My app',
		paragraphs: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			'Etiam aliquam ornare mi, convallis sagittis purus cursus a. Quisque justo turpis, blandit molestie est nec, tempus cursus ligula. Maecenas ac est ac enim eleifend commodo. Quisque id iaculis turpis. Phasellus aliquet magna tincidunt feugiat fringilla. Curabitur tincidunt pulvinar sodales. Sed ultrices mollis malesuada. Quisque purus justo, hendrerit id ante vel, dictum bibendum mi. Duis in diam in dolor pharetra interdum sed quis sapien. Nulla tristique lectus quis congue laoreet. In sodales urna placerat sapien dapibus faucibus. Integer rutrum iaculis magna quis interdum. Mauris imperdiet iaculis turpis, porttitor maximus ante vestibulum a. Ut vel arcu venenatis, euismod nulla vitae, tristique nulla. Nullam condimentum rutrum dolor, a placerat lacus luctus bibendum. Proin ultricies eros nec blandit vehicula.',
			'Proin rutrum laoreet libero hendrerit viverra. Nam rutrum ultricies eros, iaculis fringilla nulla ultricies nec. Fusce in lectus malesuada, placerat lorem in, aliquet mi. Ut a neque sed urna vehicula dignissim. Nam commodo leo quis massa pretium, vitae bibendum tellus interdum. Suspendisse non tellus lacus. Proin congue placerat elit, quis dignissim est. Sed sodales pretium purus. Aenean quis lectus justo. Cras bibendum libero a augue bibendum, vel varius risus sollicitudin. Ut facilisis est nec justo ullamcorper, et porttitor mi pulvinar. Duis pellentesque semper diam ac pellentesque. Aliquam rutrum posuere ante, venenatis consequat magna cursus sed. Ut sodales risus nec ultrices ornare. Ut gravida nec enim non commodo. Duis quis justo sodales, tincidunt libero quis, facilisis orci.'
		],
		showAll: false
	},
	components: {
		'text': Text
	}
});

ractive.on('showAll', function(e) {
	ractive.set('showAll', 'true');
});
