import React from 'react';

import PageLayout from './components/PageLayout';
import FaqPage from './features/faq/FaqPage';

function App() {
  return (
    <>
      <PageLayout component={<FaqPage />} />
    </>
  );
}

export default App;
