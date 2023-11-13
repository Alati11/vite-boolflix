import { reactive } from 'vue'

export const store = reactive({
	message: 'Booflix',
	Movies: [],
	Series: [],
    searchText: '',
    api_key: '68a3b6d5c53ee0854756fe7988888855',
    flags: {
		it: '/it.png',
		en: '/en.jpg',
		fr: '/fr.png',
		es: '/es.png',
	},
})  