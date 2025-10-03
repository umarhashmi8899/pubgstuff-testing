'use client';

import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Check, Settings, Info, FileText, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function ImasterPatientRecordsPage() {
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
                  <CardTitle className="text-3xl font-bold font-headline">Imaster Patient Records Management System</CardTitle>
                  <p className="text-lg text-muted-foreground">A comprehensive and efficient healthcare solution designed to streamline patient data management.</p>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video relative rounded-lg overflow-hidden border">
                         <Image src="https://i.postimg.cc/63Y7y5W7/2.jpg" alt="Imaster Patient Records Management System" fill className="object-cover" data-ai-hint="patient records healthcare management" />
                    </div>
                    <div className="mt-6 prose prose-gray max-w-none">
                        <h3 className="font-semibold font-headline">Overview</h3>
                        <p>The Imaster Patient Records Management System is a modern, user-friendly solution for managing patient information with precision and efficiency. Designed to meet the needs of healthcare providers, the system allows for seamless addition of new patients, capturing detailed health measurements such as blood pressure, temperature, respiratory rate, weight, pulse rate, and height, while maintaining a comprehensive record of their medical history.</p>
                        <p>It enables fast and intuitive search capabilities, ensuring instant access to patient data when needed. Additionally, it supports recording patient complaints and doctor recommendations, making it easy to track treatment progress and updates. With its robust features and streamlined workflows, the system enhances operational efficiency, improves data accuracy, and empowers healthcare professionals to deliver better patient care.</p>
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
                      "Total Patient Population Overview",
                      "Add New Patients",
                      "Vital Signs Measurement",
                      "Comprehensive Patient Data Capture", 
                      "Fast Patient Record Search",
                      "Complaint and Recommendation Logging",
                      "Update Patient Information",
                      "Medical History Tracking",
                      "Doctor Recommendations",
                      "Health Parameters Recording",
                      "Centralized Data Management",
                      "Real-time Updates"
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
                            <Link href="https://drive.google.com/file/d/1Xez6eyuZFkvs-UdmQi78P7gf7Zvvpbbw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                        <p className="text-sm">XAMPP or WAMPP or live Apache server. Download and extract files then import your database and configure db.php according to your details.</p>
                    </CardContent>
                </Card>
                
                <Card className="bg-white">
                     <CardHeader>
                        <CardTitle className="text-lg font-bold font-headline flex items-center gap-2"><FileText className="w-5 h-5"/> Instructions</CardTitle>
                    </CardHeader>
                     <CardContent className="space-y-3">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-sm font-medium text-yellow-800">!!!!!CLOSE FRAME TO TEST LIVE!!!!!</p>
                        </div>
                        <div className="text-sm">
                            <p><strong>Username:</strong> admin</p>
                            <p><strong>Password:</strong> admin</p>
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
                            <span>Scripts & Code / Healthcare</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">First release:</span>
                            <span>{currentDate}</span>
                        </div>
                         <Separator />
                        <div className="flex justify-between">
                            <span className="font-semibold">Last update:</span>
                            <span>{currentDate}</span>
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