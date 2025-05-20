
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
  onThemeSelect: (theme: Theme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeSelect }) => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme.id);
    onThemeSelect(theme);
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
        <div className="mt-6 flex justify-center">
          <Button 
            className="px-8 py-2 font-medium"
            onClick={() => onThemeSelect(themes.find(t => t.id === selectedTheme)!)}
          >
            Gerar conteúdo
          </Button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
