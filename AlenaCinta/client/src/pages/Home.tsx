import { Particles } from "@/components/Particles";
import { Heart, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Particles />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="inline-block">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          </div>

          <h1 
            className="font-romantic text-5xl md:text-7xl lg:text-8xl text-primary mb-6"
            style={{
              textShadow: "0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)",
            }}
            data-testid="text-title"
          >
            Untuk Alenaku
          </h1>

          <div className="space-y-6 text-foreground/90">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Sayang, ini website kecil yang aku buat khusus buat kamu
            </p>
            
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Karena kata-kata ga cukup buat jelasin betapa spesialnya kamu buat aku, jadi aku bikin tempat kecil ini buat nyimpen semua cerita kita
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Heart 
              className="w-8 h-8 text-primary fill-primary animate-pulse" 
              style={{
                filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))",
              }}
            />
            <Heart 
              className="w-6 h-6 text-primary fill-primary animate-pulse" 
              style={{
                filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))",
                animationDelay: "0.3s",
              }}
            />
            <Heart 
              className="w-10 h-10 text-primary fill-primary animate-pulse" 
              style={{
                filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))",
                animationDelay: "0.6s",
              }}
            />
          </div>

          <div 
            className="mt-16 p-8 rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm"
            style={{
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.15)",
            }}
            data-testid="card-message"
          >
            <p className="text-2xl md:text-3xl font-romantic text-primary mb-4">
              I love you
            </p>
            <p className="text-foreground/80 text-base md:text-lg">
              Terimakasih udah jadi bagian paling manis di hari-hariku
            </p>
          </div>

          <div className="pt-8">
            <p className="text-sm text-foreground/50 italic">
              Dengan cinta, dari Harsh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
