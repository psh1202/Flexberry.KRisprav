import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ДействияEnum from '../enums/i-i-s-k-risprav-действия';

export default FlexberryEnum.extend({
  enum: ДействияEnum,
  sourceType: 'IIS.KRisprav.Действия'
});
