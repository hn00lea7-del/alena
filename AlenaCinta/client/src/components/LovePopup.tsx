import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LovePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenLovePopup");
    if (!hasSeenPopup) {
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const movePopup = () => {
    const padding = 50;
    const maxX = window.innerWidth - 500;
    const maxY = window.innerHeight - 400;
    
    const newX = padding + Math.random() * (maxX - padding);
    const newY = padding + Math.random() * (maxY - padding);
    
    setPopupPosition({ x: newX, y: newY });
  };

  const handleYes = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem("hasSeenLovePopup", "true");
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}

      <Card
        className="absolute p-8 md:p-12 bg-card/90 backdrop-blur-sm border-primary/40 w-full max-w-md"
        style={{
          boxShadow: "0 0 60px rgba(236, 72, 153, 0.4)",
          left: popupPosition ? `${popupPosition.x}px` : '50%',
          top: popupPosition ? `${popupPosition.y}px` : '50%',
          transform: popupPosition ? 'none' : 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out',
        }}
      >
        <div className="text-center mb-8">
          <div
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40 animate-glow-pulse"
          >
            <Heart className="w-12 h-12 text-primary fill-current" />
          </div>

          <h2
            className="font-romantic text-3xl md:text-4xl text-primary mb-4"
            style={{
              textShadow: "0 0 20px rgba(236, 72, 153, 0.6)",
            }}
          >
            Do You Love Me?
          </h2>

          <p className="text-foreground/80 text-lg">
            Be honest mommy... 💕
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={handleYes}
            size="lg"
            className="text-lg px-8 py-6"
            style={{
              boxShadow: "0 0 30px rgba(236, 72, 153, 0.4)",
            }}
          >
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Yes! 💖
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-primary/40"
            style={{
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
            }}
            onMouseEnter={movePopup}
            onClick={movePopup}
          >
            No
          </Button>
        </div>

        {showConfetti && (
          <p className="text-center text-primary text-xl mt-6 font-romantic animate-pulse">
            I knew it! 💕
          </p>
        )}
      </Card>
    </div>
  );
}
