export default {
  methods: {
    openMailchimp() {
      window.dojoRequire(['mojo/signup-forms/Loader'], function (L) {
        L.start({
          baseUrl: 'mc.us18.list-manage.com',
          uuid: '725428452f287e1c73da82617',
          lid: 'f9376ad0a8',
          uniqueMethods: true,
        })
      })

      document.cookie = 'MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
      document.cookie =
        'MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    },
  },
}
