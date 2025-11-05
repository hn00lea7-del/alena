import { useState } from "react";
import { Particles } from "@/components/Particles";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Heart, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { GalleryPhoto } from "@shared/schema";

const photos: GalleryPhoto[] = [
  {
    id: 1,
    imageUrl: "/Untitled Project (3)_1762279320965.jpg",
    caption: "Mommy tercantiiiik, I can't stop looking at you"
  },
  {
    id: 2,
    imageUrl: "/Untitled Project (2)_1762279320966.jpg",
    caption: "Just marry me already cutie"
  },
  {
    id: 3,
    imageUrl: "/photo_6075891952651017841_y_1762279320967.jpg",
    caption: "You're so adorable, I'm melting"
  },
  {
    id: 4,
    imageUrl: "/Untitled Project (1)_1762279320968.jpg",
    caption: "My sweet girl, always and forever"
  },
];

export default function Gallery() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const { toast } = useToast();

  const verifyPasswordMutation = useMutation({
    mutationFn: async (password: string) => {
      const response = await apiRequest("POST", "/api/gallery/verify", { password });
      const result = await response.json() as { success: boolean };
      return result;
    },
    onSuccess: (data) => {
      if (data.success) {
        setIsUnlocked(true);
        toast({
          title: "Unlocked!",
          description: "Welcome mommy, enjoy the photos",
        });
      } else {
        toast({
          title: "Wrong password!",
          description: "Try again cutie",
          variant: "destructive",
        });
      }
    },
    onError: () => {
      toast({
        title: "Wrong password!",
        description: "Try again cutie",
        variant: "destructive",
      });
    }
  });

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    verifyPasswordMutation.mutate(password);
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <Particles />
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <Card 
            className="w-full max-w-md p-8 md:p-12 bg-card/40 backdrop-blur-sm border-primary/30"
            style={{
              boxShadow: "0 0 50px rgba(236, 72, 153, 0.2)",
            }}
            data-testid="card-password-gate"
          >
            <div className="text-center mb-8">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40"
                style={{
                  boxShadow: "0 0 30px rgba(236, 72, 153, 0.4)",
                }}
              >
                <Lock className="w-10 h-10 text-primary" />
              </div>
              
              <h1 
                className="font-romantic text-3xl md:text-4xl text-primary mb-3"
                style={{
                  textShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
                }}
                data-testid="text-locked-title"
              >
                Locked Just For You
              </h1>
              
              <p className="text-foreground/70 text-base md:text-lg">
                Siapa nih yang mau liat?
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-6">
              <div>
                <Input
                  type="password"
                  placeholder="Masukkan password rahasia..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center text-lg py-6 bg-background/50 border-primary/30 focus:border-primary/60 focus:ring-primary/40"
                  style={{
                    boxShadow: "0 0 20px rgba(236, 72, 153, 0.1)",
                  }}
                  data-testid="input-password"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full py-6 text-lg font-medium"
                disabled={verifyPasswordMutation.isPending}
                style={{
                  boxShadow: "0 0 25px rgba(236, 72, 153, 0.3)",
                }}
                data-testid="button-unlock"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                {verifyPasswordMutation.isPending ? "Checking..." : "Unlock Gallery"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Particles />
      
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h1 
              className="font-romantic text-4xl md:text-6xl text-primary mb-4"
              style={{
                textShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
              }}
              data-testid="text-gallery-title"
            >
              Galeri Mommy
            </h1>
            <p className="text-foreground/70 text-lg">
              Photos of my most beautiful girl
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
            {photos.map((photo) => (
              <Card
                key={photo.id}
                className="group overflow-hidden bg-card/40 backdrop-blur-sm border-primary/20 hover-elevate cursor-pointer transition-all w-full"
                style={{
                  boxShadow: "0 0 30px rgba(236, 72, 153, 0.1)",
                }}
                onClick={() => setSelectedPhoto(photo)}
                data-testid={`card-photo-${photo.id}`}
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={`Photo ${photo.id}`}
                    className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-foreground text-center font-medium text-lg md:text-xl leading-relaxed">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div 
            className="mt-16 p-8 rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm text-center"
            style={{
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.15)",
            }}
          >
            <p className="text-2xl md:text-3xl font-romantic text-primary">
              You're everything I ever wanted
            </p>
          </div>
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          data-testid="modal-photo-view"
        >
          <div 
            className="max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="overflow-hidden border-primary/30" style={{
              boxShadow: "0 0 60px rgba(236, 72, 153, 0.3)",
            }}>
              <img
                src={selectedPhoto.imageUrl}
                alt={`Photo ${selectedPhoto.id}`}
                className="w-full h-auto"
              />
              <div className="p-6 bg-card/60 backdrop-blur-sm">
                <p className="text-xl text-center font-medium text-foreground">
                  {selectedPhoto.caption}
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
