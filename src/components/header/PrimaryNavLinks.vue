<template lang="html">
  <div class="PrimaryNavLinks">
    <div class="flex justify-center items-center">
      <g-link
        v-for="(course, i) in courses"
        :key="i"
        :to="course.start"
        class="mr-4 hover:text-indigo-800"
      >
        {{ course.abbrev }}
      </g-link>
      <g-link
        class="md:mr-4 bg-indigo-800 py-1 px-2 rounded text-white hover:bg-indigo-600 shadow"
        to="/download"
      >
        Download
      </g-link>
    </div>
  </div>
</template>

<script>
import { courses } from '~/../data/courses.json'

export default {
  name: 'PrimaryNavLinks',

  data() {
    return { courses }
  },
}
</script>
