import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const features = [
    "AI-powered career guidance",
    "Personalized upskilling roadmap",
    "Flexible funding options",
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6">
          <Badge className="bg-accent text-accent-foreground text-sm px-4 py-1.5">
            Fair & Transparent Pricing
          </Badge>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Pay Only When You Succeed
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          No upfront costs. Flexible repayment terms when you start earning.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Starter",
              price: "£1,500",
              description: "Perfect for getting started",
            },
            {
              title: "Professional",
              price: "£5,000",
              description: "Most popular choice",
              popular: true,
            },
            {
              title: "Expert",
              price: "£10,000",
              description: "Maximum career support",
            },
          ].map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">funding</span>
                </div>
                <ul className="space-y-3 text-left">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
