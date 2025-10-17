import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Users, 
  FileText, 
  DollarSign, 
  Calendar, 
  Clock, 
  Shield, 
  Target,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Award
} from "lucide-react";

export default function BountyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in production this would come from an API based on the ID
  const bounty = {
    id: "BNT-001",
    title: "XSS Vulnerability in Authentication",
    company: "TechCorp",
    description: "We are looking for security researchers to help identify Cross-Site Scripting (XSS) vulnerabilities in our authentication system. This is a critical component of our platform and we want to ensure it's secure against all forms of XSS attacks including reflected, stored, and DOM-based XSS.",
    severity: "critical",
    status: "active",
    reward: "$5,000",
    minReward: "$2,500",
    maxReward: "$10,000",
    deadline: "2024-12-31",
    createdDate: "2024-09-15",
    category: "Web Application",
    totalSubmissions: 12,
    activeResearchers: 45,
    acceptedSubmissions: 3,
    pendingSubmissions: 5,
    rejectedSubmissions: 4,
    averageResponseTime: "2.5 days",
    scope: [
      "Authentication pages (/login, /register, /forgot-password)",
      "User profile and settings pages",
      "Password reset functionality",
      "OAuth integration endpoints",
      "Two-factor authentication flow"
    ],
    outOfScope: [
      "Third-party authentication providers (Google, GitHub, etc.)",
      "Social engineering attacks",
      "Denial of Service (DoS) attacks",
      "Physical security issues",
      "Issues in third-party libraries (must be exploitable in our context)"
    ],
    requirements: [
      "Provide clear reproduction steps",
      "Include proof of concept (screenshots or video)",
      "Demonstrate the security impact",
      "Only test on designated test environments",
      "Do not access, modify, or delete user data"
    ],
    rewardTiers: [
      { severity: "Critical", amount: "$7,500 - $10,000", description: "Complete authentication bypass or account takeover" },
      { severity: "High", amount: "$3,500 - $7,500", description: "XSS leading to credential theft" },
      { severity: "Medium", amount: "$2,500 - $3,500", description: "Stored XSS with limited impact" },
      { severity: "Low", amount: "$1,000 - $2,500", description: "Reflected XSS requiring user interaction" }
    ],
    topResearchers: [
      { name: "Sarah Johnson", submissions: 3, accepted: 2, earned: "$12,500" },
      { name: "Mike Chen", submissions: 2, accepted: 1, earned: "$5,000" },
      { name: "Emily Rodriguez", submissions: 4, accepted: 1, earned: "$7,500" }
    ]
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>;
      case "high":
        return <Badge className="bg-warning text-warning-foreground">High</Badge>;
      case "medium":
        return <Badge className="bg-secondary text-secondary-foreground">Medium</Badge>;
      default:
        return <Badge className="bg-muted text-muted-foreground">Low</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "closed":
        return <Badge variant="secondary">Closed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const acceptanceRate = ((bounty.acceptedSubmissions / bounty.totalSubmissions) * 100).toFixed(0);
  const daysRemaining = Math.floor((new Date(bounty.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-muted-foreground">{bounty.id}</span>
              {getSeverityBadge(bounty.severity)}
              {getStatusBadge(bounty.status)}
            </div>
            <h1 className="text-3xl font-bold mb-2">{bounty.title}</h1>
            <p className="text-muted-foreground">{bounty.company}</p>
          </div>
          <Button size="lg" className="gap-2">
            <Target className="h-4 w-4" />
            Submit Report
          </Button>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Max Reward</p>
                <p className="text-2xl font-bold text-primary">{bounty.maxReward}</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Researchers</p>
                <p className="text-2xl font-bold">{bounty.activeResearchers}</p>
              </div>
              <Users className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Submissions</p>
                <p className="text-2xl font-bold">{bounty.totalSubmissions}</p>
              </div>
              <FileText className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Days Remaining</p>
                <p className="text-2xl font-bold">{daysRemaining}</p>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress & Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Acceptance Rate</p>
              <CheckCircle className="h-4 w-4 text-success" />
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{acceptanceRate}%</p>
                <p className="text-sm text-muted-foreground">
                  {bounty.acceptedSubmissions} of {bounty.totalSubmissions}
                </p>
              </div>
              <Progress value={parseInt(acceptanceRate)} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Pending Review</p>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">{bounty.pendingSubmissions}</p>
              <p className="text-sm text-muted-foreground">
                Avg. response: {bounty.averageResponseTime}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Category</p>
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-bold">{bounty.category}</p>
              <p className="text-sm text-muted-foreground">
                Created {new Date(bounty.createdDate).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="scope">Scope & Rules</TabsTrigger>
          <TabsTrigger value="rewards">Reward Tiers</TabsTrigger>
          <TabsTrigger value="researchers">Top Researchers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{bounty.description}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Start Date</span>
                  <span className="font-medium">{new Date(bounty.createdDate).toLocaleDateString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Deadline</span>
                  <span className="font-medium">{new Date(bounty.deadline).toLocaleDateString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Days Remaining</span>
                  <Badge variant={daysRemaining < 7 ? "destructive" : "secondary"}>
                    {daysRemaining} days
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Submission Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Submissions</span>
                  <span className="font-medium">{bounty.totalSubmissions}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Accepted</span>
                  <Badge className="bg-success text-success-foreground">{bounty.acceptedSubmissions}</Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Pending</span>
                  <Badge variant="secondary">{bounty.pendingSubmissions}</Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rejected</span>
                  <Badge variant="destructive">{bounty.rejectedSubmissions}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scope" className="space-y-6 mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-success flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                In Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {bounty.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Out of Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {bounty.outOfScope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {bounty.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4 mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Reward Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bounty.rewardTiers.map((tier, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getSeverityBadge(tier.severity.toLowerCase())}
                        <span className="font-semibold">{tier.severity}</span>
                      </div>
                      <span className="text-lg font-bold text-primary">{tier.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="researchers" className="space-y-4 mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bounty.topResearchers.map((researcher, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                        #{idx + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{researcher.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {researcher.submissions} submissions • {researcher.accepted} accepted
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{researcher.earned}</p>
                      <p className="text-xs text-muted-foreground">Total earned</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
