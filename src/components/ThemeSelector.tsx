
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type Theme = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const themes: Theme[] = [
  {
    id: 'educacao',
    title: 'Educação',
    description: 'Políticas educacionais, investimentos e reformas na educação',
    icon: '🎓'
  },
  {
    id: 'saude',
    title: 'Saúde',
    description: 'Sistema de saúde, programas de prevenção e políticas sanitárias',
    icon: '🏥'
  },
  {
    id: 'meioambiente',
    title: 'Meio Ambiente',
    description: 'Políticas ambientais, sustentabilidade e mudanças climáticas',
    icon: '🌳'
  },
  {
    id: 'economia',
    title: 'Economia',
    description: 'Medidas econômicas, impostos, incentivos e regulações financeiras',
    icon: '💰'
  },
  {
    id: 'seguranca',
    title: 'Segurança Pública',
    description: 'Segurança, políticas de combate ao crime e reformas no sistema prisional',
    icon: '🛡️'
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    description: 'Inovação tecnológica, inclusão digital e regulação da internet',
    icon: '💻'
  },
];

interface ThemeSelectorProps {
  onThemeSelect: (theme: Theme, specificTopic: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeSelect }) => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [specificTopic, setSpecificTopic] = useState<string>('');

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme.id);
  };

  const handleTopicSubmit = () => {
    const theme = themes.find(t => t.id === selectedTheme);
    if (theme && specificTopic.trim()) {
      onThemeSelect(theme, specificTopic);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Escolha um tema para começar</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Card 
            key={theme.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              selectedTheme === theme.id 
                ? 'border-primary ring-2 ring-primary/20' 
                : 'hover:border-primary/50'
            }`}
            onClick={() => handleThemeSelect(theme)}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl">{theme.icon}</div>
              <div>
                <h3 className="font-bold">{theme.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{theme.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {selectedTheme && (
        <div className="mt-6 space-y-4">
          <div className="text-center">
            <p className="mb-2">Escreva um assunto específico sobre {themes.find(t => t.id === selectedTheme)?.title}:</p>
            <Input
              className="max-w-md mx-auto"
              value={specificTopic}
              onChange={(e) => setSpecificTopic(e.target.value)}
              placeholder="Ex: Reforma do ensino médio, políticas de saúde mental..."
            />
          </div>
          <div className="flex justify-center">
            <Button 
              className="px-8 py-2 font-medium"
              disabled={!specificTopic.trim()}
              onClick={handleTopicSubmit}
            >
              Gerar conteúdo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
