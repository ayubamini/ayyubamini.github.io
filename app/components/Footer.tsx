const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-light-gray/10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-light-gray/50">
          © {currentYear} Aiyoub Amini. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
