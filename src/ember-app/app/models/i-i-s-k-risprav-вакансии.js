import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВакансииMixin
} from '../mixins/regenerated/models/i-i-s-k-risprav-вакансии';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВакансииMixin, Validations, {
});

defineProjections(Model);

export default Model;
