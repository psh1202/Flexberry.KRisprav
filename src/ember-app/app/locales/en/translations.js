import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKRispravВакансииLForm from './forms/i-i-s-k-risprav-вакансии-l';
import IISKRispravДолжностьLForm from './forms/i-i-s-k-risprav-должность-l';
import IISKRispravКомандировкаLForm from './forms/i-i-s-k-risprav-командировка-l';
import IISKRispravСотрудникиLForm from './forms/i-i-s-k-risprav-сотрудники-l';
import IISKRispravВакансииEForm from './forms/i-i-s-k-risprav-вакансии-e';
import IISKRispravДолжностьEForm from './forms/i-i-s-k-risprav-должность-e';
import IISKRispravКомандировкаEForm from './forms/i-i-s-k-risprav-командировка-e';
import IISKRispravСотрудникиEForm from './forms/i-i-s-k-risprav-сотрудники-e';
import IISKRispravВакансииModel from './models/i-i-s-k-risprav-вакансии';
import IISKRispravДолжностьModel from './models/i-i-s-k-risprav-должность';
import IISKRispravКомандировкаModel from './models/i-i-s-k-risprav-командировка';
import IISKRispravПериодModel from './models/i-i-s-k-risprav-период';
import IISKRispravСотрудникиModel from './models/i-i-s-k-risprav-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-risprav-вакансии': IISKRispravВакансииModel,
    'i-i-s-k-risprav-должность': IISKRispravДолжностьModel,
    'i-i-s-k-risprav-командировка': IISKRispravКомандировкаModel,
    'i-i-s-k-risprav-период': IISKRispravПериодModel,
    'i-i-s-k-risprav-сотрудники': IISKRispravСотрудникиModel
  },

  'application-name': 'K risprav',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'K risprav',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K risprav',
          title: 'K risprav'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        вакансии: {
          caption: 'Вакансии',
          title: 'Вакансии',
          'i-i-s-k-risprav-вакансии-l': {
            caption: 'Вакансии',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-k-risprav-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-k-risprav-должность-l': {
            caption: 'Должность',
            title: ''
          }
        },
        командировки: {
          caption: 'Командировки',
          title: 'Командировки',
          'i-i-s-k-risprav-командировка-l': {
            caption: 'Командировка',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-risprav-вакансии-l': IISKRispravВакансииLForm,
    'i-i-s-k-risprav-должность-l': IISKRispravДолжностьLForm,
    'i-i-s-k-risprav-командировка-l': IISKRispravКомандировкаLForm,
    'i-i-s-k-risprav-сотрудники-l': IISKRispravСотрудникиLForm,
    'i-i-s-k-risprav-вакансии-e': IISKRispravВакансииEForm,
    'i-i-s-k-risprav-должность-e': IISKRispravДолжностьEForm,
    'i-i-s-k-risprav-командировка-e': IISKRispravКомандировкаEForm,
    'i-i-s-k-risprav-сотрудники-e': IISKRispravСотрудникиEForm
  },

});

export default translations;
