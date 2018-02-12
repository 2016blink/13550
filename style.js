console_log("rr");

/*(function (blink) {
	'use strict';

	$.getScript('/themes/responsive/assets/styles/classic/style.js',
		function() {

			var CEMJorgeCalvoStyle = function () {
				blink.theme.styles.classic.apply(this, arguments);
			};

			CEMJorgeCalvoStyle.prototype = {
				bodyClassName: 'content_type_clase_cem_jorgecalvo',

				init: function () {
					var parent = blink.theme.styles.classic.prototype;
					parent.init.call(this);
				}
			};

			CEMJorgeCalvoStyle.prototype = _.extend({}, new blink.theme.styles.classic(), CEMJorgeCalvoStyle.prototype);

			blink.theme.styles['cem_jorgecalvo'] = CEMJorgeCalvoStyle;
		
		blink.theme.styles.cem_jorgecalvo.init();
		}
	);

})( blink );
*/
