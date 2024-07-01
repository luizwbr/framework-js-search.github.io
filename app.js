const frameworks = [
  { name: "AngularJS", url: "https://angularjs.org", type: "framework" },
  { name: "Aurelia", url: "https://aurelia.io", type: "framework" },
  { name: "Backbone.js", url: "https://backbonejs.org", type: "framework" },
  { name: "Bootstrap", url: "https://getbootstrap.com", type: "framework" },
  { name: "Chart.js", url: "https://chartjs.org", type: "library" },
  { name: "D3.js", url: "https://d3js.org", type: "library" },
  { name: "Dojo", url: "https://dojo.io", type: "framework" },
  { name: "Ember.js", url: "https://emberjs.com", type: "framework" },
  { name: "Express", url: "https://expressjs.com", type: "library" },
  { name: "Ext JS", url: "https://sencha.com/products/extjs", type: "framework" },
  { name: "Foundation", url: "https://get.foundation", type: "framework" },
  { name: "Gatsby", url: "https://gatsbyjs.com", type: "framework" },
  { name: "Glimmer", url: "https://glimmerjs.com", type: "framework" },
  { name: "Grunt", url: "https://gruntjs.com", type: "library" },
  { name: "Gulp", url: "https://gulpjs.com", type: "library" },
  { name: "Inferno", url: "https://infernojs.org", type: "framework" },
  { name: "Ionic", url: "https://ionicframework.com", type: "framework" },
  { name: "jQuery", url: "https://jquery.com", type: "library" },
  { name: "Knockout.js", url: "https://knockoutjs.com", type: "framework" },
  { name: "Koa", url: "https://koajs.com", type: "framework" },
  { name: "Lodash", url: "https://lodash.com", type: "library" },
  { name: "Marionette.js", url: "https://marionettejs.com", type: "framework" },
  { name: "Meteor", url: "https://meteor.com", type: "framework" },
  { name: "MobX", url: "https://mobx.js.org", type: "library" },
  { name: "Moment.js", url: "https://momentjs.com", type: "library" },
  { name: "Next.js", url: "https://nextjs.org", type: "framework" },
  { name: "Nuxt.js", url: "https://nuxtjs.org", type: "framework" },
  { name: "Polymer", url: "https://polymer-library.polymer-project.org", type: "framework" },
  { name: "Preact", url: "https://preactjs.com", type: "framework" },
  { name: "QUnit", url: "https://qunitjs.com", type: "framework" },
  { name: "Raphael.js", url: "https://raphaeljs.com", type: "library" },
  { name: "React", url: "https://reactjs.org", type: "framework" },
  { name: "Redux", url: "https://redux.js.org", type: "library" },
  { name: "RxJS", url: "https://rxjs.dev", type: "library" },
  { name: "Svelte", url: "https://svelte.dev", type: "framework" },
  { name: "Three.js", url: "https://threejs.org", type: "library" },
  { name: "Underscore.js", url: "https://underscorejs.org", type: "library" },
  { name: "Vue.js", url: "https://vuejs.org", type: "framework" },
  { name: "Webpack", url: "https://webpack.js.org", type: "library" },
  { name: "Zepto.js", url: "https://zeptojs.com", type: "library" },
  { name: "Mocha", url: "https://mochajs.org", type: "framework" },
  { name: "Chai", url: "https://chaijs.com", type: "library" },
  { name: "Sinon", url: "https://sinonjs.org", type: "library" },
  { name: "Jest", url: "https://jestjs.io", type: "framework" },
  { name: "Enzyme", url: "https://enzymejs.github.io/enzyme", type: "library" },
  { name: "Puppeteer", url: "https://pptr.dev", type: "library" },
  { name: "Cypress", url: "https://cypress.io", type: "framework" },
  { name: "TensorFlow.js", url: "https://tensorflow.org/js", type: "library" },
  { name: "Mithril.js", url: "https://mithril.js.org", type: "framework" },
  { name: "Alpine.js", url: "https://alpinejs.dev", type: "framework" },
  { name: "Hyperapp", url: "https://hyperapp.dev", type: "framework" },
  { name: "Select2", url: "https://select2", type: "library" },
  { name: "Fetch Polyfill", url: "https://fetch", type: "library" },
  { name: "Plyr", url: "https://plyr", type: "library" },
  { name: "Modernizr", url: "https://Modernizr", type: "library" },
  { name: "Quasar", url: "https://quasar", type: "framework" },
  { name: "Feather", url: "https://feather", type: "library" },
  { name: "LocalForage", url: "https://localForage", type: "library" },
  { name: "Core-js", url: "https://core-js", type: "library" },
  { name: "Hammer.js", url: "https://hammer.js", type: "library" },
  { name: "PhotoSwipe", url: "https://PhotoSwipe", type: "library" },
  { name: "Nanoid", url: "https://nanoid", type: "library" },
  { name: "Ramda", url: "https://ramda", type: "library" },
  { name: "Howler.js", url: "https://howler.js", type: "library" },
  { name: "Validator.js", url: "https://validator.js", type: "library" },
  { name: "ScrollReveal", url: "https://scrollreveal", type: "library" },
  { name: "Dragula", url: "https://dragula", type: "library" },
  { name: "Js-cookie", url: "https://js-cookie", type: "library" },
  { name: "Chalk", url: "https://chalk", type: "library" },
  { name: "StackEdit", url: "https://stackedit", type: "library" },
  { name: "ws", url: "https://ws", type: "library" },
  { name: "Lowdb", url: "https://lowdb", type: "library" },
  { name: "p5.js", url: "https://p5.js", type: "library" },
  { name: "Normalizr", url: "https://normalizr", type: "library" },
  { name: "Joi", url: "https://joi", type: "library" },
  { name: "AVA", url: "https://ava", type: "library" },
  { name: "SVGO", url: "https://svgo", type: "library" }
];
function searchFrameworks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredFrameworks = frameworks.filter(framework =>
        framework.name.toLowerCase().includes(searchInput)
    );
    displayFrameworks(filteredFrameworks.sort((a, b) => a.name.localeCompare(b.name)));
}

function searchByLetter(letter) {
    const filteredFrameworks = frameworks.filter(framework =>
        framework.name.startsWith(letter)
    );
    displayFrameworks(filteredFrameworks.sort((a, b) => a.name.localeCompare(b.name)));
}

function displayFrameworks(frameworks) {
    const frameworkList = document.getElementById('frameworkList');
    frameworkList.innerHTML = '';
    frameworks.forEach(framework => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${framework.url}" target="_blank">${framework.name} - <span class="badge">${framework.type}</span></a>`;
        frameworkList.appendChild(li);
    });
}
