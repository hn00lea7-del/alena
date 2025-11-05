import { useState } from "react";
import { Particles } from "@/components/Particles";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

interface Question {
  id: number;
  question: string;
  emoji: string;
  options: {
    text: string;
    nextId: number;
    shouldMove?: boolean;
  }[];
  isEnd?: boolean;
}

const questions: Question[] = [
  {
    id: 0,
    question: "Hai cantik 👀 lagi ngerasa gimana hari ini?",
    emoji: "💖",
    options: [
      { text: "Aku super happy! 😄", nextId: 5 },
      { text: "Hmm... lagi gak semangat 😔", nextId: 2 },
      { text: "Aku kangen kamu 🥺", nextId: 3 },
    ],
  },
  {
    id: 2,
    question: "Awww, siapa sih yang bikin sayang aku sedih?",
    emoji: "😢",
    options: [
      { text: "Gak ada... cuma capek aja 😴", nextId: 6 },
      { text: "Kamu, soalnya kamu lupa aku 😞", nextId: 7 },
    ],
  },
  {
    id: 3,
    question: "Awww, aku juga kangen kamu~ wifeyyyy",
    emoji: "✨",
    options: [
      { text: "cuteeee 😍", nextId: 8 },
      { text: "Enggak, tidak wifey😒", nextId: 3, shouldMove: true },
    ],
  },
  {
    id: 4,
    question: "Kalau gitu biar aku jadi tempat istirahat kamu malam ini",
    emoji: "😌💤",
    options: [
      { text: "Hahaha boleh 😘", nextId: 9 },
      { text: "Gak usah deh 😅", nextId: 10 },
    ],
  },
  {
    id: 6,
    question: "Sini deh, peluk dulu 🤗 *peluk erat banget*",
    emoji: "💫",
    options: [
      { text: "Enak banget peluknya 💕", nextId: 13 },
      { text: "Ih geli 😆", nextId: 14 },
    ],
  },
  {
    id: 7,
    question: "Aku?! 😭 Enggaklah~ kamu tuh udah menetap di hati aku",
    emoji: "💘",
    options: [
      { text: "Buktiin dong 😏", nextId: 15 },
      { text: "Boong 😒", nextId: 16 },
    ],
  },
  {
    id: 9,
    question: "Oke, sekarang tutup mata... *mode nyender aktif*",
    emoji: "🧸💤",
    options: [
      { text: "Ih gemes banget 🥹", nextId: 13 },
      { text: "Kamu tuh ngeselin tapi lucu 😅", nextId: 12 },
    ],
  },
  {
    id: 10,
    question: "Oke deh 😤 gak mau rayu kamu lagi ah!",
    emoji: "🌹",
    options: [
      { text: "Eh jangan gitu 😭", nextId: 11 },
      { text: "Ya udah 😏", nextId: 16 },
    ],
  },
  {
    id: 5,
    question: "Yay! Liat kamu senyum aja udah bikin hariku cerah banget",
    emoji: "🥰",
    options: [
      { text: "Kamu lucu ☺️", nextId: 11 },
      { text: "Ih gombal banget 😝", nextId: 12 },
    ],
  },
  {
    id: 11,
    question: "Jadiii... kamu cinta gak sama aku?",
    emoji: "😚",
    options: [
      { text: "Ya jelas doong 💞", nextId: 17 },
      { text: "Hmm... mungkin 😏", nextId: 18 },
    ],
  },
  {
    id: 12,
    question: "Hehh 😤 aku ngambek nih sampe kamu minta maaf",
    emoji: "😔",
    options: [
      { text: "Maaf ya sayang 😅", nextId: 11 },
      { text: "Ngambek aja sana 😈", nextId: 12, shouldMove: true },
    ],
  },
  {
    id: 13,
    question: "Tau gak sih... kamu tuh bagian paling indah dari hariku",
    emoji: "🥰",
    options: [
      { text: "Aduh malu aku 😳", nextId: 17 },
      { text: "Coba bilang lagi 😏", nextId: 19 },
    ],
  },
  {
    id: 14,
    question: "Ihh nyebelin 😤 yaudah deh gak jadi peluk!",
    emoji: "🙄",
    options: [
      { text: "Eh jangan gitu 😭", nextId: 6 },
      { text: "Ya udah sih 😌", nextId: 20 },
    ],
  },
  {
    id: 15,
    question: "Oke! Nih ya... AKU CINTA KAMU BANGET 💘💘💘",
    emoji: "🔥",
    options: [
      { text: "Awww aku juga cinta kamu 🥺", nextId: 17 },
      { text: "Hehe kedengeran sampe sini 😅", nextId: 18 },
    ],
  },
  {
    id: 16,
    question: "Oke oke, aku emang tukang bohong... tapi cuma buat kamu",
    emoji: "😝",
    options: [
      { text: "Hehe oke 😊", nextId: 11 },
    ],
  },
  {
    id: 17,
    question: "aku yang lebih cinta kamu",
    emoji: "😘",
    options: [
      { text: "Gak, aku yang lebih 😏", nextId: 17, shouldMove: true },
      { text: "Yaudah deh kamu menang ❤️", nextId: 20},
    ],
  },
  {
    id: 18,
    question: "Mungkin?? 😤 Hmm... aku gangguin terus sampe kamu bilang iya!",
    emoji: "🤭",
    options: [
      { text: "Yaudah iya 😅", nextId: 17 },
      { text: "Enggak mau 😈", nextId: 18, shouldMove: true },
    ],
  },
  {
    id: 19,
    question: "Kamu lucu. Kamu manis. Kamu tuh kesayanganku",
    emoji: "💞",
    options: [
      { text: "Udah ah malu 😳", nextId: 17 },
      { text: "Terusin aja 😆", nextId: 19 },
    ],
  },
  {
    id: 20,
    question: "Oke oke, damai yaa 🤝 gak usah drama lagi hari ini",
    emoji: "💛",
    options: [],
    isEnd: true,
  },
  {
    id: 21,
    question: "Hehe, gitu dong sayang 💞 sini peluk dulu — pelukan unlimited buat kamu",
    emoji: "🧸",
    options: [],
    isEnd: true,
  },
  {
    id: 8,
    question: "ohh wifeyyy, tidak mo...?",
    emoji: "😘",
    options: [
        { text: "HEI HEI 😳", nextId: 21 },
    ],
  }
];

