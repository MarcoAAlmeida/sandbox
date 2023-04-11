<template>
  <div class="p-8 lg:w-1/2 mx-auto">
    <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
      <p class="text-center text-sm text-gray-500 font-light m-4">sign in with credentials </p>
      <div class="relative"><input
          class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="username" v-model="login.username" type="text" placeholder="Email"/>
        <div class="absolute left-0 inset-y-0 flex items-center">
          <Icon name="twemoji:alien-monster" class="h-7 w-7 ml-3 text-gray-400 p-1"/>
        </div>
      </div>
      <div class="relative mt-3"><input
          class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          id="password" v-model="login.password" type="password" placeholder="Password"/>
        <div class="absolute left-0 inset-y-0 flex items-center">
          <Icon name="twemoji:old-key" class="h-7 w-7 ml-3 text-gray-400 p-1"/>
        </div>
      </div>
      <div class="flex items-center justify-center mt-4">
        <button
            @click="userLogin"
            class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useAuthStore} from '~/store/auth'

const authStore = useAuthStore()

const login = reactive({
  username: 'jane',
  password: 'password'
})

async function userLogin() {
  authStore.login(login.username, login.password)
}

async function userLogout() {
  authStore.logout()
}
</script>
