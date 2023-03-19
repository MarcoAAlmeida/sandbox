<template>
  <AppLayout>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Languages
        </h1>
        <blockquote class="text-center text-gray-400">
          tools of the trade
        </blockquote>

        <section class="mt-8 space-y-8 lg:mt-12">
          <section class="lg:flex lg:items-center">
            <div class="lg:w-1/2 ">
              <a class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 " href="/refs/python">
                Python
              </a>
              <h2 class="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Some people mihgt make fun of it, but ít's everywhere
              </h2>
            </div>

            <div class="mt-4 lg:w-1/2 lg:mt-0">
              <img
                class="object-cover w-full h-64 rounded-lg md:h-96"
                src="/img/Frcc0FOWwAAFYmj.jpg"
                alt=""
              >
            </div>
          </section>
       </section>
      </div>
    </section>
  </AppLayout>
</template>
<script>
import AppLayout from "../../components/AppLayout";
export default {
  components: {AppLayout}
}
</script>