import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BountyCard } from "@/components/BountyCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ActiveBounties() {
  const bounties = [
    { company: "TechCorp", title: "XSS Vulnerability in Authentication", severity: "critical" as const, reward: "$5,000", submissions: 12, deadline: "3 days" },
    { company: "CloudServe", title: "API Rate Limiting Bypass", severity: "high" as const, reward: "$3,500", submissions: 8, deadline: "5 days" },
    { company: "DataFlow", title: "SQL Injection in User Dashboard", severity: "critical" as const, reward: "$4,800", submissions: 15, deadline: "2 days" },
    { company: "SecureBank", title: "CSRF Token Validation Issue", severity: "medium" as const, reward: "$2,000", submissions: 6, deadline: "7 days" },
    { company: "FinTech Inc", title: "Authentication Bypass in Mobile App", severity: "critical" as const, reward: "$6,000", submissions: 20, deadline: "4 days" },
    { company: "WebStore", title: "Price Manipulation in Checkout", severity: "high" as const, reward: "$4,200", submissions: 11, deadline: "6 days" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Active Bounties</h1>
        <p className="text-muted-foreground">Browse and participate in ongoing bug bounty programs.</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search bounties..." className="pl-10" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="all">All Bounties</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="high">High Priority</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>All Active Bounties ({bounties.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bounties.map((bounty, index) => (
                <BountyCard key={index} {...bounty} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="critical" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Critical Severity Bounties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bounties.filter(b => b.severity === "critical").map((bounty, index) => (
                <BountyCard key={index} {...bounty} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="high" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>High Priority Bounties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bounties.filter(b => b.severity === "high").map((bounty, index) => (
                <BountyCard key={index} {...bounty} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medium" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Medium Priority Bounties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bounties.filter(b => b.severity === "medium").map((bounty, index) => (
                <BountyCard key={index} {...bounty} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
