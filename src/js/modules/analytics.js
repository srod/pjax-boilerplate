import settings from '../settings';

const analytics = {};

analytics.init = () => {
  console.log('modules === analytics.init');

  window._gaq = window._gaq || [];
  _gaq.push([
    '_setAccount',
    settings.GOOGLE_ANALYTICS_ACCOUNT
  ]);

  if (settings.GOOGLE_ANALYTICS_DOMAIN) {
    _gaq.push([
      '_setDomainName',
      settings.GOOGLE_ANALYTICS_DOMAIN
    ]);
  }

  (function() {
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = (
      'https:' === document.location.protocol ? 'https://ssl' : 'http://www'
    ) + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();
};

analytics.trackPageView = () => {
  if (settings.GOOGLE_ANALYTICS) {
    var url = Backbone.history.getFragment();

    // prepend slash
    if (!/^\//.test(url) && url !== '') {
      url = '/' + url;
    }

    _gaq.push([
      '_trackPageview',
      url
    ]);
  }
};

export default analytics;
