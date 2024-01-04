import { Serializer as КомандировкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-risprav-командировка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КомандировкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
