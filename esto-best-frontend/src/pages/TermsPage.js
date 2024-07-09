import React, { useEffect, useState } from 'react';

function TermsPage() {
  const [termsContent, setTermsContent] = useState('');

  useEffect(() => {
    const fetchTermsContent = async () => {
      try {
        const response = await fetch('/terms.md'); // Adjust the path as necessary
        const text = await response.text();
        setTermsContent(text);
      } catch (error) {
        console.error('Error fetching terms content:', error);
      }
    };

    fetchTermsContent();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article dangerouslySetInnerHTML={{ __html: termsContent }} />
    </div>
  );
}

export default TermsPage;
