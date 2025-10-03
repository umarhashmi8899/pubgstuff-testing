"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Gift, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let mouseY = 0;
    let isMouseTracked = false;

    const handleMouseMove = (event: MouseEvent) => {
      mouseY = event.clientY;
      isMouseTracked = true;
    };

    const handleMouseLeave = (event: MouseEvent) => {
      // Only trigger if:
      // 1. Mouse was being tracked (user was active)
      // 2. Mouse is leaving from top of viewport (exit intent)
      // 3. Popup hasn't been shown before
      // 4. Mouse is actually leaving the document (relatedTarget is null)
      if (
        isMouseTracked && 
        mouseY <= 50 && 
        event.clientY <= 0 && 
        event.relatedTarget === null && 
        sessionStorage.getItem('exitIntentShown') !== 'true'
      ) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add event listeners to document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    // Placeholder logic
    setTimeout(() => {
        toast({ title: "Subscription Successful!", description: "You're on the list for exclusive deals." });
        setIsOpen(false);
        setLoading(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <Gift className="h-10 w-10 text-primary" />
                    </div>
                </div>
              <h2 className="font-headline text-2xl font-bold text-gray-900">Wait, Don't Go!</h2>
              <p className="mt-2 text-gray-600">
                Subscribe to our newsletter and be the first to know about huge discounts and exclusive offers.
              </p>

              <form onSubmit={handleSubscription} className="mt-6 flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    className="pl-10 h-11"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <Button type="submit" className="hover-shimmer-button h-11" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Subscribing...' : 'Get Offers'}
                </Button>
              </form>
              <button onClick={() => setIsOpen(false)} className="mt-4 text-xs text-gray-500 hover:text-gray-700">
                No, thanks. I don't like discounts.
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
