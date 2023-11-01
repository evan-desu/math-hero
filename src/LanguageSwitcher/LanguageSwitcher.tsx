import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('ja')}>Ja</button>
    </div>
  );
}

export default LanguageSwitcher;
