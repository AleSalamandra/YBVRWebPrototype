import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="site-footer"
      id="contact"
    >
      <Container>

        <div className="footer-main">

          <p className="footer-brand">
            YB
          </p>

          <p className="footer-copy">
            Immersive media,
            technology and experiences.
          </p>

        </div>

        <div className="footer-bottom">

          <span>
            © {currentYear} YB
          </span>

          <span>
            Madrid · Global
          </span>

        </div>

      </Container>
    </footer>
  );
}