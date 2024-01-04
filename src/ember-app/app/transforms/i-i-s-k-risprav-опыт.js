import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОпытEnum from '../enums/i-i-s-k-risprav-опыт';

export default FlexberryEnum.extend({
  enum: ОпытEnum,
  sourceType: 'IIS.KRisprav.Опыт'
});
