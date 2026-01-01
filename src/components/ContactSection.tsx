import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const isRTL = language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending - in production, connect to your backend
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Open email client with pre-filled data
    const mailtoLink = `mailto:amedelshab7@gmail.com?subject=${encodeURIComponent(
      `رسالة من ${formData.name} - VYROXEN`
    )}&body=${encodeURIComponent(
      `الاسم: ${formData.name}\nالبريد: ${formData.email}\n\nالرسالة:\n${formData.message}`
    )}`;
    
    window.open(mailtoLink, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: isRTL ? "تم إرسال الرسالة!" : "Message Sent!",
      description: isRTL ? "سنتواصل معك قريباً" : "We'll get back to you soon",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'font-arabic' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">
              {isRTL ? 'تواصل معنا' : 'Get In Touch'}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {isRTL ? 'راسلنا الآن' : 'Contact Us'}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isRTL 
              ? 'لديك سؤال أو اقتراح؟ نحن هنا للمساعدة. أرسل رسالتك وسنرد عليك في أقرب وقت.'
              : 'Have a question or suggestion? We\'re here to help. Send your message and we\'ll respond soon.'}
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            {/* Card */}
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-primary/20">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-accent/50 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-secondary/50 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/50 rounded-br-3xl" />

              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-500 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {isRTL ? 'تم الإرسال بنجاح!' : 'Successfully Sent!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {isRTL ? 'شكراً لتواصلك معنا' : 'Thank you for reaching out'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {/* Name Field */}
                  <div className="group/input">
                    <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      {isRTL ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-background/50 border-2 border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300"
                        placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover/input:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group/input">
                    <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-background/50 border-2 border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300"
                        placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                        dir="ltr"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover/input:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group/input">
                    <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-secondary" />
                      {isRTL ? 'رسالتك' : 'Your Message'}
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 bg-background/50 border-2 border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/20 transition-all duration-300 resize-none"
                        placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover/input:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group/btn overflow-hidden px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-100 group-hover/btn:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
                    
                    {/* Button Content */}
                    <span className="relative flex items-center justify-center gap-3 text-background">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {isRTL ? 'جاري الإرسال...' : 'Sending...'}
                        </>
                      ) : (
                        <>
                          <Send className={`w-5 h-5 transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                          {isRTL ? 'إرسال الرسالة' : 'Send Message'}
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}

              {/* Decorative Elements */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full">
                <span className="text-xs font-bold text-background">
                  {isRTL ? '📧 تواصل سريع' : '📧 Quick Contact'}
                </span>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:amedelshab7@gmail.com"
              className="group p-4 rounded-xl bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center"
            >
              <Mail className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground">amedelshab7@gmail.com</span>
            </a>
            
            <a
              href="tel:+201014812328"
              className="group p-4 rounded-xl bg-card/50 border border-accent/20 hover:border-accent/50 transition-all duration-300 text-center"
            >
              <MessageSquare className="w-6 h-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground">+20 101 481 2328</span>
            </a>
            
            <a
              href="https://ahmednour.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-card/50 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 text-center"
            >
              <Sparkles className="w-6 h-6 text-secondary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground">ahmednour.vercel.app</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
