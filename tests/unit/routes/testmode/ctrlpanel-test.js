import { module, test } from 'qunit';
import { setupTest } from 'test-tail/tests/helpers';

module('Unit | Route | testmode/ctrlpanel', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:testmode/ctrlpanel');
    assert.ok(route);
  });
});
