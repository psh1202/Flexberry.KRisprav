import { Serializer as ВакансииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-risprav-вакансии';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВакансииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
