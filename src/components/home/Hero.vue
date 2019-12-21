<template lang="html">
  <div class="hero bg-indigo-100">
    <div class="relative pt-20 py-32">
      <div class="flex justify-between max-w-5xl w-100 m-auto">
        <div>
          <div>
            <h1 class="text-6xl leading-none text-indigo-800">
              OMSCS Notes
            </h1>
            <h2 class="text-2xl">
              Clear, organized, and free lecture summaries.
            </h2>
            <p class="mt-8 mb-10 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>
            <button class="bg-teal-200 hover:bg-teal-100 text-teal-900 text-lg font-semibold py-3 px-5 border-b-4 border-teal-300 hover:border-teal-200 rounded mr-4">
              See Courses
            </button>
            <a class="bg-indigo-800 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-5 border-b-4 border-indigo-900 hover:border-indigo-800 rounded">
              Testimonials
            </a>
          </div>
        </div>
        <div>
          <g-image src="~/assets/images/dev_productivity.svg" width="400" />
        </div>
      </div>
      <Wave />
    </div>
  </div>
</template>

<script>
import Wave from '~/components/util/GentleWave'

export default {
  name: 'Hero',
  components: { Wave }
}
</script>
