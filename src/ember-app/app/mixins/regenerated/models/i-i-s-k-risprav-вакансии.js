import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  образование: DS.attr('i-i-s-k-risprav-вид-образования'),
  требуемыйОпыт: DS.attr('i-i-s-k-risprav-опыт'),
  должность: DS.belongsTo('i-i-s-k-risprav-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-k-risprav-вакансии.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-k-risprav-вакансии.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  требуемыйОпыт: {
    descriptionKey: 'models.i-i-s-k-risprav-вакансии.validations.требуемыйОпыт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-k-risprav-вакансии.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВакансииE', 'i-i-s-k-risprav-вакансии', {
    требуемыйОпыт: attr('Требуемый опыт', { index: 0 }),
    образование: attr('Образование', { index: 1 }),
    датаСоздания: attr('Дата создания', { index: 2 }),
    должность: belongsTo('i-i-s-k-risprav-должность', 'Должность', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ВакансииL', 'i-i-s-k-risprav-вакансии', {
    требуемыйОпыт: attr('Требуемый опыт', { index: 0 }),
    образование: attr('Образование', { index: 1 }),
    датаСоздания: attr('Дата создания', { index: 2 }),
    должность: belongsTo('i-i-s-k-risprav-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
