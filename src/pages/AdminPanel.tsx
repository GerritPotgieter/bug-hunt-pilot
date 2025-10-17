import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CreateBountyDialog } from "@/components/CreateBountyDialog";
import { SubmissionDetailsDialog } from "@/components/SubmissionDetailsDialog";
import { Shield, Search, Users, Target, FileText, CheckCircle, Clock, XCircle } from "lucide-react";

export default function AdminPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock data for submissions
  const submissions = [
    {
      id: "SUB-001",
      bountyName: "XSS Vulnerability in Authentication",
      researcher: "Sarah Johnson",
      researcherEmail: "sarah.j@example.com",
      submittedDate: "2024-10-15",
      status: "pending",
      reward: "$5,000",
      severity: "critical",
      description: "I discovered a Cross-Site Scripting vulnerability in the authentication flow that allows attackers to inject malicious scripts into the login page. This could lead to session hijacking and credential theft.",
      exploitsFound: "POST /login HTTP/1.1\nHost: example.com\nContent-Type: application/x-www-form-urlencoded\n\nusername=<script>alert(document.cookie)</script>&password=test\n\nThe script executes and can steal session tokens.",
      reproductionSteps: "1. Navigate to /login\n2. Enter the malicious payload in the username field\n3. Submit the form\n4. Observe the script execution in the response page\n5. Session cookies are now accessible to the attacker",
      impact: "High severity - An attacker could steal user credentials, hijack sessions, and potentially gain unauthorized access to user accounts. This affects all users of the authentication system.",
      images: ["/placeholder.svg", "/placeholder.svg"],
      videos: []
    },
    {
      id: "SUB-002",
      bountyName: "API Rate Limiting Bypass",
      researcher: "Mike Chen",
      researcherEmail: "mike.c@example.com",
      submittedDate: "2024-10-14",
      status: "under_review",
      reward: "$3,500",
      severity: "high",
      description: "Found a way to bypass the API rate limiting by manipulating request headers. This allows unlimited API calls which could lead to resource exhaustion.",
      exploitsFound: "curl -X POST https://api.example.com/endpoint \\\n  -H 'X-Forwarded-For: 192.168.1.1' \\\n  -H 'X-Real-IP: 10.0.0.1' \\\n  --data 'payload'\n\nBy rotating these headers, rate limits are bypassed.",
      reproductionSteps: "1. Make API request with default headers - gets rate limited after 100 requests\n2. Add X-Forwarded-For header with random IP\n3. Continue making requests - no rate limit enforced\n4. Can make unlimited requests by rotating header values",
      impact: "Medium-High severity - Could lead to API abuse, resource exhaustion, and potential denial of service. May also be used to brute force other vulnerabilities.",
      images: ["/placeholder.svg"],
      videos: []
    },
    {
      id: "SUB-003",
      bountyName: "SQL Injection in User Dashboard",
      researcher: "Emily Rodriguez",
      researcherEmail: "emily.r@example.com",
      submittedDate: "2024-10-13",
      status: "accepted",
      reward: "$4,800",
      severity: "critical",
      description: "Critical SQL injection vulnerability in the user dashboard search functionality allows full database access.",
      exploitsFound: "GET /dashboard/search?q=' OR '1'='1' -- HTTP/1.1\n\nReturns all user records from database.\n\nGET /dashboard/search?q=' UNION SELECT username,password,email FROM users -- \n\nExtracts sensitive user data.",
      reproductionSteps: "1. Login to user dashboard\n2. Navigate to search function\n3. Enter payload: ' OR '1'='1' --\n4. Submit search\n5. Database returns all records instead of filtered results\n6. Can use UNION queries to extract any table data",
      impact: "Critical severity - Complete database compromise possible. Attacker can read, modify, or delete any data. All user information including passwords and personal data at risk.",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      videos: []
    },
    {
      id: "SUB-004",
      bountyName: "CSRF Token Validation Issue",
      researcher: "Alex Thompson",
      researcherEmail: "alex.t@example.com",
      submittedDate: "2024-10-12",
      status: "rejected",
      reward: "$2,000",
      severity: "medium",
      description: "CSRF tokens are not properly validated on state-changing operations, allowing cross-site request forgery attacks.",
      exploitsFound: "<form action='https://example.com/api/change-email' method='POST'>\n  <input type='hidden' name='email' value='attacker@evil.com'>\n  <input type='submit' value='Click Here'>\n</form>\n\nToken validation is skipped if not present.",
      reproductionSteps: "1. Create malicious HTML page with form\n2. Point form to victim site endpoint\n3. Victim visits malicious page\n4. Form auto-submits\n5. Action executes without CSRF token validation",
      impact: "Medium severity - Attackers can perform unauthorized actions on behalf of authenticated users including changing email, password, or making transactions.",
      images: [],
      videos: []
    },
    {
      id: "SUB-005",
      bountyName: "Authentication Bypass in Mobile App",
      researcher: "David Kim",
      researcherEmail: "david.k@example.com",
      submittedDate: "2024-10-11",
      status: "accepted",
      reward: "$6,000",
      severity: "critical",
      description: "Found a critical authentication bypass in the mobile app that allows access to any user account without credentials.",
      exploitsFound: "POST /api/mobile/auth HTTP/1.1\nHost: api.example.com\n\n{\n  'user_id': '12345',\n  'bypass': true,\n  'version': '1.0.0'\n}\n\nReturns valid JWT token without authentication.",
      reproductionSteps: "1. Intercept mobile app API traffic\n2. Identify authentication endpoint\n3. Send POST request with user_id and bypass flag\n4. Receive valid authentication token\n5. Can access any user account with their user_id",
      impact: "Critical severity - Complete authentication bypass. Attackers can access any user account, view private data, and perform actions as that user. Affects all mobile app users.",
      images: ["/placeholder.svg"],
      videos: []
    },
  ];

  // Mock bounty data
  const bounties = [
    { id: "BNT-001", title: "XSS Vulnerability in Authentication", company: "TechCorp", severity: "critical", status: "active", submissions: 12, reward: "$5,000" },
    { id: "BNT-002", title: "API Rate Limiting Bypass", company: "CloudServe", severity: "high", status: "active", submissions: 8, reward: "$3,500" },
    { id: "BNT-003", title: "SQL Injection in User Dashboard", company: "DataFlow", severity: "critical", status: "active", submissions: 15, reward: "$4,800" },
    { id: "BNT-004", title: "CSRF Token Validation Issue", company: "SecureBank", severity: "medium", status: "closed", submissions: 6, reward: "$2,000" },
  ];

  const stats = [
    { label: "Total Bounties", value: "24", icon: Target, color: "text-primary" },
    { label: "Active Bounties", value: "12", icon: Shield, color: "text-success" },
    { label: "Total Submissions", value: "156", icon: FileText, color: "text-warning" },
    { label: "Researchers", value: "89", icon: Users, color: "text-secondary" },
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

  const filteredSubmissions = submissions.filter(sub =>
    sub.bountyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.researcher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Manage bounties and review submissions</p>
        </div>
        <CreateBountyDialog />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="submissions" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="bounties">Manage Bounties</TabsTrigger>
        </TabsList>

        {/* Submissions Tab */}
        <TabsContent value="submissions" className="space-y-4 mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Bounty Submissions</CardTitle>
                <div className="relative w-72">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search submissions..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-muted-foreground">{submission.id}</span>
                        {getStatusBadge(submission.status)}
                        {getSeverityBadge(submission.severity)}
                      </div>
                      <h3 className="font-semibold mb-1">{submission.bountyName}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {submission.researcher}
                        </span>
                        <span>•</span>
                        <span>{submission.submittedDate}</span>
                        <span>•</span>
                        <span className="text-primary font-semibold">{submission.reward}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <SubmissionDetailsDialog submission={submission} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bounties Tab */}
        <TabsContent value="bounties" className="space-y-4 mt-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Active Bounties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bounties.map((bounty) => (
                  <div
                    key={bounty.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-muted-foreground">{bounty.id}</span>
                        {getSeverityBadge(bounty.severity)}
                        <Badge variant={bounty.status === "active" ? "default" : "secondary"}>
                          {bounty.status}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-1">{bounty.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{bounty.company}</span>
                        <span>•</span>
                        <span>{bounty.submissions} submissions</span>
                        <span>•</span>
                        <span className="text-primary font-semibold">{bounty.reward}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate(`/bounty/${bounty.id}`)}
                      >
                        View
                      </Button>
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
