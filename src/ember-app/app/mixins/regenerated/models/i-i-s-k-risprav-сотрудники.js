import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDсотрудника: DS.attr('number'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-k-risprav-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-k-risprav-сотрудники.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-k-risprav-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-k-risprav-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-k-risprav-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    iDсотрудника: attr('I dсотрудника', { index: 1 }),
    должность: belongsTo('i-i-s-k-risprav-должность', 'Должность', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-k-risprav-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    iDсотрудника: attr('I dсотрудника', { index: 1 }),
    должность: belongsTo('i-i-s-k-risprav-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
