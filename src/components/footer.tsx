import { Sparkles } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Community", "Support"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">NeuralFlow</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Enterprise AI automation platform that helps teams work smarter and
              scale faster.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NeuralFlow, Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
