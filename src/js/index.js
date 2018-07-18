new Vue({
  el: '#app',
  data: {
    title: 'Hello vue js!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">google</a>'
  },
  methods: {
    seyHello: function (event) {
      this.title = 'hellow'
      return this.title;
    }
  }
});

new Vue({
  el: '#app2',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increse: function (step, event) {
      console.log(event)
      this.counter += step;
    },
    updateCoordinates: function (e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    alertMe: function (e) {
      console.log(e.target.value)
    }
  }
})

new Vue({
  el: '#app3',
  data: {
    name: 'Janek'
  }
})

new Vue({
  el: '#app4',
  data: {
    counter: 0,
    secondCounter: 2
  },
  computed: { // not executed when counter is not changed
    myOutput: function () {
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  },
  watch: { //Execute code upon data changes
    counter: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000)
    }
  },
  methods: {
    result: function () {
      console.log('methods')
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  }
})


new Vue({
  el: '#app5',
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    persons: [
      { name: 'Max', age: 27, color: 'red' },
      { name: 'Anna', age: 'unknown', color: 'blue' }
    ]
  }
})


var vm1 = new Vue({
  el: '#app6',
  data: {
    title: 'the VueJS Instance',
    showParagrph: false
  },
  methods: {
    show: function () {
      this.showParagrph = true;
      this.updateTitle('The VueJS Instace (updated)')
    },
    updateTitle: function (title) {
      this.title = title
    }
  },
  computed: {
    lowercasleTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value ' + value)
    }
  }
})

setTimeout(function() {
  vm1.title = 'changed by Timier!'
  vm1.show();
}, 3000)

var vm2 = new Vue({
  el: '#app7',
  data: {
    title: 'The second Instuance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'changed!'
    }
  }
})