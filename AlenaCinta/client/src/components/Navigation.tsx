import { Link, useLocation } from "wouter";
import { Heart } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { path: "/", label: "Beranda" },
    { path: "/cerita-kita", label: "Cerita Kita" },
    { path: "/galeri", label: "Galeri" },
    { path: "/mood", label: "Mood" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 cursor-pointer transition-all">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-romantic text-xl text-primary">Alena</span>
            </div>
          </Link>

          <div className="flex gap-2">
            {links.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover-elevate active-elevate-2 cursor-pointer ${
                    location === link.path
                      ? "bg-primary/20 text-primary border border-primary/40"
                      : "text-foreground/80"
                  }`}
                  style={{
                    boxShadow: location === link.path ? "0 0 15px rgba(236, 72, 153, 0.3)" : "none",
                  }}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
