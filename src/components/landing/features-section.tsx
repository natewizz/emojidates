import { ThumbsUp, Trophy, Users, Save } from 'lucide-react';

const features = [
    {
        icon: <ThumbsUp className="w-10 h-10 text-blue-500" />,
        title: 'Never Be Bored Again',
        description: 'Infinite, fun, and spontaneous date ideas at your fingertips.',
    },
    {
        icon: <Trophy className="w-10 h-10 text-yellow-500" />,
        title: 'Earn Achievements',
        description: 'Gamify your dating life with badges and rewards for completing dates.',
    },
    {
        icon: <Users className="w-10 h-10 text-green-500" />,
        title: 'Join the Community',
        description: 'Share your experiences and get inspired by others in our gallery.',
    },
    {
        icon: <Save className="w-10 h-10 text-purple-500" />,
        title: 'Save & Plan',
        description: 'Keep track of your favorite date ideas for later.',
    }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why You'll Love It</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="p-8 border rounded-lg text-center">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
} 