import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";

export default function Submissions() {
  const submissions = [
    { id: "SUB-001", bounty: "XSS Vulnerability in Authentication", company: "TechCorp", status: "pending", submitted: "2 hours ago", reward: "$5,000" },
    { id: "SUB-002", bounty: "API vulnerability CloudServe", company: "CloudServe", status: "accepted", submitted: "5 hours ago", reward: "$3,500" },
    { id: "SUB-003", bounty: "CSRF issue SecureBank", company: "SecureBank", status: "under_review", submitted: "1 day ago", reward: "$2,000" },
    { id: "SUB-004", bounty: "SQL Injection DataFlow", company: "DataFlow", status: "rejected", submitted: "2 days ago", reward: "$4,800" },
    { id: "SUB-005", bounty: "Authentication Bypass", company: "FinTech Inc", status: "accepted", submitted: "3 days ago", reward: "$6,000" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="gap-1"><Clock className="h-3 w-3" /> Pending</Badge>;
      case "accepted":
        return <Badge className="gap-1 bg-success text-success-foreground"><CheckCircle className="h-3 w-3" /> Accepted</Badge>;
      case "under_review":
        return <Badge variant="secondary" className="gap-1"><FileText className="h-3 w-3" /> Under Review</Badge>;
      case "rejected":
        return <Badge variant="destructive" className="gap-1"><XCircle className="h-3 w-3" /> Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Submissions</h1>
        <p className="text-muted-foreground">Track the status of your bug bounty submissions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Total Submissions</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-success">5</p>
              <p className="text-sm text-muted-foreground">Accepted</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-warning">4</p>
              <p className="text-sm text-muted-foreground">Pending Review</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-muted-foreground">3</p>
              <p className="text-sm text-muted-foreground">Rejected</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-muted-foreground">{submission.id}</span>
                    {getStatusBadge(submission.status)}
                  </div>
                  <h3 className="font-semibold mb-1">{submission.bounty}</h3>
                  <p className="text-sm text-muted-foreground">{submission.company} • {submission.submitted}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{submission.reward}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
