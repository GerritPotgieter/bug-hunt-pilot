import { DollarSign, Target, TrendingUp, Award } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { BountyCard } from "@/components/BountyCard";
import { LeaderboardEntry } from "@/components/LeaderboardEntry";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const stats = [
    { title: "Total Earnings", value: "$24,500", change: "+12.5%", icon: DollarSign, trend: "up" as const },
    { title: "Active Bounties", value: "18", change: "+3", icon: Target, trend: "up" as const },
    { title: "Success Rate", value: "87%", change: "+5%", icon: TrendingUp, trend: "up" as const },
    { title: "Global Rank", value: "#47", change: "↑2", icon: Award, trend: "up" as const },
  ];

  const activeBounties = [
    { company: "TechCorp", title: "XSS Vulnerability in Authentication", severity: "critical" as const, reward: "$5,000", submissions: 12, deadline: "3 days" },
    { company: "CloudServe", title: "API Rate Limiting Bypass", severity: "high" as const, reward: "$3,500", submissions: 8, deadline: "5 days" },
    { company: "DataFlow", title: "SQL Injection in User Dashboard", severity: "critical" as const, reward: "$4,800", submissions: 15, deadline: "2 days" },
    { company: "SecureBank", title: "CSRF Token Validation Issue", severity: "medium" as const, reward: "$2,000", submissions: 6, deadline: "7 days" },
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Johnson", points: 45800, bounties: 156 },
    { rank: 2, name: "Mike Chen", points: 42300, bounties: 142 },
    { rank: 3, name: "Emma Davis", points: 39500, bounties: 128 },
    { rank: 4, name: "Alex Chen", points: 35200, bounties: 115, isCurrentUser: true },
    { rank: 5, name: "John Smith", points: 32100, bounties: 98 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex 👋</h1>
        <p className="text-muted-foreground">Here's what's happening with your bug hunting today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Bounties</CardTitle>
                <Tabs defaultValue="all" className="w-auto">
                  <TabsList className="bg-muted">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="critical">Critical</TabsTrigger>
                    <TabsTrigger value="high">High</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeBounties.map((bounty, index) => (
                <BountyCard key={index} {...bounty} />
              ))}
              <Button variant="outline" className="w-full border-border hover:bg-accent">
                View All Bounties
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Top Hunters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboard.map((entry, index) => (
                <LeaderboardEntry key={index} {...entry} />
              ))}
              <Button variant="outline" className="w-full mt-4 border-border hover:bg-accent">
                View Full Leaderboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Submitted report", target: "XSS in TechCorp login", time: "2 hours ago", status: "pending" },
              { action: "Bounty accepted", target: "API vulnerability CloudServe", time: "5 hours ago", status: "success" },
              { action: "Comment received", target: "CSRF issue SecureBank", time: "1 day ago", status: "info" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.target}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
