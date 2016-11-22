import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('visiting /list-rentals', function(assert) {
  visit('/list-rentals');

  andThen(function() {
    assert.equal(currentURL(), '/list-rentals');
  });
});
