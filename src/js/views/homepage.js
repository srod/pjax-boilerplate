class Homepage extends Backbone.View {
  constructor() {
    console.log('homepage');

    let options = {
      el: '#container'
    };

    super(options);
  }

  start(json) {
    console.log('in view homepage', json);

    if (json && json.html) {
      this.$el.html(json.html);
    }
  }
}

export default Homepage;
