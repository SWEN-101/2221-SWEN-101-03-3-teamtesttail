import { module, test } from 'qunit';
import { setupTest } from 'test-tail/tests/helpers';

module('Unit | Route | testmode/gsfqc', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:testmode/gsfqc');
    assert.ok(route);
  });
});
