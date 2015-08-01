class Page2 extends Backbone.View {
  constructor() {
    console.log('views === Page2 constructor');

    let options = {
      el: '#container'
    };

    super(options);
  }

  start(json) {
    console.log('in view Page2', json);

    if (json && json.html) {
      this.$el.html(json.html);
    }
  }
}

export default Page2;
