import Image from 'next/image';

const galleryItems = [
  { src: '/placeholder-1.jpg', emojis: '🌳🧺☀️', user: '@adventureCouple' },
  { src: '/placeholder-2.jpg', emojis: '🎨🍷🧀', user: '@artsyFartsy' },
  { src: '/placeholder-3.jpg', emojis: '🎤🎶🍻', user: '@karaokeKing' },
  { src: '/placeholder-4.jpg', emojis: '🚲🌊🍦', user: '@beachBums' },
  { src: '/placeholder-5.jpg', emojis: '🌮🎬🛋️', user: '@cozyNights' },
  { src: '/placeholder-6.jpg', emojis: '🍣🍶🌃', user: '@cityLovers' },
];

export function UgcGallery() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Dates Our Community Loves</h2>
        <p className="text-center text-muted-foreground mb-12">Real dates, real fun. Get inspired!</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <Image
                src={`https://picsum.photos/seed/${index+1}/600/600`}
                alt={`User-submitted photo for emoji date ${item.emojis}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-3xl" role="img" aria-label="date-emojis">{item.emojis}</div>
                <p className="text-white font-semibold mt-2">{item.user}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="text-pink-500 hover:text-pink-600 font-bold">
                Share Your Date & Get Featured! #emojidates
            </a>
        </div>
      </div>
    </section>
  );
} 