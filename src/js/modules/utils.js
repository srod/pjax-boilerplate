let utils = {};
const hasInsertAdjacentHTML = !!$('body').prop('insertAdjacentHTML');

utils.cleanURL = (url) => {
  url = encodeURI(url);

  return url.replace(/\/|-|\\|\?|=/g, '');
};

let html = (type, domobj, shtml) => {
  if (hasInsertAdjacentHTML) {
    domobj.insertAdjacentHTML(type, shtml);
  } else {
    // jquery fallback
    switch (type) {
      case 'beforeend':
        $(domobj).append(shtml);
        break;
      case 'afterbegin':
        $(domobj).prepend(shtml);
        break;
      case 'beforebegin':
        $(domobj).before(shtml);
        break;
      case 'afterend':
        $(domobj).after(shtml);
        break;
    }
  }
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
