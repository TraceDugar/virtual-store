import './styles.scss';

// This is the footer component.
const Footer = () => {

  return (
    <>
      <footer>

        {/* Name and Copyright. */}
        <p className="top-footer" data-testid="footer">&copy; 2023 T. Dugar</p>

        {/* Tools used. */}
        <p className="bottom-footer">React + Redux + Material UI</p>
      </footer>
    </>
  )
};

export default Footer;