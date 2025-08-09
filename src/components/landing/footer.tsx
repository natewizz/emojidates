import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold">EmojiDates 😻</h3>
            <p className="text-muted-foreground mt-2">Spontaneity, simplified.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook /></a>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 mt-4 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 mt-4 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            <div>
                <h4 className="font-semibold">Get Weekly Dates</h4>
                <p className="text-muted-foreground mt-4">Join our newsletter for the best user-submitted dates.</p>
                <div className="flex mt-2">
                    <Input placeholder="you@example.com" className="rounded-r-none" />
                    <Button className="rounded-l-none">Subscribe</Button>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EmojiDates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 