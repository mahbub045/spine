import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Political Research & Analysis",
      description:
        "Comprehensive research and analysis of political landscapes, voting patterns, and policy impacts.",
      features: [
        "Electoral trend analysis",
        "Public opinion polling",
        "Demographic insights",
        "Policy impact assessment",
      ],
    },
    {
      id: 2,
      title: "Campaign Strategy",
      description:
        "Data-driven campaign strategy development to guide message positioning and voter outreach.",
      features: [
        "Message development",
        "Targeting recommendations",
        "Opposition research",
        "Voter mobilization strategy",
      ],
    },
    {
      id: 3,
      title: "Public Relations",
      description:
        "Strategic communications planning and media relations to amplify your message effectively.",
      features: [
        "Strategic Communications",
        "Media strategy",
        "Crisis communication",
        "Press release crafting",
        "Campaign Development",
        "Stakeholder Engagement",
        "Digital Campaigns",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black/80 mb-5">
            Strategic Political Excellence
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Comprehensive communications solutions designed for the complex
            world of political leadership and governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card p-8 border border-gray-300 rounded-md shadow hover:shadow-lg hover:border-primary/30  transition-all"
            >
              <h3 className="text-2xl font-display font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <Check size={18} className="text-brandRed" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to elevate your political communications strategy?
          </p>
          <Button className="p-6 hover:cursor-pointer">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
