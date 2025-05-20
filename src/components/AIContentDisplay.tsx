
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
  onBack: () => void;
}

const AIContentDisplay: React.FC<AIContentDisplayProps> = ({ theme, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (theme) {
      generateContent(theme.title);
    }
  }, [theme]);

  const generateContent = async (themeTitle: string) => {
    setIsLoading(true);
    
    // Simulando o tempo de geração da IA
    setTimeout(() => {
      // Para simular uma resposta da IA, estamos gerando um conteúdo fixo baseado no tema
      const simulatedContent = getSimulatedContent(themeTitle);
      setContent(simulatedContent);
      setIsLoading(false);
      
      toast({
        title: "Conteúdo gerado!",
        description: `Artigo sobre ${themeTitle} pronto para leitura.`,
      });
    }, 2000);
  };

  const getSimulatedContent = (themeTitle: string): string => {
    // Conteúdo simulado para cada tema
    const contentMap: Record<string, string> = {
      'Educação': `
        # Reforma do Ensino Médio: O que muda na sua vida escolar?

        E aí, galera! Hoje vamos falar sobre algo que afeta diretamente a vida de milhões de estudantes: a Reforma do Ensino Médio.

        ## O que é essa tal reforma, afinal?
        
        Imagina que seu cardápio escolar, que antes era fixo, agora permite que você escolha parte das "refeições". Basicamente, a reforma divide o ensino médio em duas partes:
        
        1. **Formação Geral Básica**: as matérias que todo mundo precisa aprender, como português e matemática.
        2. **Itinerários Formativos**: áreas que você pode escolher para se aprofundar, de acordo com seus interesses e planos para o futuro.
        
        ## Como isso vai funcionar na prática?
        
        Você vai poder escolher entre algumas áreas para se aprofundar:
        - Linguagens
        - Matemática
        - Ciências da Natureza
        - Ciências Humanas
        - Formação Técnica e Profissional
        
        É como se fossem "especializações" dentro do ensino médio. Tipo escolher que tipo de aventura você quer seguir em um jogo!

        ## Quais são as vantagens?
        
        - Você não precisa estudar com a mesma intensidade matérias que não têm a ver com seus planos futuros
        - Mais chance de descobrir sua vocação antes da faculdade
        - Possibilidade de já sair do ensino médio com uma qualificação profissional
        
        ## E as críticas?
        
        Nem tudo são flores, né? Tem gente preocupada que:
        - Nem todas as escolas vão conseguir oferecer todos os itinerários
        - Pode aumentar a desigualdade entre escolas públicas e particulares
        - Alguns alunos podem se arrepender das escolhas feitas tão jovens
        
        ## O que isso significa para você?
        
        Se você está no ensino médio ou vai entrar em breve, prepare-se para ter mais poder de escolha sobre o que vai estudar. Mas com grandes poderes, vêm grandes responsabilidades! É importante pesquisar bem e pensar no seu futuro antes de escolher seu caminho.
        
        Ficou alguma dúvida? Deixa nos comentários! Vamos continuar essa conversa!
      `,
      'Saúde': `
        # SUS na Prática: Como acessar seus direitos à saúde pública?

        Fala, galera! Hoje vamos falar de algo super importante mas que muita gente não manja muito: como usar o SUS de verdade!

        ## O que é o SUS, na moral?
        
        O Sistema Único de Saúde não é só postinho de saúde ou hospital público. É um sistema GIGANTE que garante que todo brasileiro tenha direito a atendimento médico, vacinas, remédios e muito mais. E tudo isso sem precisar pagar diretamente por isso (já pagamos pelos impostos, né?).
        
        ## Quais serviços você pode usar (e talvez nem sabia)?
        
        - **Atenção Básica**: Os famosos postos de saúde, onde você pode tratar problemas simples, fazer acompanhamento contínuo e pegar encaminhamentos.
        
        - **SAMU**: Aquele 192 que a gente liga em emergências.
        
        - **Farmácia Popular**: Vários medicamentos gratuitos ou com desconto gigante.
        
        - **Atendimento Especializado**: Consultas com especialistas, quando encaminhado.
        
        - **Saúde Mental**: CAPS (Centros de Atenção Psicossocial) oferecem atendimento psicológico e psiquiátrico.
        
        ## Como acessar na prática?
        
        1. **Cartão do SUS**: É seu passaporte! Tire o seu em qualquer posto de saúde levando documentos e comprovante de residência.
        
        2. **Cadastre-se na UBS**: A Unidade Básica de Saúde (postinho) mais próxima da sua casa é seu ponto de partida.
        
        3. **App Conecte SUS**: Baixa aí! Dá para ver seu histórico de atendimentos, vacinas e até agendar algumas coisas.
        
        ## Direitos que você tem e pode não saber:
        
        - Se o SUS não tiver o tratamento que você precisa, em alguns casos pode ser obrigado a pagar tratamentos até fora do Brasil!
        
        - Acompanhante no hospital: gestantes, crianças e idosos têm direito garantido por lei.
        
        - Transporte gratuito para tratamento fora do seu município.
        
        ## Problemas do SUS (vamos ser realistas)
        
        - Filas longas para especialistas
        - Distribuição desigual de recursos 
        - Subfinanciamento crônico
        
        Mesmo assim, o SUS é um dos maiores sistemas de saúde pública do mundo! Em muitos países, galera fica endividada pra sempre por causa de uma cirurgia que aqui é gratuita.
        
        ## Como melhorar sua experiência:
        
        - Conhecer seus direitos
        - Participar dos conselhos locais de saúde
        - Denunciar irregularidades pelo Disque Saúde: 136
        
        E aí? Você já usou o SUS? Conta sua experiência nos comentários!
      `,
      'Meio Ambiente': `
        # Políticas Ambientais: Como elas afetam seu dia a dia sem você perceber?

        Opa! Beleza? Hoje vamos falar sobre algo que muita gente acha chato ou complicado, mas que influencia desde o ar que você respira até o preço do seu milkshake favorito: políticas ambientais!

        ## O que são políticas ambientais, afinal?

        São regras e ações criadas pelos governos para cuidar da natureza. Mas calma, não é só plantar árvores não! É um conjunto de leis, programas e decisões que afetam TUDO: economia, saúde, alimentação e até onde você pode construir sua casa.

        ## Como isso afeta sua vida sem você perceber:

        ### 1. No seu bolso 💰
        - Quando o governo dá incentivo para energia solar, sua conta de luz pode ficar mais barata a longo prazo
        - Taxas sobre produtos poluentes fazem alguns itens ficarem mais caros (mas também estimulam alternativas mais limpas)
        - Multas ambientais podem aumentar o preço dos produtos de empresas que não seguem as regras

        ### 2. Na sua saúde 🫁
        - Regras sobre qualidade do ar reduzem doenças respiratórias
        - Políticas de saneamento básico previnem várias doenças
        - Controle de agrotóxicos influencia o que vai parar no seu prato

        ## As polêmicas que você talvez veja no TikTok:

        ### Desenvolvimentistas vs. Ambientalistas
        Tipo aquele meme "você pode escolher apenas dois":
        - Crescimento econômico rápido
        - Proteção ambiental
        - Custo de vida baixo

        Na prática, o debate é: vale a pena abrir mão de algum crescimento econômico de curto prazo pela sustentabilidade a longo prazo?

        ### Questão indígena e reservas
        - Criar reservas protege ecossistemas importantes
        - Mas também limita certas atividades econômicas
        - O debate sobre direitos indígenas x expansão agrícola/mineradora é um dos mais quentes do momento

        ## Soluções inteligentes:

        ### Economia Verde
        Como crescer economicamente sem destruir o planeta:
        - Energias renováveis gerando empregos
        - Ecoturismo como fonte de renda
        - Técnicas agrícolas sustentáveis

        ## O que você pode fazer:

        1. Entender que seu voto afeta as políticas ambientais
        2. Consumir de forma consciente - as empresas prestam atenção quando o dinheiro muda de direção
        3. Participar de debates e consultas públicas locais

        Fala pra gente nos comentários: você já parou pra pensar como as políticas ambientais afetam sua vida no dia a dia?
      `,
      'Economia': `
        # Imposto de Renda para Iniciantes: Por que preciso pagar e para onde vai minha grana?

        Salve, galera! Hoje vamos descomplicar aquele assunto que ninguém explica direito na escola: o famoso Imposto de Renda (IR). Sem economês e sem dormir!

        ## O que é esse tal de IR?

        Basicamente, é aquele dinheiro que o governo pega de uma parte do que você ganha no ano. Quanto mais você ganha, maior a porcentagem que paga (sistema progressivo). Tipo, é um valor que aumenta em "degraus" de acordo com sua renda.

        ## Quem precisa declarar?

        Provavelmente você, se:
        - Ganhou mais de R$ 28.559,70 no ano
        - Vendeu algo grande tipo um apartamento ou carro com lucro
        - Tem bens (casa, carro, investimentos) que somam mais de R$ 300 mil
        - Teve ganhos isentos acima de R$ 40 mil

        Se você é MEI ou trabalha por conta própria, as regras são um pouquinho diferentes, mas o princípio é o mesmo.

        ## Para onde vai esse dinheiro?

        Aqui a conversa fica interessante! O seu dinheiro:
        - 21,5% vai para a Previdência Social (aposentadorias)
        - 18,5% para a Saúde (SUS)
        - 17,5% para Educação (escolas, universidades)
        - O resto se divide entre segurança, infraestrutura, pagamento da dívida pública...

        ## Por que tanta gente reclama?

        Vamos ser sinceros:
        - A gente paga muito imposto no Brasil (cerca de 33% do PIB)
        - Às vezes não vemos esse dinheiro voltando em serviços de qualidade
        - O sistema é complexo demais (temos mais de 90 impostos!)
        - Desigualdade: quem ganha mais com investimentos muitas vezes paga menos que quem trabalha

        ## Como seria um sistema melhor?

        Vários países têm sistemas mais simples e justos:
        - Menos impostos diferentes
        - Alíquotas ainda mais progressivas (super-ricos pagam mais)
        - Mais transparência no gasto público
        - Menos burocracia para pequenos negócios

        ## O que você precisa saber na prática:

        - Se você é CLT, o IR já é descontado todo mês (mas ainda precisa declarar)
        - Se você é autônomo, guarde 27,5% do que ganha para não ter surpresas
        - Use programas gratuitos da Receita Federal para declarar
        - Guarde recibos de gastos com saúde e educação (dão direito a deduções)

        Bora conversar: você já declarou IR alguma vez? Achou complicado? Tem alguma dúvida sobre como funciona? Comenta aqui!
      `,
      'Segurança Pública': `
        # Segurança Pública: Entre o Direito à Proteção e as Liberdades Individuais

        E aí, galera! Hoje vamos falar sobre um tema que gera debates acalorados em qualquer roda de conversa: segurança pública!

        ## O problema na real:

        O Brasil tem aproximadamente 40 mil homicídios por ano, o que coloca a gente entre os países mais violentos do mundo. Mas esse número tem caído nos últimos anos (cerca de 22% desde 2017). Mesmo assim, a sensação de insegurança continua altíssima!

        ## As diferentes visões:

        ### Linha "Mão Dura":
        - Defende penas mais longas
        - Mais policiais nas ruas
        - Menor idade penal
        - Leis menos restritivas para ação policial

        ### Linha "Preventiva":
        - Foca em educação e oportunidades
        - Polícia comunitária e de proximidade
        - Alternativas à prisão para crimes menores
        - Combate às causas da violência

        ## O que está em jogo:

        ### De um lado:
        - Direito à segurança e proteção
        - Punição justa aos crimes
        - Sensação de ordem pública

        ### Do outro:
        - Garantias fundamentais e direitos humanos
        - Prevenção vs. apenas punição
        - Risco de abusos de poder

        ## Estatísticas que você precisa conhecer:

        - O Brasil tem a 3ª maior população carcerária do mundo
        - Mais de 40% são presos provisórios (sem julgamento)
        - A taxa de reincidência é de cerca de 70%
        - Apenas 10% dos homicídios são solucionados

        ## Soluções que têm dado certo:

        1. **Fica Vivo (MG)**: Programa que reduziu homicídios em áreas vulneráveis combinando prevenção e repressão qualificada.

        2. **Pacto pela Vida (PE)**: Integração entre polícias e metas de redução de homicídios.

        3. **UPPs (RJ)**: Apesar dos problemas posteriores, inicialmente reduziram a violência em diversas comunidades.

        4. **Infância sem Prisão**: Programas que oferecem alternativas educativas para jovens em conflito com a lei.

        ## O que você pode fazer:

        - Se informar além das manchetes sensacionalistas
        - Cobrar políticas baseadas em evidências
        - Participar dos Conselhos Comunitários de Segurança
        - Votar em candidatos com propostas realistas e eficazes

        A segurança pública é responsabilidade de todos! Qual sua opinião sobre esse tema? Como equilibrar punição e prevenção? Vamos discutir nos comentários!
      `,
      'Tecnologia': `
        # Lei Geral de Proteção de Dados: Por que você deveria se importar com quem tem seus dados?

        Fala, turma! Hoje vamos falar sobre uma lei que parece chata, mas que na real está protegendo suas informações enquanto você assiste TikTok, joga online ou usa qualquer app: a LGPD!

        ## O que é a LGPD mesmo?

        É a Lei Geral de Proteção de Dados, inspirada na GDPR europeia, que entrou em vigor em 2020. Basicamente, ela define regras para empresas e governo sobre como seus dados pessoais podem ser coletados, usados e compartilhados.

        ## Por que isso importa pra você?

        Pensa assim: toda vez que você:
        - Cria uma conta em um app
        - Faz uma compra online
        - Preenche um formulário na internet
        - Usa GPS
        - Publica uma foto

        ...seus dados estão sendo coletados. E esses dados valem MUITO dinheiro!

        ## O que mudou na sua vida com a LGPD:

        ### 1. Aqueles pop-ups chatos de cookies
        São irritantes, mas agora você pelo menos pode escolher quais dados quer compartilhar!

        ### 2. Direito de saber o que têm sobre você
        Você pode pedir para qualquer empresa te mostrar TODOS os dados que ela tem sobre você. Chocante!

        ### 3. Direito ao esquecimento
        Sim, você pode pedir para apagarem seus dados (com algumas exceções).

        ### 4. Notificação sobre vazamentos
        Se uma empresa vazar seus dados, ela é OBRIGADA a te avisar.

        ## Os perigos reais:

        - **Manipulação comportamental**: Algoritmos podem prever e influenciar suas decisões
        - **Discriminação algorítmica**: Ser rejeitado para um emprego ou crédito com base em correlações duvidosas
        - **Vigilância constante**: Seu celular sabe onde você está 24/7

        ## O lado bom da tecnologia:

        - Serviços personalizados que facilitam sua vida
        - Descoberta de conteúdo relevante
        - Avanços na medicina e pesquisa com base em dados
        - Combate a fraudes e crimes

        ## Como se proteger na prática:

        1. Leia (pelo menos um pouco) os termos de privacidade
        2. Use senhas fortes e diferentes
        3. Verifique as permissões dos seus apps
        4. Desative rastreamento de localização quando não precisar
        5. Use VPN para navegação mais privada

        E aí, você já tinha pensado nisso antes? Ficou mais preocupado ou mais aliviado sabendo que existe uma lei para proteger seus dados? Comenta aqui!
      `
    };
    
    // Retornar o conteúdo correspondente ao tema ou um conteúdo genérico se não existir
    return contentMap[themeTitle] || `
      # Políticas Públicas de ${themeTitle}
      
      Este é um artigo gerado por IA sobre ${themeTitle}. Aqui exploramos as principais políticas públicas relacionadas a este tema e como elas afetam a vida dos jovens brasileiros.
      
      ## Principais aspectos
      
      As políticas públicas de ${themeTitle} enfrentam diversos desafios no Brasil atual. Entre os principais pontos que merecem atenção estão:
      
      1. Investimentos e recursos destinados à área
      2. Programas governamentais em vigor
      3. Desafios e oportunidades para os jovens
      4. Perspectivas futuras
      
      ## Como isso afeta você
      
      Para os jovens, essas políticas representam tanto oportunidades quanto desafios. É importante entender como essas decisões impactam seu dia a dia e seu futuro.
      
      ## O que pode ser melhorado
      
      Existem diversas propostas em discussão para aprimorar as políticas relacionadas a ${themeTitle}, incluindo maior participação da sociedade civil, transparência nos processos decisórios e foco em resultados de longo prazo.
    `;
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
      
      <Card className="w-full overflow-hidden">
        {isLoading ? (
          <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-pulse-slow text-6xl mb-4">🤖</div>
            <h3 className="text-xl font-medium mb-2">Gerando conteúdo...</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Nossa IA está trabalhando para criar um conteúdo incrível sobre {theme.title} em uma linguagem acessível e divertida!
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
              <Button onClick={() => generateContent(theme.title)}>
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
