import {
  defineNamespace,
  defineProjections,
  Model as ВакансииMixin
} from '../mixins/regenerated/models/i-i-s-k-risprav-вакансии';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВакансииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
