<template lang="html">
  <div class="notebooks">
    <div class="bg-white">
      <div class="w-100 max-w-5xl m-auto py-16">
        <h1 class="pb-16 text-4xl text-indigo-800 text-center">Notebooks</h1>
        <div class="flex justify-around flex-wrap">
          <div class="w-full max-w-md" v-for="(course, i) in courses" :key="i">
            <a :href="course.start" class="block shadow border rounded mb-16 hover:shadow-xl">
              <div class="h-full">
                <div class="flex items-center p-16">
                  <img :src="`/assets/images/courses/${course.icon}`" class="h-24 w-24 mr-6">
                  <div>
                    <p class="text-gray-500 leading-none text-xs">{{ course.code }}</p>
                    <h1 class="text-xl leading-none mb-2">{{ course.name }}</h1>
                    <p class="text-gray-500">by {{ course.author }}</p>
                  </div>
                </div>
                <div class="text-sm">
                  <div v-if="course.completed" class="flex justify-between rounded rounded-t-none px-5 py-3 bg-gray-100 text-gray-500">
                    <p>
                      Course completed in {{ course.semester }}.
                    </p>
                    <p>
                      Grade received: {{ course.grade }}
                    </p>
                  </div>
                  <p class="rounded rounded-t-none px-5 py-3 bg-indigo-800 text-white" v-else>
                    In progress!
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { courses } from '~/../data/courses.json'

export default {
  data() {
    return { courses }
  }
}
</script>

<style lang="css" scoped>
</style>
