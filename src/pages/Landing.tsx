import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Trophy, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for researchers and organizations to collaborate safely.",
    },
    {
      icon: Target,
      title: "High-Value Bounties",
      description: "Access exclusive bug bounty programs from top companies worldwide.",
    },
    {
      icon: Trophy,
      title: "Competitive Rewards",
      description: "Earn substantial rewards for finding and reporting security vulnerabilities.",
    },
    {
      icon: Users,
      title: "Elite Community",
      description: "Join a network of top cybersecurity researchers and ethical hackers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BugHunt
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Register Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Welcome to the{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Elite Bug Bounty
            </span>{" "}
            Platform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Discover vulnerabilities, earn rewards, and help secure the digital world. 
            Join thousands of researchers hunting bugs across the globe's leading platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/dashboard">
              <Button size="lg" className="text-lg px-8 shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)]">
                Start Hunting <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Bounties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: "Active Bounties", value: "250+" },
            { label: "Total Paid Out", value: "$2.5M" },
            { label: "Security Researchers", value: "10K+" },
            { label: "Vulnerabilities Found", value: "50K+" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why Choose BugHunt?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            The most advanced bug bounty platform built for researchers who demand excellence.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-card to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the elite community of security researchers making the internet safer, 
              one vulnerability at a time. Start earning today.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="text-lg px-12 shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)]">
                Register Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">BugHunt</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BugHunt. Securing the digital world, one bug at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
