class Homepage extends Backbone.NativeView {
  constructor() {
    console.log('views === Homepage constructor');

    let options = {
      el: '#container'
    };

    super(options);
  }

  start(json) {
    console.log('in view homepage', json);
  }
}

export default Homepage;
