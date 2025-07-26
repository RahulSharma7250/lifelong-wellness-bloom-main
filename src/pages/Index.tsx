import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import MethodSection from "@/components/MethodSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import BookingForm from "@/components/BookingForm"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Award, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Brief About Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Meet <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Dr. Megha Shaha</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A dedicated healer with over 10 years of experience in holistic medicine, 
                helping women achieve optimal health through natural, evidence-based treatments.
              </p>
              <Link to="/about">
                <Button variant="nature" size="lg">
                  Learn More About Dr. Megha
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Unique Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Unique Approach</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We don't just treat symptoms - we address the root causes of illness 
                  through a comprehensive, personalized approach to healing.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-0">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold mb-3">Personalized Care</h3>
                    <p className="text-muted-foreground">
                      Every treatment plan is uniquely designed based on your individual 
                      constitution, health history, and specific needs.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-0">
                    <Award className="w-12 h-12 text-secondary-accent mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold mb-3">Evidence-Based</h3>
                    <p className="text-muted-foreground">
                      Our methods combine ancient wisdom with modern science, 
                      backed by research and proven results.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-0">
                    <Heart className="w-12 h-12 text-accent-warm mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-semibold mb-3">Holistic Healing</h3>
                    <p className="text-muted-foreground">
                      We treat the whole person - mind, body, and spirit - 
                      for lasting transformation and optimal wellness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Explore Our Services
                </h2>
                <p className="text-muted-foreground">
                  Discover how we can help you achieve lasting wellness
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <h3 className="font-serif text-2xl font-semibold mb-4">About Dr. Megha</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Learn about Dr. Megha's journey, education, and passion for holistic healing. 
                      Discover why thousands of women trust her with their health.
                    </p>
                    <Link to="/about">
                      <Button variant="outline">
                        Read Full Story
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <h3 className="font-serif text-2xl font-semibold mb-4">Methods & Techniques</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Explore our comprehensive range of natural healing methods including 
                      Ayurveda, mindfulness, nutrition, and lifestyle medicine.
                    </p>
                    <Link to="/methods">
                      <Button variant="outline">
                        Explore Methods
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <BookingForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
