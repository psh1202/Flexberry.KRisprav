import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.вакансии.caption'),
          title: i18n.t('forms.application.sitemap.вакансии.title'),
          children: [{
            link: 'i-i-s-k-risprav-вакансии-l',
            caption: i18n.t('forms.application.sitemap.вакансии.i-i-s-k-risprav-вакансии-l.caption'),
            title: i18n.t('forms.application.sitemap.вакансии.i-i-s-k-risprav-вакансии-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-k-risprav-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-k-risprav-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-k-risprav-сотрудники-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-k-risprav-должность-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-k-risprav-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-k-risprav-должность-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.командировки.caption'),
          title: i18n.t('forms.application.sitemap.командировки.title'),
          children: [{
            link: 'i-i-s-k-risprav-командировка-l',
            caption: i18n.t('forms.application.sitemap.командировки.i-i-s-k-risprav-командировка-l.caption'),
            title: i18n.t('forms.application.sitemap.командировки.i-i-s-k-risprav-командировка-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})