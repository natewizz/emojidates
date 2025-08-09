import { Zap, Hand, Share2 } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-pink-100 dark:bg-pink-900/50 p-4 rounded-full mb-4">
              <Zap className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Generate</h3>
            <p className="text-muted-foreground">
              Press the button to get a unique emoji combination for your next date.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full mb-4">
              <Hand className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Go on the Date!</h3>
            <p className="text-muted-foreground">
              Let the emojis inspire you. Go out and have an adventure!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-full mb-4">
              <Share2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Share Your Story</h3>
            <p className="text-muted-foreground">
              Upload photos from your date, earn achievements, and get featured.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 