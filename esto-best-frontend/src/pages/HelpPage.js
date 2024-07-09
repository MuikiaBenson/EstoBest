import React, { useEffect, useState } from 'react';

function HelpPage() {
  const [helpContent, setHelpContent] = useState('');

  useEffect(() => {
    const fetchHelpContent = async () => {
      try {
        const response = await fetch('/help.md'); // Adjust the path as necessary
        const text = await response.text();
        setHelpContent(text);
      } catch (error) {
        console.error('Error fetching help content:', error);
      }
    };

    fetchHelpContent();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article dangerouslySetInnerHTML={{ __html: helpContent }} />
    </div>
  );
}

export default HelpPage;
