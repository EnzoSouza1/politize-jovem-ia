
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Instagram, Facebook, Twitter, Copy, Download } from 'lucide-react';

interface SocialPostGeneratorProps {
  theme: {
    id: string;
    title: string;
    icon: string;
  };
  specificTopic: string;
  content: string;
}

const SocialPostGenerator: React.FC<SocialPostGeneratorProps> = ({ theme, specificTopic, content }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<'instagram' | 'facebook' | 'twitter'>('instagram');
  const [generatedPost, setGeneratedPost] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const platforms = [
    { id: 'instagram' as const, name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'facebook' as const, name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
    { id: 'twitter' as const, name: 'Twitter', icon: Twitter, color: 'bg-sky-500' }
  ];

  const generatePost = () => {
    setIsGenerating(true);
    
    // Simular geração de post baseado no conteúdo
    setTimeout(() => {
      const posts = {
        instagram: `🔥 VOCÊ SABIA? ${theme.icon}

${specificTopic} é um tema super importante que afeta nossa vida diretamente! 

✨ Principais pontos:
• Como isso impacta os jovens
• Oportunidades que surgem
• Como você pode se envolver

👆 Deslize para saber mais ou acesse o link na bio!

#PoliticaPublica #JovensEngajados #${theme.title.replace(/\s+/g, '')} #Cidadania #BrasilJovem`,

        facebook: `${theme.icon} Vamos falar sobre ${specificTopic}?

Este é um assunto que todo jovem brasileiro deveria conhecer! Nosso novo artigo explica de forma simples e direta como ${specificTopic} impacta sua vida e como você pode fazer a diferença.

🎯 O que você vai descobrir:
→ O contexto atual no Brasil
→ Como isso afeta seu futuro
→ Formas práticas de se envolver

Porque entender política pública não precisa ser complicado! 💪

#PoliticaPublica #EducacaoCivica #JovensNaPolitica`,

        twitter: `${theme.icon} Thread sobre ${specificTopic} 🧵

Por que todo jovem deveria entender esse tema? Explicamos de forma simples:

• Impacto direto na sua vida
• Oportunidades que você pode aproveitar  
• Como participar ativamente

Política pública descomplicada! 👇

#PoliticaPublica #Thread`
      };

      setGeneratedPost(posts[selectedPlatform]);
      setIsGenerating(false);
      
      toast({
        title: "Post gerado com sucesso!",
        description: `Post para ${platforms.find(p => p.id === selectedPlatform)?.name} está pronto.`,
      });
    }, 1500);
  };

  const copyPost = () => {
    navigator.clipboard.writeText(generatedPost);
    toast({
      title: "Post copiado!",
      description: "O texto do post foi copiado para sua área de transferência.",
    });
  };

  const downloadAsImage = () => {
    // Simular download de imagem
    toast({
      title: "Imagem gerada!",
      description: "Uma versão visual do post foi criada para download.",
    });
  };

  const selectedPlatformData = platforms.find(p => p.id === selectedPlatform);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Crie um post para redes sociais</h3>
        <p className="text-muted-foreground">
          Gere conteúdo chamativo baseado no artigo para compartilhar com seus seguidores
        </p>
      </div>

      {/* Seleção de plataforma */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {platforms.map((platform) => {
          const IconComponent = platform.icon;
          return (
            <Card
              key={platform.id}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedPlatform === platform.id
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedPlatform(platform.id)}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`p-3 rounded-full text-white ${platform.color}`}>
                  <IconComponent size={24} />
                </div>
                <span className="font-medium">{platform.name}</span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Botão para gerar */}
      <div className="text-center">
        <Button
          onClick={generatePost}
          disabled={isGenerating}
          size="lg"
          className="px-8"
        >
          {isGenerating ? 'Gerando post...' : `Gerar post para ${selectedPlatformData?.name}`}
        </Button>
      </div>

      {/* Post gerado */}
      {generatedPost && !isGenerating && (
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {selectedPlatformData && (
                <>
                  <div className={`p-2 rounded-full text-white ${selectedPlatformData.color}`}>
                    <selectedPlatformData.icon size={20} />
                  </div>
                  <h4 className="font-bold text-lg">Post para {selectedPlatformData.name}</h4>
                </>
              )}
            </div>
            
            <div className={`p-4 rounded-lg border-l-4 ${selectedPlatformData?.color.replace('bg-gradient-to-r from-purple-500 to-pink-500', 'border-purple-500').replace('bg-blue-600', 'border-blue-600').replace('bg-sky-500', 'border-sky-500')} bg-muted/30`}>
              <Textarea
                value={generatedPost}
                onChange={(e) => setGeneratedPost(e.target.value)}
                className="min-h-[200px] border-0 bg-transparent resize-none focus-visible:ring-0"
                placeholder="Seu post aparecerá aqui..."
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-end">
              <Button variant="outline" onClick={copyPost}>
                <Copy size={16} className="mr-2" />
                Copiar texto
              </Button>
              <Button variant="outline" onClick={downloadAsImage}>
                <Download size={16} className="mr-2" />
                Baixar como imagem
              </Button>
              <Button onClick={generatePost}>
                Regenerar post
              </Button>
            </div>
          </div>
        </Card>
      )}

      {isGenerating && (
        <Card className="p-8">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-pulse-slow text-4xl mb-4">✨</div>
            <h4 className="text-lg font-medium mb-2">Criando seu post...</h4>
            <p className="text-muted-foreground text-center">
              Nossa IA está criando um post chamativo para {selectedPlatformData?.name}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SocialPostGenerator;
