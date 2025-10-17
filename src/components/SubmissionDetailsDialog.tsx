import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Clock, FileText, Image, Video, User, Calendar, DollarSign } from "lucide-react";

interface SubmissionDetailsDialogProps {
  submission: {
    id: string;
    bountyName: string;
    researcher: string;
    researcherEmail: string;
    submittedDate: string;
    status: string;
    reward: string;
    severity: string;
    description: string;
    exploitsFound: string;
    reproductionSteps: string;
    impact: string;
    images?: string[];
    videos?: string[];
  };
}

export function SubmissionDetailsDialog({ submission }: SubmissionDetailsDialogProps) {
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
      case "low":
        return <Badge className="bg-muted text-muted-foreground">Low</Badge>;
      default:
        return <Badge>{severity}</Badge>;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Submission Details</DialogTitle>
            {getStatusBadge(submission.status)}
          </div>
          <DialogDescription>
            Submission ID: {submission.id}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Info */}
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">Researcher</p>
                    <p className="font-medium">{submission.researcher}</p>
                    <p className="text-xs text-muted-foreground">{submission.researcherEmail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">Submitted</p>
                    <p className="font-medium">{submission.submittedDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">Reward</p>
                    <p className="font-medium text-primary">{submission.reward}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">Severity</p>
                    <div className="mt-1">{getSeverityBadge(submission.severity)}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bounty Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Bounty</h3>
            <p className="text-foreground">{submission.bountyName}</p>
          </div>

          <Separator />

          {/* Tabs for different sections */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="bg-muted">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="exploits">Exploits Found</TabsTrigger>
              <TabsTrigger value="media">Media Proof</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {submission.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Reproduction Steps</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {submission.reproductionSteps}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Impact Assessment</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {submission.impact}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="exploits" className="mt-4">
              <div className="space-y-4">
                <h4 className="font-semibold">Vulnerabilities & Exploits</h4>
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <p className="text-sm whitespace-pre-wrap font-mono">
                      {submission.exploitsFound}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="media" className="mt-4">
              <div className="space-y-6">
                {/* Images */}
                {submission.images && submission.images.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Image className="h-4 w-4" />
                      <h4 className="font-semibold">Image Proof ({submission.images.length})</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {submission.images.map((img, idx) => (
                        <Card key={idx} className="overflow-hidden">
                          <CardContent className="p-0">
                            <img 
                              src={img} 
                              alt={`Proof ${idx + 1}`} 
                              className="w-full h-48 object-cover hover:scale-105 transition-transform cursor-pointer"
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Videos */}
                {submission.videos && submission.videos.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="h-4 w-4" />
                      <h4 className="font-semibold">Video Proof ({submission.videos.length})</h4>
                    </div>
                    <div className="space-y-4">
                      {submission.videos.map((video, idx) => (
                        <Card key={idx}>
                          <CardContent className="p-4">
                            <video 
                              controls 
                              className="w-full rounded-lg"
                              src={video}
                            >
                              Your browser does not support the video tag.
                            </video>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {(!submission.images || submission.images.length === 0) && 
                 (!submission.videos || submission.videos.length === 0) && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No media proof attached to this submission.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <Separator />

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline" className="gap-2">
              <XCircle className="h-4 w-4" />
              Reject
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Request Changes
            </Button>
            <Button className="gap-2 bg-success hover:bg-success/90">
              <CheckCircle className="h-4 w-4" />
              Approve Submission
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
