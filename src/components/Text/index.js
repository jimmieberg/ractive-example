'use strict';

var Ractive = require('ractive');

module.exports = Ractive.extend({
 	isolated: true,
 	template: require('./template.html'),
	computed: {
		'visibleParagraphs': function() {
			var p = this.get('paragraphs');
			return p.slice(0, this.get('showAll') ? p.length : 1);
		}
	}
});