export default function Mood() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [angryButtons, setAngryButtons] = useState<Set<string>>(new Set());

  const getQuestionById = (id: number): Question => {
    const question = questions.find((q) => q.id === id);
    if (!question) {
      return questions.find((q) => q.id === 21) || questions[questions.length - 1];
    }
    return question;
  };

  const currentQuestion = getQuestionById(currentQuestionId);

  const handleAnswer = (option: Question["options"][0], index: number) => {
    // If option should move, show angry emoji and don't proceed
    if (option.shouldMove) {
      const buttonKey = `${currentQuestionId}-${index}`;
      setAngryButtons(prev => new Set(prev).add(buttonKey));
      return;
    }

    // Safety check: If nextId doesn't exist, go to final message (21)
    const nextQuestion = questions.find((q) => q.id === option.nextId);
    if (!nextQuestion) {
      setCurrentQuestionId(21);
      return;
    }
    
    setCurrentQuestionId(option.nextId);
    // Clear angry buttons when moving to next question
    setAngryButtons(new Set());
  };

  const resetMood = () => {
    setCurrentQuestionId(0);
    setAngryButtons(new Set());
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Particles />
      
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {!currentQuestion.isEnd && (
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
              <h1 
                className="font-romantic text-4xl md:text-6xl text-primary mb-4"
                style={{
                  textShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
                }}
              >
                Mood Check 💭
              </h1>
              <p className="text-foreground/70 text-lg">
                Gimana perasaan kamu hari ini?
              </p>
            </div>
          )}

          <div className="flex items-center justify-center min-h-[60vh]">
            <Card
              className="p-8 md:p-10 bg-card/60 backdrop-blur-lg border-primary/30 max-w-md w-full transition-all duration-500"
              style={{
                boxShadow: "0 0 40px rgba(236, 72, 153, 0.2)",
              }}
            >
              <div className="text-center space-y-6">
                {/* Emoji */}
                <div className="text-6xl md:text-8xl animate-bounce">
                  {currentQuestion.emoji}
                </div>

                {/* Question */}
                <h2 
                  className="font-romantic text-2xl md:text-3xl text-primary leading-relaxed"
                  style={{
                    textShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  {currentQuestion.question}
                </h2>

                {/* Options */}
                {!currentQuestion.isEnd ? (
                  <div className="space-y-4 pt-4">
                    {currentQuestion.options.map((option, index) => {
                      const buttonKey = `${currentQuestionId}-${index}`;
                      const isAngry = angryButtons.has(buttonKey);
                      return (
                        <Button
                          key={index}
                          onClick={() => handleAnswer(option, index)}
                          className="w-full py-6 text-base md:text-lg font-medium transition-all duration-300 bg-primary hover:bg-primary/90 hover-elevate active-elevate-2"
                          style={{
                            boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)",
                          }}
                        >
                          {isAngry ? '😠' : option.text}
                        </Button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-6 pt-6">
                    <Heart 
                      className="w-16 h-16 text-primary fill-primary mx-auto animate-pulse" 
                      style={{
                        filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
                      }}
                    />
                    <Button
                      onClick={resetMood}
                      className="w-full py-6 text-base md:text-lg font-medium bg-primary hover:bg-primary/90 transition-all hover-elevate active-elevate-2"
                      style={{
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)",
                      }}
                    >
                      Mulai Lagi 💕
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
