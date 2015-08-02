class Page1 extends Backbone.NativeView {
  constructor() {
    console.log('views === Page1 constructor');

    let options = {
      el: '#container'
    };

    super(options);
  }

  start(json) {
    console.log('in view Page1', json);
  }
}

export default Page1;
