import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 text-sm text-gray-400 border-t border-blue-900 mt-10">
      <p>&copy; {new Date().getFullYear()} Arun Vijo Tharakan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;