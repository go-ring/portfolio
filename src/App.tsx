import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { PDFPortfolioPage } from '@/pages/PDFPortfolioPage';

function App() {
  const isPrintMode =
    new URLSearchParams(window.location.search).has('print') ||
    window.location.hash === '#print';

  if (isPrintMode) {
    return <PDFPortfolioPage />;
  }

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
