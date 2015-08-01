class Page1 extends Backbone.View {
  constructor() {
    console.log('views === Page1 constructor');

    let options = {
      el: '#container'
    };

    super(options);
  }

  start(json) {
    console.log('in view Page1', json);

    if (json && json.html) {
      this.$el.html(json.html);
    }
  }
}

export default Page1;
