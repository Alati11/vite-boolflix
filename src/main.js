import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as startSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as startRegular } from '@fortawesome/free-regular-svg-icons'
import { faBell as bellSolid} from '@fortawesome/free-solid-svg-icons'
import { faSearch as searchSolid } from '@fortawesome/free-solid-svg-icons'


library.add(startSolid, startRegular, bellSolid, searchSolid)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
