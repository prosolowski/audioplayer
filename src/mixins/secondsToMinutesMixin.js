export default {
  methods: {
    secondsToMinutes(e) {
      const m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(e % 60).toString().padStart(2,'0');
      return m + ':' + s;
    }
  }
};
