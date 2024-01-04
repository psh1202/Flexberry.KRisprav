import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполнения: DS.attr('date', { defaultValue() { return new Date(); } }),
  действие: DS.attr('i-i-s-k-risprav-действия'),
  колвоДней: DS.attr('number'),
  местоНазначения: DS.attr('string'),
  номерДокумента: DS.attr('number'),
  цель: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-k-risprav-сотрудники', { inverse: null, async: false }),
  период: DS.hasMany('i-i-s-k-risprav-период', { inverse: 'командировка', async: false })
});

export let ValidationRules = {
  датаЗаполнения: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.датаЗаполнения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  действие: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.действие.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колвоДней: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.колвоДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  местоНазначения: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.местоНазначения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДокумента: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.номерДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цель: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.цель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-k-risprav-командировка.validations.период.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомандировкаE', 'i-i-s-k-risprav-командировка', {
    датаЗаполнения: attr('Дата заполнения', { index: 0 }),
    номерДокумента: attr('Номер документа', { index: 1 }),
    местоНазначения: attr('Место назначения', { index: 2 }),
    цель: attr('Цель', { index: 3 }),
    колвоДней: attr('Колво дней', { index: 4 }),
    действие: attr('Действие', { index: 5 }),
    сотрудники: belongsTo('i-i-s-k-risprav-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    период: hasMany('i-i-s-k-risprav-период', 'Период', {
      начало: attr('Начало', { index: 0 }),
      конец: attr('Конец', { index: 1 })
    })
  });

  modelClass.defineProjection('КомандировкаL', 'i-i-s-k-risprav-командировка', {
    датаЗаполнения: attr('Дата заполнения', { index: 0 }),
    номерДокумента: attr('Номер документа', { index: 1 }),
    местоНазначения: attr('Место назначения', { index: 2 }),
    цель: attr('Цель', { index: 3 }),
    колвоДней: attr('Колво дней', { index: 4 }),
    действие: attr('Действие', { index: 5 }),
    сотрудники: belongsTo('i-i-s-k-risprav-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
