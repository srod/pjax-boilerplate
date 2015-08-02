class Page2 extends Backbone.NativeView {
  constructor() {
    console.log('views === Page2 constructor');

    let options = {
      el: '#container'
    };

    super(options);
  }

  start(json) {
    console.log('in view Page2', json);
  }
}

export default Page2;
