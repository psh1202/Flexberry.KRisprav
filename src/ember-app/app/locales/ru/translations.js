import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'K risprav',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K risprav',
          title: 'K risprav'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
