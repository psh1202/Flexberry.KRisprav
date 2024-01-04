import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-risprav-сотрудники', 'Unit | Serializer | i-i-s-k-risprav-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-risprav-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-k-risprav-вид-образования',
    'transform:i-i-s-k-risprav-действия',
    'transform:i-i-s-k-risprav-опыт',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
