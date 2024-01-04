import {
  defineNamespace,
  defineProjections,
  Model as ПериодMixin
} from '../mixins/regenerated/models/i-i-s-k-risprav-период';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПериодMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
