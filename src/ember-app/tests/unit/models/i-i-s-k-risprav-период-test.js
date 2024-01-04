import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-risprav-период', 'Unit | Model | i-i-s-k-risprav-период', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-k-risprav-вакансии',
    'model:i-i-s-k-risprav-должность',
    'model:i-i-s-k-risprav-командировка',
    'model:i-i-s-k-risprav-период',
    'model:i-i-s-k-risprav-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
