const types = [
	{
		slug: 'branding',
		name: 'Branding',
	},
	{
		slug: 'web-design',
		name: 'Web Design',
	},
	{
		slug: 'digital-marketing',
		name: 'Digital Marketing',
	},
]

export const PROJECT_TYPES = types

export const PROJECT_FILTERS = [{ slug: 'all', name: 'All' }].concat(types)

export const PROJECTS = [
	{
		img: '/img/makerek@2x.png',
		title: '#01 Project One',
		desc: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
		link: '/',
		type: ['branding'],
	},
	{
		img: '/img/newspaper02@2x.png',
		title: '#02 Project Two',
		desc: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
		link: '/',
		type: ['web-design', 'branding', 'digital-marketing'],
	},
	{
		img: '/img/rider01@2x.png',
		title: '#03 Project Three',
		desc: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
		link: '/',
		type: ['web-design'],
	},
	{
		img: '/img/whellies01@2x.png',
		title: '#04 Project Four',
		desc: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
		link: '/',
		type: ['digital-marketing'],
	},
	{
		img: '/img/makerek@2x.png',
		title: '#05 Project Five',
		desc: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
		link: '/',
		type: ['branding', 'web-design'],
	},
	{
		img: '/img/newspaper02@2x.png',
		title: '#06 Project Six',
		desc: 'A local paper with big ideas needed A sharp new brand to inspire readers.',
		link: '/',
		type: ['web-design'],
	},
]
