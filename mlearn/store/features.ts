// store/filters.ts
import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'feature-store',
    state: () => {
        return {
            features: [
                {
                    'title':'articles',
                    '_path':'/collab',
                    'description':'quick articles in collaboration with AI',
                    'icon': {
                        'name': 'fxemoji:leftwritinghand',
                        'class': 'text-primary dark:text-white',
                    },
                    'show_title': true
                },
                {
                    'title':'openai',
                    '_path':'/refs/openai',
                    'description':'to OpenAI documentation and dashboard',
                    'icon': {
                        'name': 'logos:openai-icon',
                        'class': 'text-primary dark:text-white',
                    },
                    'show_title': true
                },
                {
                    'title':'python',
                    '_path':'/refs/python',
                    'description':'because it is used by everyone, everywhere',
                    'icon': {
                        'name': 'logos:python',
                        'class': 'text-primary dark:text-white',
                    },
                    'show_title': true
                }


            ]
        }
    }
})
