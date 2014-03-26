// most permissive settings for jshint
/*jshint
	bitwise: false,
	curly: false,
	eqeqeq: false,
	forin: false,
	freeze: false,
	immed: false,
	latedef: false,
	newcap: false,
	noarg: false,
	noempty: false,
	nonew: false,
	plusplus: false,
	quotmark: false,
	undef: false,
	unused: false,
	strict: false,
	trailing: false,

	asi: true,
	boss: true,
	debug: true,
	esnext: true,
	evil: true,
	expr: true,
	funcscope: true,
	gcl: true,
	globalstrict: true,
	iterator: true,
	lastsemic: true,
	laxbreak: true,
	laxcomma: true,
	loopfunc: true,
	moz: true,
	multistr: true,
	notypeof: true,
	proto: true,
	scripturl: true,
	smarttabs: true,
	shadow: true,
	sub: true,
  noyield: true,

	maxerr: 5000
*/
// source: https://github.com/bcowgill/jshint-test/raw/master/lib/permissive-inline-jshint-opts.js

// option not supported at moment in grunt version of jshint

// Disable Warning - Missing '()' invoking a constructor.
/*jshint -W058 */


function boot() {

  var session = new Session;
  var app = new AppView({
    exercises: new Exercise.Collection,
    router: new AppRouter
  });
  app.router.on("all",console.log.bind(console));
  app.render();
  app.$el.appendTo(document.body);
  Backbone.history.start();
}

var FIREBASE_URL = 'https://blazing-fire-7478.firebaseio.com/';

var Session = Backbone.Model.extend({
  initialize: function() {
    this.on("change:id",function() {
      this.trigger("authenticated",this,true);
    },this)
  },
  url: function() {
    return "/some-fake-bakend"
  }
});


var Preferences = Backbone.Model.extend({
  type: "preferences",
  sync: function(method,model,options) {
    var storage = options.localStorage || localStorage;
    var key = model.type + ":" + model.id;
    switch(method) {
      case "create":
      case "update":
        storage[key] = JSON.stringify(model.attributes)
        options.success();
        break;
      case "retrieve":
        options.success(JSON.parse(storage[key]));
        break;
      case "delete":
        delete storage[key]
        options.success();
        break;
    }
  }
});

// AppView
// - listen to top-level routes
var AppView = Backbone.View.extend({
  initialize: function(opts) {
    this.preferences = new Preferences;
    this.preferences.fetch();
    this.router = opts.router;
    this.listenTo(this.router,"route:home",
      this.home,this);
    this.listenTo(this.router,"route:exerciseAdd",
      this.add,this);
    this.listenTo(this.router,"route:exerciseOverview",
      this.overview,this);
    this.exercises = opts.exercises;
  },
  render: function() {
    this.$el.html("<nav></nav><div class=stage></div>");
    this.$stage = this.$(".stage");
    var nav = new NavView({
      el: this.$("nav")[0]
    });
    nav.render();
  },
  switchView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    this.currentView.render();
    this.$stage.html("").append(this.currentView.el);
  },
  home: function() {
    var view = new HomeView({
      model: this.preferences
    });
    // create models and pass to view, using route params
    this.switchView(view);
  },
  add: function(id) {
    var view = new ExerciseAddView({
      collection: this.exercises
    })
    this.switchView(view);
  },
  overview: function() {
    var view = new ExerciseListOverview({
      collection: this.exercises
    });
    this.switchView(view);
  }
});

var Exercise = Backbone.Model.extend();

Exercise.Collection = Backbone.Firebase.Collection.extend({
  model: Exercise,
  firebase: FIREBASE_URL
});

var HomeView = Backbone.View.extend({
  events: {
    "change [name=sound]": "toggleSound"
  },
  initialize: function() {
    this.listenTo(this.model,"change",this.render,this);
  },
  toggleSound: function() {
    this.model.set("sound",this.$("[name=sound]").prop("checked"));
  },
  render: function() {
    this.el.innerHTML = [
      "<label>Sound:",
      "  <input type=checkbox name=sound " + (this.model.get("sound") ? "checked" : "") + ">",
      "</label>"
    ].join("")
  }
})

var ExerciseItemView = Backbone.Marionette.ItemView.extend({
  events: {
    "click .remove": "removeItem",
    "mouseover": "highlight",
    "mouseout": "dehighlight"
  },
  className: "exercise",
  initialize: function() {
    this.listenTo(this.model,"change",this.render);
  },
  highlight: function() {
    this.$el.css("background","yellow")
  },
  dehighlight: function() {
    this.$el.css("background","inherit")
  },
  removeItem: function(event) {
    this.model.collection.remove(this.model);
  },
  render: function() {
    this.el.innerHTML =
      this.model.get("name") +
      " <button class='remove'>x</button>";
  }
});

var ExerciseListView = Backbone.Marionette.CollectionView.extend({
  itemView: ExerciseItemView
});

var ExerciseAddView = Backbone.View.extend({
  tagName: "form",
  events: {
    "submit": "createExercise"
  },
  createExercise: function(event) {
    event.preventDefault();
    var nameEl = this.$("[name=name]");
    this.collection.add({
      name: nameEl.val()
    })
    nameEl.val("");
    Backbone.history.navigate("exercises",{trigger: true});
  },
  render: function() {
    this.el.innerHTML =
      "<label>Name: <input type=text name=name></label>";
  }
});


var ExerciseListOverview = Backbone.View.extend({
  initialize: function() {
    this.listView = new ExerciseListView({
      collection: this.collection
    })
  },
  render: function() {
    this.listView.render()
    this.el.appendChild(this.listView.el)
  }
})

var NavView = Backbone.View.extend({
  render: function() {
    this.el.innerHTML =
      "<a href='#'>Home</a> " +
      "<a href='#exercises/new'>Add</a> " +
      "<a href='#exercises'>All exercises</a>";
  }
})
// AppRouter
// - define routes
var AppRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "exercises/new": "exerciseAdd",
    "exercises": "exerciseOverview"
  }
});

boot();
