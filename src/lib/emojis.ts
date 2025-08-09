export const emojiPool = {
  foodAndDrink: ['🍔', '🍕', '🌮', '🍣', '🍜', '🍩', '🍦', '🍷', '🍹', '🧋'],
  activities: ['🎳', '🎨', '🎤', '🧗‍♀️', '🛶', '🎭', '🎲', '🎯', '🧘', '🕹️'],
  transport: ['🚲', '🛵', '🚗', '🚂', '🚁', '🚤', '✈️', '🛴', '🚎', '🛫'],
  places: ['🏖', '🏔', '🌃', '🛍', '🏞', '🎡', '🏕', '🏛', '🏙', '🏟'],
  nature: ['🌅', '🌲', '🌌', '🌧', '🌊', '🌸', '🍁', '⛰', '🍃', '🌴'],
  sports: ['⚽', '🏀', '🏓', '🏸', '🎮', '♟', '🧩', '🪀', '🎯', '🛼'],
  romantic: ['💕', '🌹', '🎶', '💌', '🕯', '💘', '😍', '😘', '💑', '💞'],
  wildcard: ['🚀', '👽', '🎩', '🧸', '🐉', '🐬', '🎈', '🤹', '🔮', '💡'],
};

const emojiDescriptions: { [key: string]: string } = {
  '🍔': 'grabbing some juicy burgers', '🍕': 'sharing a delicious pizza', '🌮': 'feasting on tasty tacos', '🍣': 'enjoying some fresh sushi', '🍜': 'slurping down warm noodles', '🍩': 'treating yourselves to donuts', '🍦': 'getting some creamy ice cream', '🍷': 'sipping on fine wine', '🍹': 'enjoying some fun cocktails', '🧋': 'drinking some refreshing boba tea',
  '🎳': 'going for a round of bowling', '🎨': 'getting creative with some painting', '🎤': 'singing your hearts out at karaoke', '🧗‍♀️': 'tackling a rock climbing wall', '🛶': 'paddling down a lazy river', '🎭': 'catching a captivating play', '🎲': 'getting competitive with board games', '🧘': 'finding your zen with some yoga', '🕹️': 'hitting up a retro arcade',
  '🚲': 'going for a scenic bike ride', '🛵': 'zipping around town on a scooter', '🚗': 'taking a spontaneous road trip', '🚂': 'enjoying a relaxing train journey', '🚁': 'seeing the sights from a helicopter', '🚤': 'cruising on the water in a speedboat', '✈️': 'jetting off to a surprise destination', '🛴': 'exploring the city on electric scooters', '🚎': 'taking a classic trolley tour', '🛫': 'flying away for an adventure',
  '🏖': 'relaxing on a sandy beach', '🏔': 'exploring a majestic mountain', '🌃': 'wandering through the city at night', '🛍': 'going on a shopping spree', '🏞': 'hiking through a beautiful national park', '🎡': 'riding a giant ferris wheel', '🏕': 'camping out under the stars', '🏛': 'visiting an inspiring museum', '🏙': 'exploring a bustling downtown', '🏟': 'catching a game at a stadium',
  '🌅': 'watching a beautiful sunrise together', '🌲': 'taking a peaceful walk in the forest', '🌌': 'stargazing out in the countryside', '🌧': 'cozying up on a rainy day', '🌊': 'listening to the ocean waves', '🌸': 'strolling among cherry blossoms', '🍁': 'enjoying a crisp autumn day', '⛰': 'hiking up a scenic mountain', '🍃': 'relaxing in a green meadow', '🌴': 'chilling under shady palm trees',
  '⚽': 'playing a friendly game of soccer', '🏀': 'shooting some hoops at the park', '🏓': 'having a fast-paced game of ping pong', '🏸': 'a lighthearted game of badminton', '🎮': 'having a competitive video game marathon', '♟': 'challenging each other to a game of chess', '🧩': 'solving a difficult puzzle together', '🪀': 'mastering some yo-yo tricks', '🎯': 'hitting the bullseye with some darts', '🛼': 'gliding around at a roller rink',
  '💕': 'doing something sweet you both love, just because', '🌹': 'surprising each other with a single, perfect rose', '🎶': 'creating a shared playlist of your favorite songs', '💌': 'writing and exchanging heartfelt love letters to read aloud', '🕯': 'setting the mood with candlelight', '💘': 'recreating your first date to feel that initial spark again', '😍': "playing a game of staring into each other's eyes and sharing what you love about each other", '😘': 'finding a scenic, private spot for a memorable kiss', '💑': 'doing a classic couple photoshoot, just for fun', '💞': 'learning a simple partner dance together from a youtube video',
  '🚀': 'blasting off on an adventure', '👽': 'going on an out-of-this-world adventure', '🎩': 'enjoying a fancy, top-hat-worthy evening', '🧸': 'building a cozy pillow fort for a movie night', '🐉': 'going on a legendary quest', '🐬': 'visiting an aquarium to watch the graceful dolphins', '🎈': 'writing happy memories on balloons and letting them go', '🤹': 'running away to the circus', '🔮': 'getting your palms read or doing a tarot card reading together', '💡': 'brainstorming a fun, creative project to start together',
};

function buildSentence(phrases: string[]): string {
  if (phrases.length === 0) return 'A mysterious adventure awaits...';
  
  const formattedPhrases = [...phrases];
  formattedPhrases[0] = formattedPhrases[0].charAt(0).toUpperCase() + formattedPhrases[0].slice(1);

  if (formattedPhrases.length === 1) return `${formattedPhrases[0]}.`;

  if (formattedPhrases.length === 2) {
      return `${formattedPhrases[0]} and ${formattedPhrases[1]}.`
  }

  const allButLast = formattedPhrases.slice(0, -1);
  const last = formattedPhrases[formattedPhrases.length - 1];
  
  const sentence = `${allButLast.join(', ')}, and ${last}.`;

  return sentence;
}
  

export function generateDateIdea(count: number): { emojis: string; description: string } {
    let pool = emojiPool;

    if (count === 3) {
        const quickDatePool = JSON.parse(JSON.stringify(emojiPool));
        quickDatePool.transport = ['🚲', '🛵', '🚗', '🛴', '🚎'];
        pool = quickDatePool;
    }

    const categories = Object.keys(pool);
    const shuffledCategories = categories.sort(() => 0.5 - Math.random());
    const selectedCategories = shuffledCategories.slice(0, count);

    const selectedEmojis: string[] = [];
    const selectedPhrases: string[] = [];

    selectedCategories.forEach(category => {
        const emojiList = pool[category as keyof typeof pool];
        const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
        selectedEmojis.push(randomEmoji);
        if (emojiDescriptions[randomEmoji]) {
            selectedPhrases.push(emojiDescriptions[randomEmoji]);
        }
    });

    return {
        emojis: selectedEmojis.join(''),
        description: buildSentence(selectedPhrases),
    };
} 