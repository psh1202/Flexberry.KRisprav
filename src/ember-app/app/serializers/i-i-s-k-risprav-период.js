import { Serializer as ПериодSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-risprav-период';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПериодSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
