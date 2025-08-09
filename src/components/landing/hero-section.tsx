'use client';

import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check, Share2 } from 'lucide-react';

const dateTypes = {
  '3': { name: 'Quick Date' },
  '4': { name: 'Standard Date' },
  '5': { name: 'Adventure Date' },
} as const;

type DateLength = keyof typeof dateTypes;

export function HeroSection() {
  const [dateLength, setDateLength] = useState<DateLength>('3');
  const [currentEmojis, setCurrentEmojis] = useState('');
  const [currentDescription, setCurrentDescription] = useState('Your next adventure starts here...');
  const [currentDateId, setCurrentDateId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleGenerate = useCallback(async () => {
    setErrorMsg('');
    setIsCopied(false);
    setShareUrl('');
    setCurrentDateId(null);
    try {
      const res = await fetch('/api/generate-date', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dateLength, source: 'button' }),
      });
      if (res.status === 429) {
        setErrorMsg('Whoa! Too many requests. Please wait a minute and try again.');
        return;
      }
      if (!res.ok) {
        setErrorMsg('Something went wrong. Please try again.');
        return;
      }
      const data = await res.json();
      setCurrentEmojis(data.emojis);
      setCurrentDescription(data.description);
      setCurrentDateId(data.id);
      setShareUrl(`${window.location.origin}/date/${data.id}`);
    } catch {
      setErrorMsg('Network error. Please try again.');
    }
  }, [dateLength]);

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  const handleCopy = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-900 dark:to-slate-800">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-800 dark:text-gray-100">
          Unforgettable Dates, One Emoji at a Time <span role="img" aria-label="couple-with-heart">💕</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Stop wondering what to do. Let our emoji generator plan your next perfect adventure!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Select value={dateLength} onValueChange={(value) => setDateLength(value as DateLength)}>
            <SelectTrigger className="w-full sm:w-[200px] h-16 text-lg rounded-full bg-white/50 dark:text-gray-100 dark:bg-slate-800/50 border-white/50 dark:border-white/20 backdrop-blur-sm">
              <SelectValue placeholder="Select a date type" />
            </SelectTrigger>
            <SelectContent className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm border-white/50 dark:border-white/20">
              {(Object.keys(dateTypes) as DateLength[]).map((key) => (
                <SelectItem key={key} value={key} className="text-lg dark:text-gray-100 dark:focus:bg-slate-700">
                  {dateTypes[key].name} ({key} emojis)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            onClick={handleGenerate}
            className="py-8 px-12 text-2xl font-bold rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 transform hover:scale-105 shadow-lg h-16"
          >
            Generate My Date
          </Button>
        </div>

        {errorMsg && (
          <div className="mt-4 text-red-500 dark:text-red-400 font-semibold">{errorMsg}</div>
        )}

        {currentEmojis && (
          <div className="mt-12 p-8 bg-white/80 dark:bg-black/60 rounded-2xl shadow-xl max-w-lg mx-auto backdrop-blur-sm border border-white/50 dark:border-white/10">
            <div className="text-6xl md:text-7xl tracking-widest text-gray-900 dark:text-gray-100" role="img" aria-label="date-emojis">
              {currentEmojis}
            </div>
            
            <div className="my-6 border-t border-gray-200 dark:border-gray-700"></div>
            
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Here&apos;s an idea to get you started:
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 italic">
                &ldquo;{currentDescription}&rdquo;
              </p>
            </div>

            {currentDateId && (
              <div className="mt-8">
                <Button onClick={handleCopy} className="w-full bg-pink-500 hover:bg-pink-600 text-white dark:bg-pink-600 dark:hover:bg-pink-700" size="lg">
                  {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Share2 className="mr-2 h-4 w-4" />}
                  {isCopied ? 'Copied!' : 'Copy & Share'}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
} 