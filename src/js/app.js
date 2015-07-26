import analytics from './modules/analytics';
import Router from './core/router';

analytics.init();
let router = new Router();
router.start();
