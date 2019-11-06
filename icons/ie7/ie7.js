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
		el.innerHTML = '<span style="font-family: \'de-code-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'dci-star': '&#xe93c;',
		'dci-wave': '&#xe946;',
		'dci-link': '&#xe947;',
		'dci-view': '&#xe944;',
		'dci-table': '&#xe943;',
		'dci-add-user': '&#xe93d;',
		'dci-share': '&#xe942;',
		'dci-container': '&#xe940;',
		'dci-filter': '&#xe93b;',
		'dci-arrow-up-down': '&#xe93e;',
		'dci-user': '&#xe941;',
		'dci-loader': '&#xe932;',
		'dci-hamburger': '&#xe92d;',
		'dci-circle-add': '&#xe90b;',
		'dci-circle-minus': '&#xe928;',
		'dci-clock1': '&#xe92b;',
		'dci-rocket-share': '&#xe90a;',
		'dci-settings': '&#xe93a;',
		'dci-tree-network': '&#xe92a;',
		'dci-chevrons-right': '&#xe904;',
		'dci-chevrons-left': '&#xe914;',
		'dci-chevron-right': '&#xe933;',
		'dci-chevron-left': '&#xe934;',
		'dci-chevron-up': '&#xe935;',
		'dci-chevron-down': '&#xe937;',
		'dci-x': '&#xe916;',
		'dci-user-switch': '&#xe938;',
		'dci-application': '&#xe901;',
		'dci-mail': '&#xe900;',
		'dci-check-list': '&#xe902;',
		'dci-file': '&#xe903;',
		'dci-bell': '&#xe905;',
		'dci-play-square': '&#xe906;',
		'dci-logs': '&#xe907;',
		'dci-dashboard': '&#xe936;',
		'dci-search': '&#xe908;',
		'dci-alert-triangle': '&#xe909;',
		'dci-slack': '&#xe90c;',
		'dci-align-left': '&#xe90d;',
		'dci-arrow-right-curve': '&#xe90e;',
		'dci-arrow-left-curve': '&#xe90f;',
		'dci-key': '&#xe910;',
		'dci-cloud-reload': '&#xe911;',
		'dci-cloud-up-down': '&#xe912;',
		'dci-eye': '&#xe913;',
		'dci-circle-info': '&#xe915;',
		'dci-check-circle': '&#xe917;',
		'dci-id-card': '&#xe918;',
		'dci-lightbulb': '&#xe919;',
		'dci-x-circle': '&#xe91a;',
		'dci-home': '&#xe91b;',
		'dci-check-square': '&#xe91c;',
		'dci-database': '&#xe91d;',
		'dci-form': '&#xe91e;',
		'dci-litmus': '&#xe91f;',
		'dci-arrow-down-circle': '&#xe920;',
		'dci-arrow-up-circle': '&#xe921;',
		'dci-arrow-right-circle': '&#xe922;',
		'dci-arrow-left-circle': '&#xe923;',
		'dci-book': '&#xe924;',
		'dci-plug-connect': '&#xe925;',
		'dci-ellipsis-horizontal': '&#xe926;',
		'dci-ellipsis-vertical': '&#xe927;',
		'dci-edit': '&#xe929;',
		'dci-clipboard-pen': '&#xe92c;',
		'dci-trash': '&#xe939;',
		'dci-chart-bar-up': '&#xe92e;',
		'dci-frequency': '&#xe92f;',
		'dci-cluster': '&#xe931;',
		'dci-clock': '&#xe930;',
		'dci-upgrade': '&#xe93f;',
		'dci-disable': '&#xe945;',
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
		c = c.match(/dci-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
