<template lang="html">
  <div class="PrimaryNavLinks">
    <div class="flex justify-center items-center">
      <g-link
        v-for="(course, i) in displayedCourses"
        :key="i"
        :to="course.start"
        class="mr-4 hover:text-indigo-800"
      >
        {{ course.abbrev }}
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

  computed: {
    displayedCourses() {
      return this.courses.filter((course) => course.displayInHeader !== false)
    },
  },
}
</script>
