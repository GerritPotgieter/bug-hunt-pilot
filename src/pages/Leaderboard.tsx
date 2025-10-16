import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeaderboardEntry } from "@/components/LeaderboardEntry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, Award } from "lucide-react";

export default function Leaderboard() {
  const globalLeaderboard = [
    { rank: 1, name: "Sarah Johnson", points: 45800, bounties: 156 },
    { rank: 2, name: "Mike Chen", points: 42300, bounties: 142 },
    { rank: 3, name: "Emma Davis", points: 39500, bounties: 128 },
    { rank: 4, name: "Alex Chen", points: 35200, bounties: 115, isCurrentUser: true },
    { rank: 5, name: "John Smith", points: 32100, bounties: 98 },
    { rank: 6, name: "Lisa Anderson", points: 29800, bounties: 89 },
    { rank: 7, name: "David Park", points: 27500, bounties: 82 },
    { rank: 8, name: "Maria Garcia", points: 25200, bounties: 75 },
    { rank: 9, name: "James Wilson", points: 23100, bounties: 68 },
    { rank: 10, name: "Anna Lee", points: 21500, bounties: 62 },
  ];

  const monthlyLeaderboard = [
    { rank: 1, name: "Mike Chen", points: 8900, bounties: 24 },
    { rank: 2, name: "Alex Chen", points: 7200, bounties: 19, isCurrentUser: true },
    { rank: 3, name: "Emma Davis", points: 6800, bounties: 17 },
    { rank: 4, name: "Sarah Johnson", points: 6200, bounties: 16 },
    { rank: 5, name: "John Smith", points: 5500, bounties: 14 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-muted-foreground">See how you rank against top security researchers worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">#47</p>
                <p className="text-sm text-muted-foreground">Global Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-success">↑ 12</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">35,200</p>
                <p className="text-sm text-muted-foreground">Total Points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="global">Global Leaderboard</TabsTrigger>
          <TabsTrigger value="monthly">This Month</TabsTrigger>
          <TabsTrigger value="weekly">This Week</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Top 10 Security Researchers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {globalLeaderboard.map((entry) => (
                <LeaderboardEntry key={entry.rank} {...entry} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Monthly Top Performers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {monthlyLeaderboard.map((entry) => (
                <LeaderboardEntry key={entry.rank} {...entry} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Weekly Top Performers</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center text-muted-foreground">
              Weekly leaderboard data will be available here.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
