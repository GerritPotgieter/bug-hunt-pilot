import { Trophy } from "lucide-react";

interface LeaderboardEntryProps {
  rank: number;
  name: string;
  points: number;
  bounties: number;
  isCurrentUser?: boolean;
}

export function LeaderboardEntry({ rank, name, points, bounties, isCurrentUser }: LeaderboardEntryProps) {
  const rankColor = rank === 1 ? "text-warning" : rank === 2 ? "text-muted-foreground" : rank === 3 ? "text-warning/60" : "text-foreground";
  
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg ${isCurrentUser ? "bg-primary/10 border border-primary" : "bg-card/50"} hover:bg-card transition-colors`}>
      <div className="flex items-center gap-4 flex-1">
        <div className={`w-8 text-center font-bold text-lg ${rankColor}`}>
          {rank <= 3 ? <Trophy className="h-5 w-5 inline" /> : `#${rank}`}
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-sm text-primary-foreground">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">{bounties} bounties found</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-primary">{points.toLocaleString()}</p>
        <p className="text-xs text-muted-foreground">points</p>
      </div>
    </div>
  );
}
