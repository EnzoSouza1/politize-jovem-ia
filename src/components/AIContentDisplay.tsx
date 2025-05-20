
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface AIContentDisplayProps {
  theme: {
    id: string;
    title: string;
    description: string;
    icon: string;
  } | null;
  specificTopic: string;
  onBack: () => void;
}

const AIContentDisplay: React.FC<AIContentDisplayProps> = ({ theme, specificTopic, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (theme && specificTopic) {
      generateContent(theme.title, specificTopic);
    }
  }, [theme, specificTopic]);

  const generateContent = async (themeTitle: string, topic: string) => {
    setIsLoading(true);
    
    try {
      // Replace with actual API call
      // Example API endpoint structure:
      // const response = await fetch('https://your-api-endpoint.com/generate-content', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ theme: themeTitle, topic })
      // });
      // const data = await response.json();
      // setContent(data.content);
      
      // For now, simulating API response with setTimeout
      setTimeout(() => {
        // Simulate content generation
        const simulatedContent = getSimulatedContent(themeTitle, topic);
        setContent(simulatedContent);
        setIsLoading(false);
        
        toast({
          title: "Conteúdo gerado!",
          description: `Artigo sobre ${topic} pronto para leitura.`,
        });
      }, 2000);
    } catch (error) {
      console.error("Error generating content:", error);
      setIsLoading(false);
      toast({
        title: "Erro!",
        description: "Não foi possível gerar o conteúdo. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const getSimulatedContent = (themeTitle: string, topic: string): string => {
    // This simulated content function now takes the specific topic into account
    // In a real implementation, this would be replaced by an actual API call
    
    // Create a more personalized title based on the specific topic
    const title = `# ${topic}: O que você precisa saber`;
    
    // Create an introduction paragraph mentioning the specific topic
    const introduction = `
      Olá! Vamos falar sobre ${topic}, um assunto super importante dentro da área de ${themeTitle}. 
      Este conteúdo foi personalizado especialmente para ajudar você a entender melhor este tema de forma simples e direta.
    `;
    
    // Create some common sections that would be in any article
    const commonSections = `
      ## Contexto Atual
      
      Atualmente, quando falamos de ${topic} no Brasil, estamos diante de um cenário bastante complexo. Vamos simplificar e entender os principais pontos.
      
      ## Pontos Principais
      
      1. **Origem e Histórico**: Como surgiu ${topic} e como chegamos até aqui.
      2. **Impacto no dia a dia**: Como isso afeta a vida dos jovens brasileiros.
      3. **Desafios e Oportunidades**: Os principais obstáculos e possibilidades relacionados a ${topic}.
      4. **O que dizem os especialistas**: Diferentes visões sobre ${topic}.
      
      ## Por que isso importa para você?
      
      ${topic} pode parecer um assunto distante, mas na verdade impacta diretamente aspectos como:
      - Suas oportunidades de estudo e trabalho
      - Sua qualidade de vida
      - Seu futuro e de sua comunidade
      
      ## O que você pode fazer
      
      Existem várias formas de se envolver e fazer a diferença quando falamos de ${topic}:
      
      1. Mantenha-se informado através de fontes confiáveis
      2. Participe de debates e discussões sobre o tema
      3. Engaje-se em iniciativas locais relacionadas
      4. Compartilhe informação de qualidade com seus amigos
      
      ## Conclusão
      
      Entender ${topic} é essencial para exercer sua cidadania de forma plena e consciente. Esperamos que este conteúdo tenha ajudado você a compreender melhor este tema importante dentro da área de ${themeTitle}.
      
      Tem alguma dúvida específica sobre ${topic}? Deixe nos comentários!
    `;
    
    return `${title}\n${introduction}\n${commonSections}`;
  };

  const handleCopyContent = () => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Conteúdo copiado!",
      description: "O texto foi copiado para sua área de transferência.",
    });
  };

  const handleShareContent = () => {
    // Implementação simplificada de compartilhamento
    toast({
      title: "Link gerado!",
      description: "Um link para este conteúdo foi copiado para sua área de transferência.",
    });
  };
  
  const handleRegenerate = () => {
    if (theme && specificTopic) {
      generateContent(theme.title, specificTopic);
    }
  };

  if (!theme) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <Button variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <h2 className="text-2xl font-bold">
          <span className="mr-2">{theme.icon}</span>
          {theme.title}
        </h2>
      </div>
      
      <div className="mb-4">
        <p className="text-lg font-medium">Assunto específico: <span className="text-primary">{specificTopic}</span></p>
      </div>
      
      <Card className="w-full overflow-hidden">
        {isLoading ? (
          <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-pulse-slow text-6xl mb-4">🤖</div>
            <h3 className="text-xl font-medium mb-2">Gerando conteúdo...</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Nossa IA está trabalhando para criar um conteúdo incrível sobre {specificTopic} em uma linguagem acessível e divertida!
            </p>
          </div>
        ) : (
          <div className="p-6">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold gradient-text mb-6">{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-6 mb-4">{line.substring(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.substring(4)}</h3>;
                } else if (line.startsWith('- ')) {
                  return <li key={index} className="ml-5 my-1">{line.substring(2)}</li>;
                } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                  return <li key={index} className="ml-5 my-1 list-decimal">{line.substring(3)}</li>;
                } else if (line === '') {
                  return <div key={index} className="h-4"></div>;
                } else {
                  return <p key={index} className="my-3">{line}</p>;
                }
              })}
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8 justify-end">
              <Button variant="outline" onClick={handleCopyContent}>
                Copiar conteúdo
              </Button>
              <Button variant="outline" onClick={handleShareContent}>
                Compartilhar
              </Button>
              <Button onClick={handleRegenerate}>
                Regenerar conteúdo
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AIContentDisplay;
