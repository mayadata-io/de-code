/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'maya-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mi-help-circle': '&#xe967;',
		'mi-loader1': '&#xe965;',
		'mi-arrow-left': '&#xe966;',
		'mi-check-list': '&#xe94e;',
		'mi-home': '&#xe964;',
		'mi-mail': '&#xe91d;',
		'mi-bell': '&#xe909;',
		'mi-dollar': '&#xe913;',
		'mi-eye-off': '&#xe915;',
		'mi-eye': '&#xe917;',
		'mi-star': '&#xe91b;',
		'mi-star-filled': '&#xe923;',
		'mi-check-circle': '&#xe927;',
		'mi-lock': '&#xe937;',
		'mi-ellipsis-vertical': '&#xe93f;',
		'mi-alert-triangle': '&#xe942;',
		'mi-arrow-left-circle': '&#xe943;',
		'mi-chevron-down': '&#xe944;',
		'mi-database': '&#xe900;',
		'mi-overview': '&#xe902;',
		'mi-container-filled': '&#xe908;',
		'mi-circle-info': '&#xe946;',
		'mi-layers': '&#xe90c;',
		'mi-log-out': '&#xe916;',
		'mi-search': '&#xe92b;',
		'mi-sliders': '&#xe92c;',
		'mi-close': '&#xe936;',
		'mi-trash': '&#xe940;',
		'mi-users1': '&#xe94d;',
		'mi-cluster': '&#xe951;',
		'mi-file1': '&#xe952;',
		'mi-slack': '&#xe956;',
		'mi-bar-chart': '&#xe957;',
		'mi-cloud-arrow-up': '&#xe958;',
		'mi-user': '&#xe94f;',
		'mi-message-square': '&#xe962;',
		'mi-edit': '&#xe963;',
		'mi-chat': '&#xe93c;',
		'mi-plus': '&#xe93d;',
		'mi-minus': '&#xe93e;',
		'mi-downgrade': '&#xe932;',
		'mi-refresh': '&#xe931;',
		'mi-view': '&#xe92e;',
		'mi-share': '&#xe929;',
		'mi-add-user': '&#xe92d;',
		'mi-table-sort-arrows': '&#xe92f;',
		'mi-upgrade': '&#xe939;',
		'mi-frequency': '&#xe953;',
		'mi-chart-bar-up': '&#xe954;',
		'mi-clipboard-pen': '&#xe955;',
		'mi-hamburger': '&#xe959;',
		'mi-loader': '&#xe95a;',
		'mi-filter': '&#xe95b;',
		'mi-arrow-up-down': '&#xe95c;',
		'mi-table': '&#xe95d;',
		'mi-pool-thin': '&#xe95e;',
		'mi-pool': '&#xe95f;',
		'mi-wave': '&#xe960;',
		'mi-globe': '&#xe941;',
		'mi-logout': '&#xe950;',
		'mi-check-circle-fill': '&#xe948;',
		'mi-long-arrow-down': '&#xe949;',
		'mi-long-arrow-up': '&#xe94a;',
		'mi-long-arrow-left': '&#xe94b;',
		'mi-long-arrow-right': '&#xe94c;',
		'mi-link': '&#xe947;',
		'mi-container': '&#xe961;',
		'mi-circle-add': '&#xe90b;',
		'mi-circle-minus': '&#xe928;',
		'mi-rocket-share': '&#xe90a;',
		'mi-settings': '&#xe93a;',
		'mi-tree-network': '&#xe92a;',
		'mi-chevrons-right': '&#xe904;',
		'mi-chevrons-left': '&#xe914;',
		'mi-chevron-right': '&#xe933;',
		'mi-chevron-left': '&#xe934;',
		'mi-chevron-up': '&#xe935;',
		'mi-user-switch': '&#xe938;',
		'mi-application': '&#xe901;',
		'mi-file': '&#xe903;',
		'mi-play-square': '&#xe906;',
		'mi-logs': '&#xe907;',
		'mi-align-left': '&#xe90d;',
		'mi-arrow-right-curve': '&#xe90e;',
		'mi-arrow-left-curve': '&#xe90f;',
		'mi-key': '&#xe910;',
		'mi-cloud-reload': '&#xe911;',
		'mi-cloud-up-down': '&#xe912;',
		'mi-id-card': '&#xe918;',
		'mi-lightbulb': '&#xe919;',
		'mi-x-circle': '&#xe91a;',
		'mi-check-square': '&#xe91c;',
		'mi-form': '&#xe91e;',
		'mi-litmus': '&#xe91f;',
		'mi-arrow-down-circle': '&#xe920;',
		'mi-arrow-up-circle': '&#xe921;',
		'mi-arrow-right-circle': '&#xe922;',
		'mi-book': '&#xe924;',
		'mi-plug-connect': '&#xe925;',
		'mi-ellipsis-horizontal': '&#xe926;',
		'mi-clock': '&#xe930;',
		'mi-disable': '&#xe945;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
