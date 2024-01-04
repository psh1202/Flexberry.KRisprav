import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КомандировкаMixin
} from '../mixins/regenerated/models/i-i-s-k-risprav-командировка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КомандировкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
