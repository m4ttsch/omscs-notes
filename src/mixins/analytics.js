export default {
  methods: {
    logEvent(eventName, eventOptions) {
      if(process.env.GRIDSOME_ENV === 'production') {
        firebase.analytics().logEvent(eventName, eventOptions)
      } else {
        console.log('Event triggered', eventName, eventOptions)
      }
    }
  }
}
