import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Users, BookOpen, Calendar } from "lucide-react";

export default function Community() {
  const discussions = [
    { title: "Best practices for testing XSS vulnerabilities", author: "Sarah J.", replies: 24, category: "Discussion", time: "2h ago" },
    { title: "New critical vulnerability found in popular framework", author: "Mike C.", replies: 45, category: "Alert", time: "4h ago" },
    { title: "How to write effective bug reports?", author: "Emma D.", replies: 18, category: "Question", time: "1d ago" },
    { title: "Upcoming cybersecurity conference", author: "Admin", replies: 67, category: "Event", time: "2d ago" },
  ];

  const upcomingEvents = [
    { title: "Bug Bounty Webinar: Advanced Techniques", date: "Mar 15, 2025", attendees: 234 },
    { title: "Community Q&A with Top Researchers", date: "Mar 20, 2025", attendees: 156 },
    { title: "Virtual CTF Competition", date: "Mar 25, 2025", attendees: 489 },
  ];

  const getCategoryBadge = (category: string) => {
    const colors: Record<string, string> = {
      Discussion: "bg-primary/10 text-primary",
      Alert: "bg-destructive/10 text-destructive",
      Question: "bg-warning/10 text-warning",
      Event: "bg-success/10 text-success",
    };
    return <Badge className={colors[category] || ""}>{category}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Community</h1>
        <p className="text-muted-foreground">Connect with fellow security researchers and stay updated.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">10,247</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,523</p>
                <p className="text-sm text-muted-foreground">Discussions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">342</p>
                <p className="text-sm text-muted-foreground">Resources</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Discussions</CardTitle>
              <Button>New Discussion</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {discussions.map((discussion, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {discussion.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryBadge(discussion.category)}
                      <span className="text-sm text-muted-foreground">{discussion.time}</span>
                    </div>
                    <h3 className="font-semibold mb-1">{discussion.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {discussion.replies} replies
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Discussions
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.attendees}
                    </span>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    Register
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
