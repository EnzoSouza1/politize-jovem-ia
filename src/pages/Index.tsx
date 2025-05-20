
import React, { useState } from 'react';
import Header from '@/components/Header';
import ThemeSelector from '@/components/ThemeSelector';
import AIContentDisplay from '@/components/AIContentDisplay';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface Theme {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const Index = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  
  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleBack = () => {
    setSelectedTheme(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-radial from-secondary/50 via-background to-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Política Pública Simplificada
              </h1>
              <p className="text-xl mb-8">
                Use nossa inteligência artificial para entender políticas públicas de forma simples, 
                com uma linguagem descomplicada e focada no que realmente importa para você.
              </p>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('theme-selector')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-6 text-lg"
              >
                Começar agora
              </Button>
            </div>
          </div>
        </section>
        
        {/* How it Works Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Escolha um Tema</h3>
                <p className="text-muted-foreground">
                  Selecione um tema de política pública que você quer entender melhor.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Nossa IA Trabalha</h3>
                <p className="text-muted-foreground">
                  Nossa inteligência artificial gera um conteúdo informativo e acessível.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Aprenda e Compartilhe</h3>
                <p className="text-muted-foreground">
                  Leia, aprenda e compartilhe o conteúdo com seus amigos nas redes sociais.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content Section */}
        <section className="py-16 bg-secondary/30" id="theme-selector">
          <div className="container-custom">
            {selectedTheme ? (
              <AIContentDisplay theme={selectedTheme} onBack={handleBack} />
            ) : (
              <ThemeSelector onThemeSelect={handleThemeSelect} />
            )}
          </div>
        </section>
        
        {/* Testimonials Section */}
        {!selectedTheme && (
          <section className="py-16 bg-background">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-12">O que estão dizendo</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <p className="italic mb-4">
                    "Finalmente entendi como funciona o sistema eleitoral brasileiro! Sempre achei esse assunto super complicado."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                      L
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Lucas, 19</p>
                      <p className="text-sm text-muted-foreground">Estudante</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <p className="italic mb-4">
                    "Uso para trabalhos da faculdade e para me manter informada. A linguagem é perfeita, nem muito formal nem muito informal."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                      J
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Julia, 22</p>
                      <p className="text-sm text-muted-foreground">Universitária</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <p className="italic mb-4">
                    "Como professor, uso esta ferramenta para preparar minhas aulas de sociologia. Os alunos adoram o formato!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                      M
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Marcos, 31</p>
                      <p className="text-sm text-muted-foreground">Professor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        {!selectedTheme && (
          <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
            <div className="container-custom text-center">
              <h2 className="text-3xl font-bold mb-6">Pronto para entender política de um jeito diferente?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Comece agora a explorar temas de políticas públicas com a nossa IA e transforme a forma como você se informa.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('theme-selector')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-6 text-lg text-primary"
              >
                Experimentar agora
              </Button>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
