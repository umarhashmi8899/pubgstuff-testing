'use client';

import Header from '@/components/landing/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Check, Settings, Info, FileText, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

export default function LetterASparkBoltLogoPage() {
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
                  <CardTitle className="text-3xl font-bold font-headline">Letter A Logo Spark Bolt Logo Design Flash Logo</CardTitle>
                  <p className="text-lg text-muted-foreground">Creative and Premium Logo Design for Energy Business Companies</p>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video relative rounded-lg overflow-hidden border">
                         <Image src="https://i.postimg.cc/3JDgbmrC/4.jpg" alt="Letter A Logo Spark Bolt Logo Design Flash Logo" fill className="object-cover" data-ai-hint="letter a spark bolt lightning logo design" />
                    </div>
                    <div className="mt-6 prose prose-gray max-w-none">
                        <h3 className="font-semibold font-headline">Overview</h3>
                        <p>Letter A Logo, Spark Bolt Logo Design, Flash Logo, Lightening Logo, Fashion Logo, Vector Icon Symbol Silhouette Illustration brand identity Use social media website marketing agency Business company, its a creative and cool icon. It is ready to print. Ready to use. They are fully editable and scalable. Improve your visibility. Get a professional and effective logo! When you purchase this logo please give me your 5 Star feedback!!</p>
                        
                        <h4 className="font-semibold font-headline mt-6">Logo Template Features:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>100% Vector logo</li>
                            <li>Fully Resizable</li>
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
                      "Letter A Logo Spark Bolt Design",
                      "Creative and Premium Design",
                      "Multifunctional for Energy Business",
                      "Ready to Print", 
                      "100% Vector File Fully Editable",
                      "Easy to Edit Text/Fonts and Colors",
                      "Future Support",
                      "Lightning Logo Design",
                      "Fashion Logo Style",
                      "Vector Icon Symbol",
                      "Brand Identity Ready",
                      "Marketing Agency Compatible"
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
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold font-headline">Download</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full">
                    <a href="https://www.mediafire.com/file/ggqhqhqhqhqhqhq/Letter_A_Logo_Spark_Bolt.zip/file" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Free download • No registration required
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold font-headline">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Adobe Illustrator CS6 or higher",
                      "Vector editing software", 
                      "Basic design knowledge"
                    ].map(requirement => (
                      <li key={requirement} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold font-headline">Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm">
                    {[
                      "Download the ZIP file",
                      "Extract all files",
                      "Open in Adobe Illustrator", 
                      "Customize colors and text"
                    ].map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium shrink-0">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold font-headline">Product Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Category:</dt>
                      <dd className="font-medium">Graphics / Logos</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Released:</dt>
                      <dd className="font-medium">6 January 2025</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Updated:</dt>
                      <dd className="font-medium">{currentDate}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Tags:</dt>
                      <dd className="font-medium">Letter, A, Logo</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}