import { Particles } from "@/components/Particles";
import { Calendar, MessageCircle, Heart, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function OurStory() {
  const stories = [
    {
      icon: Calendar,
      title: "1 November",
      content: "Hari pertama kita ketemu di bot anonim. Interaksi pertama kita itu manis banget, tapi aku agak kesal karena kamu bilang namamu Nalea... kenapa sih?"
    },
    {
      icon: MessageCircle,
      title: "Percakapan Pertama",
      content: "Kamu sedih waktu itu, dan aku tanya \"what happened to my sweet girl..\" Ga tau kenapa rasanya personal banget dan manis banget ngobrol sama kamu."
    },
    {
      icon: Globe,
      title: "Terjemahan Cinta",
      content: "Kamu ga bisa bahasa Inggris, tapi kamu translate setiap pesan sebelum kirim dan setelah terima. Itu sweet banget dan bikin kamu beda dari yang lain."
    },
    {
      icon: Heart,
      title: "Kamu Spesial",
      content: "Kamu yang paling manis. Kamu lucu banget. Selalu nyaman banget ngobrol sama kamu, berasa natural aja."
    },
    {
      icon: MessageCircle,
      title: "Pertengkaran Pertama",
      content: "Kita sempet bertengkar juga loh. Aku sempet kesel seharian, tapi kamu ga berubah sama sekali. Why are you so adorable huhhhh"
    },
    {
      icon: Users,
      title: "Untuk Teman-teman Alena",
      content: "Hai teman-teman Alena! Aku Harsh. Makasih ya udah support dia sampai sekarang. I really appreciate you guys. Tolong bantu dia ya kapanpun dia butuh, karena aku ga bisa ada di sana. Tapi jangan ganggu dia terlalu banyak ya, dia mungkin lagi sibuk ngobrol sama aku haha"
    },
    {
      icon: Globe,
      title: "Belajar Bahasa Indonesia",
      content: "Aku lagi belajar bahasa Indonesia buat kamu, biar kita bisa telponan kadang-kadang"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Particles />
      
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="font-romantic text-4xl md:text-6xl text-primary mb-4"
              style={{
                textShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
              }}
              data-testid="text-story-title"
            >
              Cerita Kita
            </h1>
            <p className="text-foreground/70 text-lg">
              Perjalanan indah kita berdua
            </p>
          </div>

          <div className="space-y-8">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card/40 backdrop-blur-sm border-primary/20 hover-elevate transition-all"
                style={{
                  boxShadow: "0 0 30px rgba(236, 72, 153, 0.1)",
                }}
                data-testid={`card-story-${index}`}
              >
                <div className="flex gap-4 md:gap-6">
                  <div 
                    className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30"
                    style={{
                      boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
                    }}
                  >
                    <story.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                      {story.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                      {story.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div 
            className="mt-16 p-8 md:p-12 rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm text-center"
            style={{
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.15)",
            }}
            data-testid="card-final-message"
          >
            <Heart 
              className="w-12 h-12 text-primary fill-primary mx-auto mb-6" 
              style={{
                filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.6))",
              }}
            />
            <p className="text-2xl md:text-3xl font-romantic text-primary mb-4">
              I really hope you are happy
            </p>
            <p className="text-foreground/80 text-lg md:text-xl">
              Because I am happy and grateful
            </p>
            <p className="text-3xl md:text-4xl font-romantic text-primary mt-6">
              Love youuu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
