let utils = {};

utils.cleanURL = (url) => {
  url = encodeURI(url);

  return url.replace(/\/|-|\\|\?|=/g, '');
};

let html = (type, domobj, shtml) => {
  domobj.insertAdjacentHTML(type, shtml);
  return domobj;
};

utils.append = (domobj, shtml) => {
  return html('beforeend', domobj, shtml);
};

utils.prepend = (domobj, shtml) => {
  return html('afterbegin', domobj, shtml);
};

utils.before = (domobj, shtml) => {
  return html('beforebegin', domobj, shtml);
};

utils.after = (domobj, shtml) => {
  return html('afterend', domobj, shtml);
};

export default utils;
