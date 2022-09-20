import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-tail/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | full-page-visual-timer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FullPageVisualTimer />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <FullPageVisualTimer>
        template block text
      </FullPageVisualTimer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
