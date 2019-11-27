<template>
  <Layout>
    <div class="bg-gray-200 relative pt-20 py-32">
      <div class="flex justify-between max-w-5xl w-100 m-auto">
        <div>
          <div>
            <h1 class="text-6xl leading-none">
              OMSCS Notes
            </h1>
            <h2 class="text-2xl">
              Clear, organized, and free lecture summaries.
            </h2>
            <p class="mt-8 mb-10 leading-relaxed max-w-lg">Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
            <button class="bg-indigo-800 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-5 border-b-4 border-indigo-900 hover:border-indigo-800 rounded mr-4">
              See Courses
            </button>
            <button class="bg-teal-200 hover:bg-teal-100 text-teal-900 text-lg font-semibold py-3 px-5 border-b-4 border-teal-300 hover:border-teal-200 rounded">
              Testimonials
            </button>
          </div>
        </div>
        <div>
          <g-image src="~/assets/images/dev_productivity.svg" width="400" />
        </div>
      </div>
      <Wave />
    </div>
  </Layout>
</template>

<script>
import Wave from '~/components/util/GentleWave'

export default {
  components: { Wave },
  metaInfo: {
    title: 'Home'
  }
}
</script>
