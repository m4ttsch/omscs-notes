<template lang="html">
  <div class="notebooks">
    <div class="bg-white">
      <div class="w-100 max-w-5xl m-auto py-8 sm:py-16 px-8 sm:px-0">
        <h1 class="pb-8 sm:pb-16 text-4xl text-center">
          Notebooks
        </h1>
        <div class="flex justify-around flex-wrap">
          <div v-for="(course, i) in courses" :key="i" class="w-full max-w-md">
            <a
              :href="course.start"
              class="block shadow border rounded mb-8 sm:mb-16 hover:shadow-xl"
            >
              <div class="h-full">
                <div class="flex items-center px-6 py-8 sm:p-16">
                  <img
                    :src="`/assets/images/courses/${course.icon}`"
                    class="h-12 w-12 sm:h-24 sm:w-24 mr-6"
                    :alt="`Icon for ${course.name}`"
                  />
                  <div>
                    <p class="text-gray-500 leading-none text-xs">
                      {{ course.code }}
                    </p>
                    <h1 class="text-xl leading-none mb-2 text-indigo-800">
                      {{ course.name }}
                    </h1>
                    <p class="text-gray-500">by {{ course.author }}</p>
                  </div>
                </div>
                <div class="text-xs sm:text-sm">
                  <div
                    v-if="course.completed"
                    class="flex justify-between rounded rounded-t-none px-5 py-3 bg-gray-100 text-gray-500"
                  >
                    <p>Completed in {{ course.semester }}.</p>
                    <p>Grade received: {{ course.grade }}</p>
                  </div>
                  <p
                    v-else
                    class="rounded rounded-t-none px-5 py-3 bg-indigo-800 text-white"
                  >
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
  },
}
</script>

<style lang="css" scoped></style>
