import {defineStore} from 'pinia'

export const useNavigationStore = defineStore({
    id: 'navigation',
    state: () => ({
        navigation:
            [
                {
                    "title": "Home",
                    "_path": "/",
                    "icon": {
                        "name": "emojione:house",
                        "class": "",
                    },
                    "show_title": true
                },
                {
                    "title": "refs",
                    "_path": "/refs",
                    "icon": {
                        "name": "logos:python",
                        "class": "text-primary dark:text-white",
                    },
                    "show_title": true
                },
                {
                    "title": "github",
                    "_path": "https://github.com/MarcoAAlmeida",
                    "icon": {
                        "name": "logos:github-icon",
                        "class": "text-primary dark:text-white",
                    },
                },
                {
                    "title": "twitter",
                    "_path": "https://twitter.com/MarcoDevBR",
                    "icon": {
                        "name": "logos:twitter"
                    },
                },
                {
                    "title": "linkedIn",
                    "_path": "https://www.linkedin.com/in/marcoaasilva/",
                    "icon": {
                        "name": "logos:linkedin-icon",
                    },
                }
            ]
    }),
    getters: {
        navLinks(state) {
            return state.navigation
        },
    },
    actions: {}
});