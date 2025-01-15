import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/5 border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary">
              AlgoUltron
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Automated crypto trading for everyone. Cutting-edge trading automation for novices and pros.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Features</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Signal Bots</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Grid Bots</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">DCA Bots</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} AlgoUltron. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};