import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конец: DS.attr('date'),
  начало: DS.attr('date'),
  командировка: DS.belongsTo('i-i-s-k-risprav-командировка', { inverse: 'период', async: false })
});

export let ValidationRules = {
  конец: {
    descriptionKey: 'models.i-i-s-k-risprav-период.validations.конец.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  начало: {
    descriptionKey: 'models.i-i-s-k-risprav-период.validations.начало.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  командировка: {
    descriptionKey: 'models.i-i-s-k-risprav-период.validations.командировка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПериодE', 'i-i-s-k-risprav-период', {
    начало: attr('Начало', { index: 0 }),
    конец: attr('Конец', { index: 1 })
  });
};
