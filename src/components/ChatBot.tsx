
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '✨ Hello! I\'m your AI assistant for Flagestrators Global Software Solutions. How can I help you transform your business today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an intelligent AI assistant for Flagestrators Global Software Solutions. The company specializes in:
              
              🔧 Services:
              - End-to-End Web Application Development
              - AI Integration & Automation Solutions
              - Data Migration & ETL Solutions
              - Microservices Architecture Design
              - Legacy System Modernization
              - CRM & Enterprise Solutions
              
              👥 Expert Team:
              - P Murali Krishna (Founder & CEO) - Visionary leader in enterprise software
              - Hari Krishna (Senior Architect) - System architecture expert
              - Ravi Teja (Technical Lead, Full Stack Developer) - Modern web technologies specialist
              - Rajkumar (AI Integration Engineer) - AI/ML implementation expert
              - Shiva (Senior Business Analyst) - Business requirements specialist
              
              📍 Location: Hyderabad, Telangana, India
              
              Keep responses engaging, professional, and helpful. Use emojis appropriately. Focus on how the company can transform their business through innovative software solutions. Be enthusiastic about technology and business transformation.`
            },
            {
              role: 'user',
              content: inputValue
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      const botResponse = data.choices[0]?.message?.content || 'I apologize, but I\'m having trouble processing your request right now. Please feel free to contact us directly at contact@flagestrators.com! 🚀';

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling OpenRouter API:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '🔧 I\'m having some technical difficulties right now! Please reach out to us directly at contact@flagestrators.com or visit our contact page for immediate assistance. We\'re here to help! ✨',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      toast.error('Chat service temporarily unavailable');
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button - Enhanced with Sky Blue Theme */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-2xl shadow-sky-400/50 transition-all duration-500 hover:scale-110 border-2 border-white group ${
          isOpen ? 'animate-wiggle' : 'animate-bounce-slow'
        }`}
        size="sm"
      >
        {isOpen ? (
          <X className="h-7 w-7 text-white group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
          </div>
        )}
      </Button>

      {/* Chat Window - Enhanced Design */}
      {isOpen && (
        <Card className="fixed bottom-28 right-8 z-50 w-96 h-[600px] glass-effect border-2 border-sky-200 shadow-2xl shadow-sky-300/30 animate-slide-up overflow-hidden">
          {/* Header - Enhanced */}
          <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 text-white p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20" />
            <div className="relative z-10 flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-float border-2 border-white/30">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Flagestrators AI Assistant</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm text-white/90">Online • Ready to help ✨</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages - Enhanced */}
          <div className="flex-1 p-6 overflow-y-auto max-h-96 space-y-6 bg-gradient-to-b from-sky-50/50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div className={`flex items-end space-x-3 max-w-[85%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white animate-float' 
                      : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                  }`}>
                    {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`rounded-2xl p-4 shadow-lg ${
                    message.isBot 
                      ? 'bg-white border border-sky-200 text-gray-800' 
                      : 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.isBot ? 'text-gray-500' : 'text-white/80'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-end space-x-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white flex items-center justify-center animate-pulse">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white border border-sky-200 rounded-2xl p-4 shadow-lg">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - Enhanced */}
          <div className="p-6 border-t border-sky-200 bg-white">
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border-2 border-sky-300 focus:border-sky-500 focus:ring-sky-500 rounded-xl px-4 py-3 text-sm"
                disabled={isTyping}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl px-6 py-3 button-hover disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI • Ask about our services, team, or schedule a demo! 🚀
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
