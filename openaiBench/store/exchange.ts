// store/filters.ts
import { defineStore } from 'pinia'

export const useExchangeStore = defineStore({
    id: 'exchange-store',
    state: () => {
        return {
            exchanges: [
                {
                    'id':'chatcmpl-477M2dU2IjfcQEsjnO5L6yRcmwWgX',
                    'datetime':'2023-04-02T00:00:01Z',
                    'prompt':{
                        'icon':'fxemoji:bear',
                        'message':'Here is my Spring boot configurations openai: apikey: <placeholder> gpt-model: gpt-3.5-turbo audio-model: whisper-1 http-client: How do I set up environment variable to override openai.apikey?'
                    },
                    'assistant':{
                        'icon':'fxemoji:alien',
                        'message':'To override the openai.apikey property using an environment variable, you can define an environment variable with the name OPENAI_APIKEY and the value of the API key you want to use.'
                    }

                },
                {
                    'id':'chatcmpl-332M2dU2IjfcQEsjnO5L6yRcmwWgX',
                    'datetime':'2023-04-02T00:58:59Z',
                    'prompt':{
                        'icon':'fxemoji:bear',
                        'message':'Hi there!'
                    },
                    'assistant':{
                        'icon':'fxemoji:alien',
                        'message':'How may I assist you?'
                    }

                }





            ]
        }
    }
})
