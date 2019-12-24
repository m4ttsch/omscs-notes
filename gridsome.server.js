// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const site = require('./config/site')

module.exports = function (api) {
  api.loadSource(({ addCollection, addMetadata }) => {
    const keys = Object.keys(site)

    for(const key of keys) {
      addMetadata(key, site[key])
    }
  })

  api.createPages(async ({ createRoute, graphql }) => {
    const { data } = await graphql(`{
      allNote {
        edges {
          node {
            id
            lecture
            course
          }
        }
      }
    }`)

    const noteRoute = createRoute({
      path: `/:course/:lecture`,
      component: './src/templates/Note.vue'
    })

    data.allNote.edges.forEach(({ node: { id, course, lecture }}) => {
      noteRoute.addPage({
        path: `/${course}/${lecture}`,
        context: { id, course }
      })
    })
  })
}
