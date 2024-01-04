import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидОбразованияEnum from '../enums/i-i-s-k-risprav-вид-образования';

export default FlexberryEnum.extend({
  enum: ВидОбразованияEnum,
  sourceType: 'IIS.KRisprav.ВидОбразования'
});
