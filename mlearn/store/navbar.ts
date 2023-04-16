import { defineStore } from 'pinia'

export const useNavbarStore = defineStore({
    id: 'navbar-store',
    state: () => {
        return {
            navigation:[
                {
                    "title":"Home",
                    "_path":"http://marcoalmeida.dev.br",
                    "icon":{
                        "name":"emojione:house",
                        "class":"",
                    },
                    "show_title": true
                },
                {
                    "title":"collab",
                    "_path":"/collab",
                    "icon": {
                        "name": "logos:openai-icon",
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
                    "title": "linkedIn",
                    "_path": "https://www.linkedin.com/in/marcoaasilva/",
                    "icon": {
                        "name": "logos:linkedin-icon",
                    },
                },
                {
                    "title":"mlearn",
                    "_path":"/",
                    "icon": {
                        "name": "icon-park-twotone:robot-one",
                        "class": "text-primary dark:text-white",
                    },
                    "show_title": true
                }
            ]
        }
    }
})
