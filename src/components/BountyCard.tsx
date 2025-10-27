import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BountyCardProps {
  id?: string;
  company: string;
  title: string;
  severity: "critical" | "high" | "medium" | "low";
  reward: string;
  submissions: number;
  deadline: string;
}

const severityConfig = {
  critical: { color: "bg-destructive text-destructive-foreground", label: "Critical" },
  high: { color: "bg-warning text-warning-foreground", label: "High" },
  medium: { color: "bg-secondary text-secondary-foreground", label: "Medium" },
  low: { color: "bg-muted text-muted-foreground", label: "Low" },
};

export function BountyCard({ id = "BNT-001", company, title, severity, reward, submissions, deadline }: BountyCardProps) {
  const severityStyle = severityConfig[severity];
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/bounty/${id}`);
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-red">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-lg">{company}</h4>
              <Badge className={severityStyle.color}>{severityStyle.label}</Badge>
            </div>
            <p className="text-muted-foreground text-sm">{title}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Reward</p>
              <p className="font-bold text-primary">{reward}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Submissions</p>
              <p className="font-medium">{submissions}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Deadline</p>
              <p className="font-medium">{deadline}</p>
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
            onClick={handleViewDetails}
          >
            View Details
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
