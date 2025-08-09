import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

// This function can be uncommented and used with a more robust cache handling strategy
// export const revalidate = 3600; // Revalidate every hour

async function getDateData(id: string) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('dates')
        .select('emojis, description')
        .eq('id', id)
        .single();

    if (error || !data) {
        notFound();
    }

    return data;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const { emojis, description } = await getDateData(id);

  const siteUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';

  const ogImageUrl = `${siteUrl}/api/og?emojis=${encodeURIComponent(emojis)}`;

  return {
    title: `A date idea: ${emojis}`,
    description: `Check out this fun date idea: ${description}`,
    openGraph: {
      title: `Emoji Date Idea: ${emojis}`,
      description: description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `An image showing the emojis: ${emojis}`,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Emoji Date Idea: ${emojis}`,
        description: description,
        images: [ogImageUrl],
    }
  };
}

export default async function DatePage({ params }: Props) {
    const { id } = params;
    const { emojis, description } = await getDateData(id);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-900 dark:to-slate-800 p-4">
            <div className="p-8 bg-white/80 dark:bg-black/60 rounded-2xl shadow-xl max-w-lg mx-auto backdrop-blur-sm border border-white/50 dark:border-white/10 text-center">
                <div className="text-5xl md:text-6xl tracking-widest" role="img" aria-label="date-emojis">
                    {emojis}
                </div>
                <div className="my-6 border-t border-gray-200 dark:border-gray-700"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                    "{description}"
                </p>
            </div>
        </div>
    );
} 