<template lang="html">
  <div class="hero bg-indigo-100">
    <div class="relative px-10 md:px-0 pt-20 py-32">
      <div class="flex justify-center lg:justify-between max-w-5xl w-100 m-auto">
        <div>
          <div>
            <h1 class="text-4xl sm:text-6xl leading-none text-gray-800">
              OMSCS Notes
            </h1>
            <h2 class="text-xl mt-2 text-gray-600 leading-tight sm:text-2xl mt-0">
              Clear, organized, and free lecture summaries.
            </h2>
            <p class="text-sm sm:text-md mt-8 mb-10 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>
            <a class="bg-indigo-800 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-5 border-b-4 border-indigo-900 hover:border-indigo-800 rounded mr-4">
              Notebooks
            </a>
            <button class="bg-teal-200 hover:bg-teal-100 text-teal-900 text-lg font-semibold py-3 px-5 border-b-4 border-teal-300 hover:border-teal-200 rounded">
              Testimonials
            </button>
          </div>
        </div>
        <div class="hidden lg:block">
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
