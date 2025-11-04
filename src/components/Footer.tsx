export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Climate Science Portfolio. Built with passion for our planet.
          </p>
          <p className="text-muted-foreground text-xs">
            Dedicated to creating technology that makes a difference
          </p>
        </div>
      </div>
    </footer>
  );
};
