import Ember from 'ember';

export default Ember.Component.extend({
	isWide: false,
	notify: Ember.inject.service('notify'),
	actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
      this.get('notify').info('Hello there!');
    }

  }
});
