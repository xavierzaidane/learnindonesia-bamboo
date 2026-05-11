'use client';

import { Target, Zap, Shield, Users, TrendingUp, CircleCheck, Lightbulb } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


export default function AboutPage() {
  const faqs = [
    {
      question: 'Why should I use LearnIndo instead of other platforms?',
      answer: 'LearnIndo is purpose-built for focused learning and skill development. We eliminate distractions and provide curated content, live courses, and a supportive community all in one place. Unlike general platforms, every feature is designed to help you achieve your learning goals faster.'
    },
    {
      question: 'Is LearnIndo free to use for learners?',
      answer: 'Yes! Learners can browse courses, access the knowledge library, participate in the forum, and read blog posts completely free. We offer premium features for advanced learning paths, but basic access to all our resources is available to everyone.'
    },
    {
      question: 'How do I create an account? Is it complicated?',
      answer: 'Creating an account is simple and takes less than 2 minutes. Just sign up with your email, set up your profile, and you\'re ready to start learning. You can add your interests and goals to get personalized recommendations.'
    },
    {
      question: 'Can educators create and share courses on LearnIndo?',
      answer: 'Yes! We welcome educators and experts to create and share courses. Our course creation tools are intuitive and require no technical knowledge. You can reach thousands of learners and build your reputation as an educator.'
    },
    {
      question: 'How does LearnIndo protect my privacy?',
      answer: 'Your data stays yours. We don\'t sell your information or use it for anything other than improving your learning experience. All personal information is encrypted and protected according to industry standards.'
    },
    {
      question: 'What types of courses are available on LearnIndo?',
      answer: 'We offer courses across technology, business, creative skills, languages, professional development, and more. Whether you\'re a beginner or advanced learner, you\'ll find courses tailored to your level and interests.'
    },
    {
      question: 'How quickly can I start learning on LearnIndo?',
      answer: 'You can start immediately after signing up. Courses are self-paced, so you can learn whenever you have time. Most courses have lessons ranging from 5 to 30 minutes, making it easy to fit learning into your schedule.'
    },
    {
      question: 'Can I get certificates after completing courses?',
      answer: 'Yes! After completing a course and passing any assessments, you\'ll receive a certificate that you can share on your profile, LinkedIn, or with employers to showcase your new skills.'
    },
    {
      question: 'What if I need help or have questions?',
      answer: 'Our support team is available 24/7 to help. You can also reach out to instructors directly, ask questions in the forum community, and access comprehensive help documentation.'
    }
  ];

  const features = [
    {
      icon: Target,
      title: '100% Focus',
      description: 'No social feeds, no distractions. Every feature is designed to help you learn and grow.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Find courses and resources in seconds with advanced filtering and personalized recommendations.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data stays yours. We don\'t sell your information or use it for anything other than improving your learning.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a supportive community of learners, share knowledge, and grow together with peers.'
    }
  ];

  return (
    <div className="min-h-screen pt-34">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter ">
            About <span className="relative inline-block px-1">
              <span className="relative z-20 text-primary font-serif">LearnIndo<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-105 opacity-20"></span></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A focused platform designed to help learners master new skills, build their knowledge, and connect with a supportive community—without the distractions.
          </p>
        </div>

        {/* Mission Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Target className="size-6 text-primary" />
            <h2 className="text-3xl font-semibold tracking-tight">Our Mission</h2>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Learning should be empowering, not overwhelming. Yet, traditional platforms often scatter your attention across feeds, notifications, and distractions that have nothing to do with your learning goals.
            </p>
            <p className="text-lg">
              <strong className="text-primary">LearnIndo</strong> was built to solve this problem. We believe that education should be focused, engaging, and distraction-free. Our platform is purpose-built for one thing and one thing only: helping you learn effectively, achieve your goals, and grow as an individual.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="size-6 text-primary" />
            <h2 className="text-3xl font-semibold tracking-tight">What Makes Us Different</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white shadow-lg rounded-3xl p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="size-5 text-primary" />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="size-6 text-primary" />
            <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Explore & Discover</h3>
                <p className="text-gray-600">
                  Browse our curated catalog of courses, access the knowledge library, and discover content that matches your interests and goals.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                2
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Learn at Your Pace</h3>
                <p className="text-gray-600">
                  Engage with bite-sized lessons, complete assignments, and progress through courses on your own schedule with support from instructors and peers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Grow & Connect</h3>
                <p className="text-gray-600">
                  Earn certificates, build your portfolio, join the community forum, and connect with like-minded learners and professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose LearnIndo */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Why Choose <span className="relative inline-block px-1">
              <span className="relative z-20 text-primary font-serif">LearnIndo?<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-105 opacity-20"></span></span>
            </span></h2>
          <div className="space-y-3">
            {[
              'No algorithm-driven feeds that distract you from your learning goals',
              'Advanced filtering and search to find exactly what you\'re looking for',
              'Clean, intuitive interface that gets out of your way',
              'Structured learning paths designed by industry experts',
              'Real-time notifications for new courses and resources in your interest areas',
              'Dedicated support for learners, instructors, and the community'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CircleCheck className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:text-gray-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
