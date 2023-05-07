// store/filters.ts
import { defineStore } from 'pinia'

export const usePageCardsStore = defineStore({
    id: 'page-links-store',
    state: () => {
        return {
            page_cards:[
                {
                    slug: '/collab/langchain',
                    cards: [
                        {
                            title: 'Langchain main github',
                            cover: 'noto:parrot',
                            stack: 'logos:python,logos:typescript-icon',
                            url: 'https://github.com/hwchase17/langchai'
                        },
                        {
                            title: 'Langchain Tutorials',
                            cover: 'noto:parrot',
                            description: "the LangChain tutorials repo has some useful notebooks to learn what the framework can do",
                            stack: 'logos:python,logos:jupyter,devicon:github-wordmark',
                            url: 'https://github.com/gkamradt/langchain-tutorials'
                        },
                        {
                            title: 'Langchain Official blog',
                            cover: 'noto:parrot',
                            stack: 'mdi:web',
                            url: 'https://blog.langchain.dev/'
                        },
                        {
                            title: 'ChatLangChain',
                            description: 'This repo is an implementation of a locally hosted chatbot specifically focused on question answering over the LangChain documentation.',
                            cover: 'devicon:github-wordmark',
                            stack: 'logos:python',
                            url: 'https://github.com/hwchase17/chat-langchain'
                        }



                    ]

                }
            ]
        }
    },
    getters: {
        get_cards_by_slug: (state) => {
            return (slug: string) => {
                const pageCard = state.page_cards.find((pageCard) => pageCard.slug === slug)
                return pageCard ? pageCard.cards : []
            }
        },
    },
})
