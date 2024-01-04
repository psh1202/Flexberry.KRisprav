import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-risprav-вакансии-l');
  this.route('i-i-s-k-risprav-вакансии-e',
  { path: 'i-i-s-k-risprav-вакансии-e/:id' });
  this.route('i-i-s-k-risprav-вакансии-e.new',
  { path: 'i-i-s-k-risprav-вакансии-e/new' });
  this.route('i-i-s-k-risprav-должность-l');
  this.route('i-i-s-k-risprav-должность-e',
  { path: 'i-i-s-k-risprav-должность-e/:id' });
  this.route('i-i-s-k-risprav-должность-e.new',
  { path: 'i-i-s-k-risprav-должность-e/new' });
  this.route('i-i-s-k-risprav-командировка-l');
  this.route('i-i-s-k-risprav-командировка-e',
  { path: 'i-i-s-k-risprav-командировка-e/:id' });
  this.route('i-i-s-k-risprav-командировка-e.new',
  { path: 'i-i-s-k-risprav-командировка-e/new' });
  this.route('i-i-s-k-risprav-сотрудники-l');
  this.route('i-i-s-k-risprav-сотрудники-e',
  { path: 'i-i-s-k-risprav-сотрудники-e/:id' });
  this.route('i-i-s-k-risprav-сотрудники-e.new',
  { path: 'i-i-s-k-risprav-сотрудники-e/new' });
});

export default Router;
