'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Star, Check, Minus, Plus, Share, Heart, Maximize, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import { useCurrency } from '@/hooks/use-currency';
import { Checkbox } from '@/components/ui/checkbox';
import { ProductLayout } from '@/components/product-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { RelatedProducts } from '@/components/related-products';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { useFavorites } from '@/hooks/use-favorites';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/use-auth';

const images = [
    { id: 1, src: 'https://iili.io/KGC6E0X.jpg', alt: 'Main product image', aiHint: 'gaming character cinematic' },
    { id: 2, src: 'https://picsum.photos/1000/1000?random=5', alt: 'Product feature view', aiHint: 'gaming action screenshot' },
    { id: 3, src: 'https://picsum.photos/1000/1000?random=6', alt: 'Product in-game', aiHint: 'futuristic weapon' },
    { id: 4, src: 'https://picsum.photos/1000/1000?random=7', alt: 'Product details', aiHint: 'glowing abstract' },
    { id: 5, src: 'https://picsum.photos/1000/1000?random=8', alt: 'Product usage', aiHint: 'gamer setup' },
];

const features = [
    "100% Safe & Secure",
    "Special Kill Effects",
    "Best Recoil Control",
    "ESP, Skins & Aimbot",
    "Integrated emulator bypass",
    "24/7 Dedicated Support",
    "Aimbot FOV value",
    "Skip Knocked Enemies",
];

const BASE_PRICE = 5;
const EXTRA_PRICE = 5;

const reviews = [
    {
        name: "David Chen",
        avatar: "https://picsum.photos/100/100?random=13",
        aiHint: "man portrait",
        rating: 5,
        comment: "Amazing frozen key! The ESP works perfectly and the aimbot is incredibly smooth. Been using it for weeks without any issues. Highly recommended!"
    },
    {
        name: "Sarah Wilson",
        avatar: "https://picsum.photos/100/100?random=14",
        aiHint: "woman portrait",
        rating: 5,
        comment: "Best value for money! The frozen key gives you all the premium features at an affordable price. The security is top-notch and support is excellent."
    },
    {
        name: "Jake Rodriguez",
        avatar: "https://picsum.photos/100/100?random=15",
        aiHint: "person portrait",
        rating: 4,
        comment: "Great product with solid features. The recoil control is fantastic and the ESP is very accurate. Perfect for casual gaming sessions."
    }
]

