'use client';

import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Check, Settings, Info, FileText, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function BusinessFinanceLogoPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-28 md:pt-32">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold font-headline">Business Finance logo</CardTitle>
                  <p className="text-lg text-muted-foreground">Cooperation Increases Business Partner Logo Vector Icon Illustration</p>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video relative rounded-lg overflow-hidden border">
                         <Image src="https://i.postimg.cc/zfh6zVkg/3.jpg" alt="Business Finance logo" fill className="object-cover" data-ai-hint="business finance logo vector" />
                    </div>
                    <div className="mt-6 prose prose-gray max-w-none">
                        <h3 className="font-semibold font-headline">Overview</h3>
                        <p>This professional Business Finance logo template is designed to represent cooperation and business partnerships. The vector-based design ensures scalability and versatility for all your branding needs.</p>
                        <p>Perfect for financial institutions, consulting firms, investment companies, and any business looking to convey trust, growth, and professional excellence. The logo combines modern design elements with classic business symbolism.</p>
                        
                        <h4 className="font-semibold font-headline mt-6">Logo Template Features:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>100% Vector logo</li>
                            <li>Resizable</li>
                            <li>Color & Text are Editable</li>
                        </ul>
                    </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-headline">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {[
                      "100% Vector Design",
                      "Fully Resizable",
                      "Editable Colors",
                      "Editable Text", 
                      "AI Version 11 (CS1)",
                      "Professional Quality",
                      "Modern Design",
                      "Business Focused",
                      "Partnership Theme",
                      "Finance Industry Ready",
                      "Corporate Branding",
                      "Marketing Ready"
                    ].map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-white rounded-full bg-black p-1 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky top-28 space-y-6">
                <Card className="bg-white">
                    <CardContent className="p-6">
                        <Button asChild size="lg" className="w-full hover-shimmer-button">
                            <Link href="https://drive.google.com/file/d/1_MDffyDfKeQa86HBFbcdA37JXOO1-4gj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-5 w-5" />
                                Download Now
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                       <div className="flex items-start gap-3">
                           <AlertTriangle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                           <p className="text-xs text-green-800">This item is one of the free files of the week. You are able to download this item for free for a limited time. Updates and support are only available if you purchase this item.</p>
                       </div>
                    </CardContent>
                </Card>
                
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold font-headline flex items-center gap-2"><Settings className="w-5 h-5"/> Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">Adobe Illustrator CS1 or higher. Vector editing software that supports .ai and .eps file formats.</p>
                    </CardContent>
                </Card>
                
                <Card className="bg-white">
                     <CardHeader>
                        <CardTitle className="text-lg font-bold font-headline flex items-center gap-2"><FileText className="w-5 h-5"/> Instructions</CardTitle>
                    </CardHeader>
                     <CardContent className="space-y-3">
                        <div className="text-sm space-y-2">
                            <p><strong>Files Provided:</strong></p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>AI version 11 (CS1)</li>
                                <li>.eps format</li>
                                <li>.ai format</li>
                            </ul>
                            <p className="mt-3"><strong>Usage:</strong> Open in Adobe Illustrator, customize colors and text as needed, then export in your desired format.</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold font-headline flex items-center gap-2"><Info className="w-5 h-5"/> Information</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-3">
                        <div className="flex justify-between">
                            <span className="font-semibold">Category:</span>
                            <span>Graphics / Logos / Marketing</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">First release:</span>
                            <span>19 Jan 2025</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">Last update:</span>
                            <span>19 Jan 2025</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">Files included:</span>
                            <span>.eps, .ai</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}