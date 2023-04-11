import { defineStore } from 'pinia'
import { useFetch } from "nuxt/app"

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: null,
    }),
    getters: {
        tokenAvailable(state) {
            return state.token !== null;
        },
    },
    actions: {
        async login(username, password) {

            const { data, pending, error, refresh } = await useFetch('/api/auth/login',{
                method: 'POST',
                baseURL: 'http://localhost:8080',
                body: {
                    username: username,
                    password: password
                },
                onRequestError({ request, options, error }) {
                    console.log(error);
                }
            })
            this.$state.token = data.value.token

        },
        logout() {
            this.token = null;
        }
    }
});