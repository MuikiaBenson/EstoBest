import React, { useEffect, useState } from 'react';

function PrivacyPage() {
  const [privacyContent, setPrivacyContent] = useState('');

  useEffect(() => {
    const fetchPrivacyContent = async () => {
      try {
        const response = await fetch('/privacy.md'); // Adjust the path as necessary
        const text = await response.text();
        setPrivacyContent(text);
      } catch (error) {
        console.error('Error fetching privacy content:', error);
      }
    };

    fetchPrivacyContent();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article dangerouslySetInnerHTML={{ __html: privacyContent }} />
    </div>
  );
}

export default PrivacyPage;

