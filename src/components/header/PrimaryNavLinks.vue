<template lang="html">
  <div class="PrimaryNavLinks">
    <g-link
      v-for="(course, i) in courses"
      :key="i"
      :to="course.start"
      class="mr-4 hover:text-indigo-800"
    >
      {{ course.abbrev }}
    </g-link>
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
