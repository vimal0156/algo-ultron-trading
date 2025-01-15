import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, MessageCircle, Download, ArrowRight, PlayCircle, BookMarked } from "lucide-react";
import { motion } from "framer-motion";

const Resources = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/5">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Resources & Learning
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Everything you need to master algorithmic trading and maximize your success
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <BookOpen className="w-5 h-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-5 h-5" />
                Download Guide
              </Button>
            </div>
          </div>
        </section>

        {/* Main Resources Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Documentation */}
              <motion.div variants={item}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <BookMarked className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive guides and API documentation for developers
                    </p>
                    <Button variant="outline" className="w-full gap-2">
                      Read Docs
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Video Tutorials */}
              <motion.div variants={item}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <PlayCircle className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Video Tutorials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Step-by-step video guides for all platform features
                    </p>
                    <Button variant="outline" className="w-full gap-2">
                      Watch Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Blog & Updates */}
              <motion.div variants={item}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Blog & Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Latest news, tips, and platform updates
                    </p>
                    <Button variant="outline" className="w-full gap-2">
                      Read Blog
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Community */}
              <motion.div variants={item}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <MessageCircle className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Join our community of traders and developers
                    </p>
                    <Button variant="outline" className="w-full gap-2">
                      Join Discord
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Join thousands of traders using our platform to automate their trading strategy
            </p>
            <Button size="lg" className="gap-2">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;