import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Dropdown from '../../Forms/Dropdowns';

const languageMap = [
  {
    id: 1, value: 'English', dir: 'ltr', active: true
  },
  {
    id: 2, value: 'Ru', dir: 'ltl', active: false
  },
  {
    id: 3, value: 'Uz', dir: 'ltr', active: false
  }
];

const LanguageSelect = () => {
  const selected = localStorage.getItem('i18nextLng') || 1;
  const { t } = useTranslation();

  return (
    <Dropdown
      placeholder={t('name')}
      options={languageMap}
      value={selected}
      onChange={(item) => { i18next.changeLanguage(item); }}
      size="medium"
    />
  );
};

export default LanguageSelect;
