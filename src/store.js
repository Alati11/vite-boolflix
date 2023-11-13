import { reactive } from 'vue'

export const store = reactive({
	message: 'Booflix',
	movies: [],
	series: [],
    searchText: '',
    API_KEY: '68a3b6d5c53ee0854756fe7988888855',
    flags: {
		it: '/it.png',
		en: '/en.jpeg',
		fr: '/fr.png',
		es: '/es.png',
	},
    poster_path:'',
})  