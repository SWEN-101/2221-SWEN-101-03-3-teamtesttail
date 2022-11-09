import { module, test } from 'qunit';
import { setupTest } from 'test-tail/tests/helpers';

module('Unit | Route | testmode/settings', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:testmode/settings');
    assert.ok(route);
  });
});
