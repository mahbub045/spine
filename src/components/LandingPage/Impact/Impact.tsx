import { Award, Globe, TrendingUp } from "lucide-react";

const Impact: React.FC = () => {
  const achievements = [
    {
      metric: "98%",
      label: "Crisis Resolution Rate",
      description: "Successfully managed reputation threats",
    },
    {
      metric: "500+",
      label: "Political Leaders",
      description: "Served across federal and state levels",
    },
    {
      metric: "24hr",
      label: "Average Response",
      description: "Crisis intervention deployment",
    },
    {
      metric: "85%",
      label: "Campaign Success",
      description: "Winning political campaigns",
    },
  ];

  const testimonials = [
    {
      quote:
        "SPINE's strategic communications completely transformed our narrative. Their crisis management saved our campaign.",
      author: "Senior Congressional Aide",
      role: "Federal Campaign",
    },
    {
      quote:
        "The level of discretion and professionalism is unmatched. They understand the political landscape like no other.",
      author: "State Assembly Member",
      role: "Legislative Leadership",
    },
    {
      quote:
        "Their media strategy helped us build relationships that continue to benefit our legislative agenda years later.",
      author: "Policy Director",
      role: "Government Relations",
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black/80 mb-5">
            Measurable Political Impact
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our strategic communications deliver quantifiable results for
            political leaders and organizations nationwide.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card border border-border rounded-xl p-8 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-elegant)] hover:-translate-y-1">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {achievement.metric}
                </div>
                <div className="text-lg font-semibold text-black/80 mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-foreground">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-black/80 mb-6">
              Anonymous Case Studies
            </h3>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-black/90">
                    Federal Campaign Recovery
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Transformed a declining gubernatorial campaign with strategic
                  narrative repositioning, resulting in a 15-point polling surge
                  and eventual victory.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-black/90">
                    Crisis Communication
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Managed a high-profile political scandal with coordinated
                  media strategy, preserving client's career and maintaining
                  public trust.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-black/90">
                    Legislative Success
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Developed stakeholder engagement strategy that secured
                  bipartisan support for major policy initiative in record time.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/meetingImg.jpg"
              alt="Strategic Political Meeting"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-black/90 text-center mb-12">
            What Political Leaders Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)]"
              >
                <p className="text-muted-foreground italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-black/90">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
