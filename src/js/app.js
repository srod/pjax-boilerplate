require('../index.html');
require('../pages/homepage.html');
require('../pages/page1.html');
require('../pages/page2.html');

import analytics from './modules/analytics';
import Router from './core/router';

analytics.init();
let router = new Router();
router.start();
