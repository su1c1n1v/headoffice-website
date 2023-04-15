import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';

export default function Main() {
  const { i18n } = useTranslation();
  return <Outlet />;
}
