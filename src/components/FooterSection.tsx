const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-heading text-lg font-bold">MB LABS</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Fábrica de Sistemas Sob Medida
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        WhatsApp:{" "}
        <a
          href="https://wa.me/5561999148523"
          className="text-gold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          (61) 99914-8523
        </a>
      </p>
      <p className="mt-6 text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} MB LABS. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
