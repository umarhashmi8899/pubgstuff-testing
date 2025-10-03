// src/app/admin/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Users } from "lucide-react";
import React, { useState } from "react";

// Dummy data for dashboard stats
const dummyStats = {
    totalSubscriptions: 1250,
    newSubscriptions: 150,
    totalSales: 450,
    newSales: 75,
};

export default function AdminDashboardPage() {
    const [stats] = useState(dummyStats);

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Subscriptions
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">+{stats.totalSubscriptions}</div>
                <p className="text-xs text-muted-foreground">
                    +{stats.newSubscriptions} from last month
                </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">+{stats.totalSales}</div>
                <p className="text-xs text-muted-foreground">
                    +{stats.newSales} from last month
                </p>
                </CardContent>
            </Card>
        </div>
    );
}
