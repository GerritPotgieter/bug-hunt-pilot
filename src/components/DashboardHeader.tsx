import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="h-full px-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <SidebarTrigger />
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src={import.meta.env.BASE_URL + "mordor-logo.svg"} 
              alt="Mordor" 
              className="h-6 w-6" 
            />
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent hidden sm:block">
              Mordor
            </span>
          </Link>
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bounties, reports..."
              className="pl-9 bg-background border-border"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-xs">
              3
            </Badge>
          </Button>
          
          <div className="flex items-center gap-3 ml-2 pl-2 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-medium">Alex Chen</p>
              <p className="text-xs text-muted-foreground">Rank #47</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
              AC
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
