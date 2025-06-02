const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 text-center text-xs text-text-secondary border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="mb-2">
          * This is a clone project for demonstration purposes only. All product names, logos, and brands are property of their respective owners.
        </p>
        <p className="mb-2">
          ‡ Monthly pricing requires a 24‑month instalment loan with 0% p.a. from Bajaj Finance Ltd., HDFC Bank or ZestMoney. Subject to terms and conditions.
        </p>
        <p className="mb-4">
            Product information is based on the Apple website presentation for iPhone 16 Pro.
        </p>
        <div className="mb-4 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sales and Refunds</a>
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Site Map</a>
        </div>
        <p>
          Copyright © {currentYear} Apple Inc. All rights reserved. This clone is not affiliated with Apple Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
