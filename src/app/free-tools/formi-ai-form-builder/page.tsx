'use client';

import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Check, Settings, Info, FileText, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function FormiAIFormBuilderPage() {
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
                  <CardTitle className="text-3xl font-bold font-headline">Formi - AI Form Builder</CardTitle>
                  <p className="text-lg text-muted-foreground">Build Any Form, Power Any Idea—AI at Your Fingertips.</p>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video relative rounded-lg overflow-hidden border">
                         <Image src="https://i.postimg.cc/HLWdj0Vp/1.jpg" alt="Formi AI Form Builder" fill className="object-cover" data-ai-hint="ai form builder interface" />
                    </div>
                    <div className="mt-6 prose prose-gray max-w-none">
                        <h3 className="font-semibold font-headline">Overview</h3>
                        <p>Unleash the power of AI with Formi, the ultimate form builder script that lets you create any type of form or AI generator effortlessly. Whether you're building custom AI tools or innovative solutions, Formi empowers you to bring your ideas to life in minutes—no coding required.</p>
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
                      "AI-Powered Form Creation",
                      "Customizable Templates", 
                      "Build Any AI Generator",
                      "User-Friendly Interface",
                      "Responsive Design",
                      "Advanced Customization",
                      "Data Security",
                      "Drag-and-drop functionality",
                      "Logic-based branching",
                      "Conditional questions",
                      "Custom themes",
                      "Mobile & desktop compatible"
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
                            <Link href="https://drive.google.com/file/d/1l_dxVgrko-RL6_ENZJWaX_EHN-XBtgv4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                    <CardContent className="text-sm space-y-2">
                        <div><strong>PHP Version:</strong> 7.4 or higher</div>
                        <div><strong>SQLite:</strong> Enabled (for database functionality)</div>
                        <div><strong>Web Server:</strong> Apache or Nginx (recommended)</div>
                        <div><strong>PHP Extensions:</strong> PDO, JSON, cURL, and OpenSSL</div>
                        <div><strong>Browser Support:</strong> Modern browsers like Chrome, Firefox, Safari, or Edge</div>
                    </CardContent>
                </Card>
                
                <Card className="bg-white">
                     <CardHeader>
                        <CardTitle className="text-lg font-bold font-headline flex items-center gap-2"><FileText className="w-5 h-5"/> Instructions</CardTitle>
                    </CardHeader>
                     <CardContent className="text-sm space-y-2">
                        <p>After installation, you can log in using the following default credentials:</p>
                        <div className="bg-gray-100 p-3 rounded-md">
                            <div><strong>Username:</strong> admin</div>
                            <div><strong>Password:</strong> admin123</div>
                        </div>
                        <p className="text-red-600 font-medium">Important: For security reasons, please change the default password immediately after logging in for the first time.</p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold font-headline flex items-center gap-2"><Info className="w-5 h-5"/> Information</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-3">
                        <div className="flex justify-between">
                            <span className="font-semibold">Category:</span>
                            <span>Scripts & Code / PHP Scripts / AI</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">First release:</span>
                            <span>16 Jan 2025</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">Last update:</span>
                            <span>17 Jan 2025</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">Software version:</span>
                            <span>PHP 7.2+</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">Tags:</span>
                            <span className="text-xs">Responsive Forms, AI Generator, AI Tools, Form Generator, Custom Forms</span>
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