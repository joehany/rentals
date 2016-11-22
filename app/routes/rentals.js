import Ember from 'ember';



export default Ember.Route.extend({
  model() {
  // var self=this;
  // rentals.forEach(function (element) {
  //   var newPost = self.store.createRecord('rental', element);
  //   newPost.save();
  //   alert(element);
  // });

    return this.store.findAll('rental');
  }
});