export default function SingleProductPage() {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);
    const { formatPrice, currency } = useCurrency();
    const [extras, setExtras] = useState({
        windows: false,
        drivers: false,
        extras: false
    });
    const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
    const { user } = useAuth();
    const { toast } = useToast();
    const { addToCart } = useCart();
    const router = useRouter();
    const { addToFavorites, removeFromFavorites, isFavorited } = useFavorites();
    const [relatedTotal, setRelatedTotal] = React.useState(0);
    const [selectedRelatedProducts, setSelectedRelatedProducts] = React.useState<any[]>([]);

    const product = {
        id: 2,
        name: "Vnhax Frozen Key",
        category: "PC" as "PC",
        price: 5,
        href: "/products/vnhax-frozen-key",
        imageUrl: 'https://iili.io/KGC6E0X.jpg',
        aiHint: 'gaming character cinematic'
    };

    const isProductFavorited = isFavorited(product.id);

    const handleRelatedPriceChange = (priceChange: number) => {
        setRelatedTotal(prev => prev + priceChange);
    };

    const handleBuyNow = () => {
        // Add main product to cart
        addToCart(product, quantity);
        
        // All selected related products are already in cart via RelatedProducts component
        // Just show confirmation and navigate
        const totalItems = 1 + selectedRelatedProducts.length;
        const itemText = totalItems === 1 ? "item" : "items";
        
        toast({
            title: "Added to Cart",
            description: `${totalItems} ${itemText} added to your cart successfully.`,
        });
        router.push('/cart');
    };

    const handleFavoriteClick = () => {
        if (!user) {
            toast({
                title: "Login Required",
                description: "You need to be logged in to favorite products.",
                variant: "destructive",
            });
            return;
        }
        if (isProductFavorited) {
            removeFromFavorites(product.id);
            toast({
                title: "Removed from Favorites",
                description: `Vnhax Frozen Key has been removed from your favorites.`,
            });
        } else {
            addToFavorites(product);
            toast({
                title: "Added to Favorites",
                description: `Vnhax Frozen Key has been added to your favorites.`,
            });
        }
    };
    
    const handleShareClick = () => {
        const productUrl = window.location.href;
        navigator.clipboard.writeText(productUrl)
            .then(() => {
                toast({
                    title: "Link Copied!",
                    description: "Product link has been copied to your clipboard.",
                });
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                toast({
                    title: "Error",
                    description: "Failed to copy the link.",
                    variant: "destructive",
                });
            });
    };

    useEffect(() => {
        const extrasCount = Object.values(extras).filter(Boolean).length;
        const newTotal = (BASE_PRICE * quantity) + (extrasCount * EXTRA_PRICE) + relatedTotal;
        setTotalPrice(newTotal);
    }, [quantity, extras, relatedTotal]);

    const handleExtraChange = (extra: keyof typeof extras) => {
        setExtras(prev => ({...prev, [extra]: !prev[extra]}));
    }
    
    return (
        <ProductLayout>
            <div className="flex min-h-screen flex-col bg-gray-50">
                <Header />
                <main className="flex-1 pt-24 md:pt-32">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-[6fr,5fr] gap-8 md:gap-12 max-w-5xl mx-auto">
                            {/* Image Gallery */}
                            <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-headline mt-1">Vnhax Frozen Key</h1>
                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="flex items-center gap-0.5 text-yellow-500">
                                                <Star className="w-5 h-5 fill-current" />
                                                <Star className="w-5 h-5 fill-current" />
                                                <Star className="w-5 h-5 fill-current" />
                                                <Star className="w-5 h-5 fill-current" />
                                                <Star className="w-5 h-5 fill-current" />
                                            </div>
                                            <p className="text-sm text-gray-600">(4.8/5.0 from 8,500+ ratings)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-black hover:bg-gray-100" onClick={handleShareClick}><Share className="w-5 h-5" /></Button>
                                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-black hover:bg-gray-100" onClick={handleFavoriteClick}>
                                            <Heart className={cn("w-5 h-5", isProductFavorited && "fill-red-500 text-red-500")} />
                                        </Button>
                                    </div>
                                </div>

                                <div className="aspect-square relative rounded-xl overflow-hidden shadow-inner bg-gray-50">
                                    <Image
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        fill
                                        className="object-contain transition-transform duration-300"
                                        data-ai-hint={selectedImage.aiHint}
                                        priority
                                    />
                                    <Button variant="ghost" size="icon" className="absolute top-3 left-3 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-gray-700">
                                        <Maximize className="w-5 h-5"/>
                                    </Button>
                                </div>
                                <div className="mt-4">
                                    <ScrollArea>
                                        <div className="flex items-center gap-2 pb-4">
                                            {images.map((image) => (
                                                <button
                                                    key={image.id}
                                                    onClick={() => setSelectedImage(image)}
                                                    className={cn(
                                                        'aspect-square w-16 sm:w-20 relative rounded-md overflow-hidden border-2 transition-all flex-shrink-0',
                                                        selectedImage.id === image.id ? 'border-primary' : 'border-gray-200 hover:border-primary/50'
                                                    )}
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        className="object-cover"
                                                        data-ai-hint={image.aiHint}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                        <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                </div>
                            </div>

                            {/* Product Configuration */}
                            <div className="flex flex-col">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-3 flex items-start gap-3">
                                            <HeartHandshake className="h-6 w-6 text-blue-600 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="font-semibold">Donation Included!</p>
                                                <p className="mt-1">Price includes a small donation for orphans & the needy. You pay nothing extra.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="border border-gray-200 rounded-lg p-4 mt-4">
                                            <p className="text-2xl font-bold">{formatPrice(totalPrice)}</p>
                                            <p className="text-green-600 font-semibold">{currency === 'PKR' ? 'Rs (Pakistani Rupees)' : '$ (United States Dollar)'}</p>
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-500 mb-2">Add Extra Support ( {formatPrice(EXTRA_PRICE)} each )</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                    <label htmlFor="windows" className="flex items-center space-x-2 border rounded-md p-2 hover:bg-gray-50 cursor-pointer has-[input:checked]:bg-primary/5 has-[input:checked]:border-primary transition-all">
                                                        <Checkbox id="windows" checked={extras.windows} onCheckedChange={() => handleExtraChange('windows')} />
                                                        <span className="text-sm font-medium">Windows</span>
                                                    </label>
                                                    <label htmlFor="drivers" className="flex items-center space-x-2 border rounded-md p-2 hover:bg-gray-50 cursor-pointer has-[input:checked]:bg-primary/5 has-[input:checked]:border-primary transition-all">
                                                        <Checkbox id="drivers" checked={extras.drivers} onCheckedChange={() => handleExtraChange('drivers')} />
                                                        <span className="text-sm font-medium">Drivers</span>
                                                    </label>
                                                    <label htmlFor="extras" className="flex items-center space-x-2 border rounded-md p-2 hover:bg-gray-50 cursor-pointer has-[input:checked]:bg-primary/5 has-[input:checked]:border-primary transition-all">
                                                        <Checkbox id="extras" checked={extras.extras} onCheckedChange={() => handleExtraChange('extras')} />
                                                        <span className="text-sm font-medium">Extras</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4 mt-4">
                                            <ul className="space-y-3">
                                                {features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <Check className="h-5 w-5 text-white rounded-full bg-black p-1 shrink-0 mt-0.5" />
                                                        <span className="text-foreground text-sm sm:text-base">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <div className="flex justify-between items-center gap-4">
                                            <div className="flex items-center border rounded-md p-1">
                                                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-8 w-8"><Minus className="w-4 h-4" /></Button>
                                                <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                                                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)} className="h-8 w-8"><Plus className="w-4 h-4" /></Button>
                                            </div>
                                            <Button size="lg" className="flex-1 hover-shimmer-button bg-black text-white hover:bg-gray-800 rounded-lg" onClick={handleBuyNow}>
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>

                        {/* Tabs Section */}
                        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
                            <Tabs defaultValue="description" className="w-full">
                                <ScrollArea>
                                    <TabsList className="grid w-full grid-cols-4 min-w-[400px]">
                                        <TabsTrigger value="description">Description</TabsTrigger>
                                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                                        <TabsTrigger value="faqs">FAQs</TabsTrigger>
                                        <TabsTrigger value="comparison">Comparison</TabsTrigger>
                                    </TabsList>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                                <TabsContent value="description" className="mt-6 bg-white p-6 md:p-8 rounded-xl border border-gray-200">
                                    <div className="prose prose-gray max-w-none space-y-4">
                                        <div className="bg-[#F5EFFF] p-4 rounded-lg">
                                            <p>Vnhax Frozen Key is an affordable and reliable PUBG Mobile booster designed for players who want premium features without breaking the bank. With over 8,500 satisfied users and a 4.8 rating, this frozen key offers exceptional value for money while maintaining the highest security standards.</p>
                                            <p>Built with the same advanced Antiban protection as our premium products, Vnhax Frozen Key ensures your main account stays completely safe while you enjoy features like Wall ESP, Loot ESP, Aimbot, special kill effects, and recoil control. It includes an integrated emulator bypass for seamless PC gameplay.</p>
                                            <p>Perfect for casual gamers and those new to PUBG Mobile boosters, the Frozen Key provides all essential features at an unbeatable price. Experience the power of professional-grade tools without the premium cost.</p>
                                        </div>
                                        
                                        <div className="bg-[#E5D9F2] p-4 rounded-lg">
                                            <h3 className="font-headline font-bold text-xl mb-4">Key Features:</h3>
                                            <ul className="space-y-2 list-disc pl-5">
                                                <li>100% Safe & Secure – Advanced Antiban technology protects your PUBG Mobile account.</li>
                                                <li>Booster & ESP – Wall ESP and Loot ESP for tactical advantage.</li>
                                                <li>Aimbot & Magic – Enhanced accuracy and gameplay mechanics.</li>
                                                <li>Special Kill Effects – Unique kill messages and visual effects.</li>
                                                <li>Best Recoil Control – Superior weapon stability and control.</li>
                                                <li>Integrated Emulator Bypass – Optimized for PC emulator gameplay.</li>
                                                <li>Budget-Friendly – Premium features at an affordable price point.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-[#CDC1FF] p-4 rounded-lg">
                                            <h3 className="font-headline font-bold text-xl mb-4">Why Choose Vnhax Frozen Key?</h3>
                                            <p>The Vnhax Frozen Key is perfect for players who want to experience premium PUBG Mobile features without the premium price tag. It offers the same security and reliability as our higher-tier products, making it an ideal choice for casual gamers, beginners, or anyone looking for excellent value. With proven Antiban protection and essential gaming features, it's the smart choice for budget-conscious players.</p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="reviews" className="mt-6 bg-white p-6 md:p-8 rounded-xl border border-gray-200">
                                    <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                                    <div className="space-y-6">
                                        {reviews.map((review, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <Avatar className="h-12 w-12">
                                                    <AvatarImage src={review.avatar} alt={review.name} data-ai-hint={review.aiHint} />
                                                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-semibold">{review.name}</h3>
                                                        <div className="flex text-yellow-500">
                                                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 mt-1">{review.comment}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="faqs" className="mt-6 bg-white p-6 md:p-8 rounded-xl border border-gray-200">
                                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Is Vnhax Frozen Key safe to use on my main account?</AccordionTrigger>
                                            <AccordionContent>
                                            Yes, absolutely! Our Frozen Key uses the same advanced Antiban protection as our premium products to ensure your main account's complete security.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>What's the difference between Frozen Key and other versions?</AccordionTrigger>
                                            <AccordionContent>
                                            The Frozen Key offers all essential features at a budget-friendly price. It includes the same core functionality as premium versions but at a more affordable cost, making it perfect for casual gamers.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger>How long does the Frozen Key last?</AccordionTrigger>
                                            <AccordionContent>
                                            The Frozen Key provides excellent longevity and value. Specific duration details are provided with your purchase confirmation and setup instructions.
                                            </AccordionContent>
                                        </AccordionItem>
                                         <AccordionItem value="item-4">
                                            <AccordionTrigger>Do you provide support for Frozen Key users?</AccordionTrigger>
                                            <AccordionContent>
                                            Yes! We provide 24/7 dedicated support for all our products, including the Frozen Key. Our support team is available via Discord and customer service channels.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </TabsContent>
                                <TabsContent value="comparison" className="mt-6 bg-white p-6 md:p-8 rounded-xl border border-gray-200">
                                    <h2 className="text-2xl font-bold mb-6">Product Comparison</h2>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Feature</TableHead>
                                                <TableHead className="text-center">Vnhax Frozen Key</TableHead>
                                                <TableHead className="text-center">Other Budget Tools</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">100% Safe & Secure</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Yes</TableCell>
                                                <TableCell className="text-center text-red-600">No</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Special Kill Effects</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Yes</TableCell>
                                                <TableCell className="text-center text-red-600">No</TableCell>
                                            </TableRow>
                                             <TableRow>
                                                <TableCell className="font-medium">Best Recoil Control</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Yes</TableCell>
                                                <TableCell className="text-center text-yellow-600">Basic</TableCell>
                                            </TableRow>
                                             <TableRow>
                                                <TableCell className="font-medium">ESP, Skins & Aimbot</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Advanced</TableCell>
                                                <TableCell className="text-center text-yellow-600">Limited</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Integrated emulator bypass</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Yes</TableCell>
                                                <TableCell className="text-center text-red-600">No</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">24/7 Dedicated Support</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Yes</TableCell>
                                                <TableCell className="text-center text-red-600">No</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Aimbot FOV value</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Customizable</TableCell>
                                                <TableCell className="text-center text-yellow-600">Fixed</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Skip Knocked Enemies</TableCell>
                                                <TableCell className="text-center text-green-600 font-bold">Yes</TableCell>
                                                <TableCell className="text-center text-red-600">No</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TabsContent>
                            </Tabs>
                        </div>

                        <RelatedProducts 
                            category="pc" 
                            currentProduct="Vnhax Frozen Key" 
                            onPriceChange={handleRelatedPriceChange}
                            onSelectedProductsChange={setSelectedRelatedProducts}
                        />
                        
                    </div>
                </main>
                <Footer />
            </div>
        </ProductLayout>
    );
}