import { Shield, Users, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "FCA Registered",
      description: "Credit Broker: 987654",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Powered by Avanza Finance",
      description: "Authorized Lending Partner",
      color: "text-primary",
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "256-bit SSL Encryption",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <badge.icon className={`h-6 w-6 ${badge.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
