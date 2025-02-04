const TABLE_NEW_HEADERS = {
	horizontal: [
		[
			{
				label: '',
				rowSpan: 2,
				asTd: true,
			},
			{
				label: 'Werktage',
				colSpan: 5,
			},
			{
				label: 'Wochenende',
				colSpan: 2,
			},
		],
		[
			{
				key: 'montag',
				label: 'Montag',
				render: (el, data) => {
					const button = document.createElement('kol-button');
					button.setAttribute('_label', data.label);
					button.setAttribute('data-theme', 'mapz');
					button.setAttribute('style', 'font-size: 75%');
					button.setAttribute('exportparts', 'button,normal');
					button._on = { onClick: console.log };
					el.innerHTML = '';
					el.appendChild(button);
				},
				sort: (data) => {
					return data.sort((first, second) => {
						if (first.montag < second.montag) {
							return -1;
						}
						if (first.montag > second.montag) {
							return 1;
						}
						return 0;
					});
				},
				sortDirection: 'ASC',
				textAlign: 'right',
			},
			{
				key: 'dienstag',
				label: 'Dienstag',
				render: (el, data) => (el.innerHTML = `<kol-badge _color="#060" data-theme="mapz" _label="${data.label}"></kol-badge>`),
				sort: (data) => {
					return data.sort((first, second) => {
						if (first.dienstag < second.dienstag) {
							return -1;
						}
						if (first.dienstag > second.dienstag) {
							return 1;
						}
						return 0;
					});
				},
				sortDirection: 'DESC',
			},
			{
				key: 'mittwoch',
				label: 'Mittwoch',
				render: (el, data) => (el.innerHTML = `<kol-badge _color="#006" data-theme="mapz" _label="${data.label}"></kol-badge>`),
			},
			{
				key: 'donnerstag',
				label: 'Donnerstag',
				render: (el, data) => (el.innerHTML = `<kol-badge _color="#600" data-theme="mapz" _label="${data.label}"></kol-badge>`),
			},
			{
				key: 'freitag',
				label: 'Freitag',
				render: (el, data) => (el.innerHTML = `<kol-badge _color="#303" data-theme="mapz" _label="${data.label}"></kol-badge>`),
			},
			{
				key: 'samstag',
				label: 'Samstag',
				render: (el, data) => (el.innerHTML = `<kol-badge _color="#330" data-theme="mapz" _label="${data.label}"></kol-badge>`),
			},
			{
				key: 'sonntag',
				label: 'Sonntag',
				render: (el, data) => (el.innerHTML = `<kol-badge _color="#033" data-theme="mapz" _label="${data.label}"></kol-badge>`),
			},
		],
	],
	vertical: [
		[
			{
				label: 'Früh',
			},
			{
				label: 'Mittag',
			},
			{
				label: 'Abend',
			},
			{
				label: 'Nacht',
			},
		],
	],
};
const TABLE_DATA = [
	{
		montag: 'Alex',
		dienstag: 'Hong',
		mittwoch: 'Kevin',
		donnerstag: 'Fabian',
		freitag: 'Alex',
		samstag: 'Kevin',
		sonntag: 'Hong',
	},
	{
		montag: 'Helena',
		dienstag: 'Fabian',
		mittwoch: 'Marie',
		donnerstag: 'Ben',
		freitag: 'Marcus',
		samstag: 'Alex',
		sonntag: 'Marcus',
	},
	{
		montag: 'Fabian',
		dienstag: 'Helena',
		mittwoch: 'Fabian',
		donnerstag: 'Maya',
		freitag: 'Ben',
		samstag: 'Alex',
		sonntag: 'Helena',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
];
const TABLE_PAGED_DATA = [
	{
		montag: 'Alex',
		dienstag: 'Anna',
		mittwoch: 'Amalia',
		donnerstag: 'Arthur',
		freitag: 'Alex',
		samstag: 'Andrea',
		sonntag: 'Arnold',
	},
	{
		montag: 'Helena',
		dienstag: 'Fabian',
		mittwoch: 'Marie',
		donnerstag: 'Ben',
		freitag: 'Marcus',
		samstag: 'Alex',
		sonntag: 'Marcus',
	},
	{
		montag: 'Fabian',
		dienstag: 'Helena',
		mittwoch: 'Fabian',
		donnerstag: 'Maya',
		freitag: 'Ben',
		samstag: 'Alex',
		sonntag: 'Helena',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Finn',
		dienstag: 'Roger',
		mittwoch: 'Christian',
		donnerstag: 'Caspar',
		freitag: 'David',
		samstag: 'Bernard',
		sonntag: 'Anna',
	},
	{
		montag: 'Alex',
		dienstag: 'Anna',
		mittwoch: 'Amalia',
		donnerstag: 'Arthur',
		freitag: 'Alex',
		samstag: 'Andrea',
		sonntag: 'Arnold',
	},
	{
		montag: 'Helena',
		dienstag: 'Fabian',
		mittwoch: 'Marie',
		donnerstag: 'Ben',
		freitag: 'Marcus',
		samstag: 'Alex',
		sonntag: 'Marcus',
	},
	{
		montag: 'Fabian',
		dienstag: 'Helena',
		mittwoch: 'Fabian',
		donnerstag: 'Maya',
		freitag: 'Ben',
		samstag: 'Alex',
		sonntag: 'Helena',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Finn',
		dienstag: 'Roger',
		mittwoch: 'Christian',
		donnerstag: 'Caspar',
		freitag: 'David',
		samstag: 'Bernard',
		sonntag: 'Anna',
	},
	{
		montag: 'Alex',
		dienstag: 'Anna',
		mittwoch: 'Amalia',
		donnerstag: 'Arthur',
		freitag: 'Alex',
		samstag: 'Andrea',
		sonntag: 'Arnold',
	},
	{
		montag: 'Helena',
		dienstag: 'Fabian',
		mittwoch: 'Marie',
		donnerstag: 'Ben',
		freitag: 'Marcus',
		samstag: 'Alex',
		sonntag: 'Marcus',
	},
	{
		montag: 'Fabian',
		dienstag: 'Helena',
		mittwoch: 'Fabian',
		donnerstag: 'Maya',
		freitag: 'Ben',
		samstag: 'Alex',
		sonntag: 'Helena',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Finn',
		dienstag: 'Roger',
		mittwoch: 'Christian',
		donnerstag: 'Caspar',
		freitag: 'David',
		samstag: 'Bernard',
		sonntag: 'Anna',
	},
	{
		montag: 'Alex',
		dienstag: 'Anna',
		mittwoch: 'Amalia',
		donnerstag: 'Arthur',
		freitag: 'Alex',
		samstag: 'Andrea',
		sonntag: 'Arnold',
	},
	{
		montag: 'Helena',
		dienstag: 'Fabian',
		mittwoch: 'Marie',
		donnerstag: 'Ben',
		freitag: 'Marcus',
		samstag: 'Alex',
		sonntag: 'Marcus',
	},
	{
		montag: 'Fabian',
		dienstag: 'Helena',
		mittwoch: 'Fabian',
		donnerstag: 'Maya',
		freitag: 'Ben',
		samstag: 'Alex',
		sonntag: 'Helena',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Finn',
		dienstag: 'Roger',
		mittwoch: 'Christian',
		donnerstag: 'Caspar',
		freitag: 'David',
		samstag: 'Bernard',
		sonntag: 'Anna',
	},
	{
		montag: 'Alex',
		dienstag: 'Anna',
		mittwoch: 'Amalia',
		donnerstag: 'Arthur',
		freitag: 'Alex',
		samstag: 'Andrea',
		sonntag: 'Arnold',
	},
	{
		montag: 'Helena',
		dienstag: 'Fabian',
		mittwoch: 'Marie',
		donnerstag: 'Ben',
		freitag: 'Marcus',
		samstag: 'Alex',
		sonntag: 'Marcus',
	},
	{
		montag: 'Fabian',
		dienstag: 'Helena',
		mittwoch: 'Fabian',
		donnerstag: 'Maya',
		freitag: 'Ben',
		samstag: 'Alex',
		sonntag: 'Helena',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Hong',
		dienstag: 'Alex',
		mittwoch: 'Kevin',
		donnerstag: 'Maya',
		freitag: 'Fabian',
		samstag: 'Helena',
		sonntag: 'Alex',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Samuel',
		dienstag: 'Selena',
		mittwoch: 'Sandra',
		donnerstag: 'Salim',
		freitag: 'Robert',
		samstag: 'Richard',
		sonntag: 'Pamela',
	},
	{
		montag: 'Finn',
		dienstag: 'Roger',
		mittwoch: 'Christian',
		donnerstag: 'Caspar',
		freitag: 'David',
		samstag: 'Bernard',
		sonntag: 'Anna',
	},
];

setTimeout(() => {
	document.querySelector('#table-1a')._headers = TABLE_NEW_HEADERS;
	document.querySelector('#table-1a')._data = TABLE_DATA;
}, 5000);

setTimeout(() => {
	document.querySelector('#table-1b')._headers = TABLE_NEW_HEADERS;
	document.querySelector('#table-1b')._data = TABLE_DATA;
	setTimeout(() => (document.querySelector('#table-1a')._data = []), 1000);
}, 5000);

setTimeout(() => {
	document.querySelector('#table-1c')._headers = TABLE_NEW_HEADERS;
	document.querySelector('#table-1c')._data = [];
}, 5000);

setTimeout(() => {
	document.querySelector('#table-2')._headers = {
		horizontal: [
			[
				{
					asTd: true,
					colSpan: 2,
				},
			].concat(TABLE_NEW_HEADERS.vertical[0]),
			// cols: [TABLE_NEW_HEADERS.horizontal[0].cols[0]].concat(TABLE_NEW_HEADERS.vertical[0].rows),
		],
		vertical: [
			[
				{
					...TABLE_NEW_HEADERS.horizontal[0][1],
					rowSpan: TABLE_NEW_HEADERS.horizontal[0][1].colSpan,
					colSpan: undefined,
				},
				{
					...TABLE_NEW_HEADERS.horizontal[0][2],
					rowSpan: TABLE_NEW_HEADERS.horizontal[0][2].colSpan,
					colSpan: undefined,
				},
			],
		].concat([TABLE_NEW_HEADERS.horizontal[1]]),
	};
	document.querySelector('#table-2')._data = TABLE_DATA;
	document.querySelector('#table-3a')._data = TABLE_PAGED_DATA;
	document.querySelector('#table-3b')._data = TABLE_PAGED_DATA;
	document.querySelector('#table-3b')._pagination = {
		_boundaryCount: 0,
		_page: 3,
		_pageSize: 20,
		_pageSizeOptions: [5, 10, 20, 50, 100],
		_on: {
			onClick: console.log,
			onChangePage: console.log,
			onChangePageSize: console.log,
		},
	};
	document.querySelector('#table-4')._data = TABLE_PAGED_DATA;
	document.querySelector('#table-4')._pagination = {
		_boundaryCount: 0,
		_page: 3,
		_pageSize: 10,
		_pageSizeOptions: [5, 10, 20, 50, 100],
		_on: {
			onClick: console.log,
			onChangePage: console.log,
			onChangePageSize: console.log,
		},
	};
	document.querySelector('#table-5')._data = TABLE_PAGED_DATA;
	document.querySelector('#table-6')._data = TABLE_PAGED_DATA;
}, 5000);
