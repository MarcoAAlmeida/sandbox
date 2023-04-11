import {defineStore} from 'pinia'
import {useFetch} from "nuxt/app"
import {useAuthStore} from "~/store/auth"

const authStore = useAuthStore()

export const useExchangeStore = defineStore({
    id: 'exchange-store',
    state: () => {
        return {
            exchangeID: '',
            full: [],
            exchanges: [
                {
                    'id': 'chatcmpl-477M2dU2IjfcQEsjnO5L6yRcmwWgX',
                    'datetime': '2023-04-02T00:00:01Z',
                    'prompt': {
                        'icon': 'fxemoji:bear',
                        'message': 'Here is my Spring boot configurations openai: apikey: <placeholder> gpt-model: gpt-3.5-turbo audio-model: whisper-1 http-client: How do I set up environment variable to override openai.apikey?'
                    },
                    'assistant': {
                        'icon': 'fxemoji:alien',
                        'message': 'To override the openai.apikey property using an environment variable, you can define an environment variable with the name OPENAI_APIKEY and the value of the API key you want to use.'
                    }

                },
                {
                    'id': 'chatcmpl-332M2dU2IjfcQEsjnO5L6yRcmwWgX',
                    'datetime': '2023-04-02T00:58:59Z',
                    'prompt': {
                        'icon': 'fxemoji:bear',
                        'message': 'Hi there!'
                    },
                    'assistant': {
                        'icon': 'fxemoji:alien',
                        'message': 'How may I assist you?'
                    }
                }
            ]
        }
    },
    getters: {
        history(state) {
            return state.full
        },
    },
    actions: {
        async chat(question) {
            const {data : exchID} = await useFetch('/api/v1/chat', {
                method: 'POST',
                baseURL: 'http://localhost:8080',
                headers: {Authorization: `Bearer ${authStore.token}`},
                body: {
                    question: question
                },
                onRequestError({error}) {
                    console.log(error);
                }
            })

            this.$state.exchangeID = exchID.value.id

            const {data: exchData} = await useFetch('/api/v1/chat/' + exchID.value.id, {
                method: 'GET',
                baseURL: 'http://localhost:8080',
                headers: {Authorization: `Bearer ${authStore.token}`},
                onRequestError({error}) {
                    console.log(error);
                }
            })

            this.$state.full.push(exchData.value)

        }
    }

})
