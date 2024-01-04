import {
  defineNamespace,
  defineProjections,
  Model as КомандировкаMixin
} from '../mixins/regenerated/models/i-i-s-k-risprav-командировка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КомандировкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
