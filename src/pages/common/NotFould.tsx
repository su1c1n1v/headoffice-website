import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFould() {
  const { t } = useTranslation();

  return (
    <div>
      <h4>{t('page_not_fould')}</h4>
      <Link to="/">{t('go_home_page')}</Link>
    </div>
  );
}
