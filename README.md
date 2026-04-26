# 🏋️‍♀️ Anilheiro

**Calculadora de Peso para Levantamento de Peso Olímpico (LPO)**

Um aplicativo React moderno para calcular o peso total de uma barra de LPO de acordo com as anilhas selecionadas. Desenvolvido especificamente para o contexto de CrossFit e levantamento de peso olímpico.

## ✨ Funcionalidades

- **Seleção de Barra**: Escolha entre barra feminina (15kg) e masculina (20kg)
- **Anilhas Olímpicas**: Suporte para todos os pesos padrão (1kg a 25kg)
- **Cores Realistas**: Cada anilha exibe a cor oficial da IWF (International Weightlifting Federation)
- **Conversão Automática**: Exibe pesos em kg e lb simultaneamente
- **Interface Intuitiva**: Botões +/- para adicionar/remover pares de anilhas
- **Totalizador Destacado**: Peso total com destaque visual
- **Botão Limpar**: Reset rápido mantendo apenas o peso da barra
- **Design Responsivo**: Otimizado para desktop e mobile

## 🎨 Design

- Tema escuro inspirado no ambiente de levantamento de peso
- Cores douradas e vermelhas para destaques
- Tipografia forte e moderna
- Cores das anilhas baseadas nos padrões olímpicos reais:
  - 25kg → Vermelho
  - 20kg → Azul
  - 15kg → Amarelo
  - 11.3kg → Verde
  - 10kg → Verde
  - 5kg → Branco/Cinza
  - 4.5kg → Preto
  - 2.2kg → Azul claro
  - 1kg → Preto

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Styled Components** - Estilização
- **React Router Dom** - Roteamento (HashRouter para GitHub Pages)

## 🛠️ Como Rodar Localmente

### Pré-requisitos

- Node.js (versão 18+)
- Yarn ou NPM

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/anilheiro.git

# Entre na pasta do projeto
cd anilheiro

# Instale as dependências
yarn install
# ou
npm install

# Inicie o servidor de desenvolvimento
yarn dev
# ou
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 📦 Build e Deployment

### Build para produção

```bash
yarn build
# ou
npm run build
```

### Publicar no GitHub Pages

1. **Configure o repositório no GitHub**
2. **Habilite GitHub Pages** nas configurações do repositório
3. **Deploy automático**:

```bash
yarn deploy
# ou
npm run deploy
```

O aplicativo será publicado em: `https://seu-usuario.github.io/anilheiro/`

### Configuração para GitHub Pages

O projeto já está configurado para GitHub Pages:

- `vite.config.ts` com `base: '/anilheiro/'`
- `HashRouter` para compatibilidade com roteamento estático
- Script `predeploy` e `deploy` no `package.json`
- Dependência `gh-pages` para deployment automatizado

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── BarSelector/          # Seletor de tipo de barra
│   │   ├── BarSelector.tsx
│   │   └── BarSelector.styles.ts
│   ├── PlateRow/            # Linha individual de anilha
│   │   ├── PlateRow.tsx
│   │   └── PlateRow.styles.ts
│   └── TotalDisplay/        # Exibição do peso total
│       ├── TotalDisplay.tsx
│       └── TotalDisplay.styles.ts
├── constants/               # Constantes da aplicação
│   └── index.ts
├── types/                   # Definições TypeScript
│   └── index.ts
├── styles/                  # Estilos globais
│   └── GlobalStyles.ts
├── App.tsx                  # Componente principal
├── App.styles.ts            # Estilos do App
└── main.tsx                 # Ponto de entrada
```

## 🔧 Personalização

Para adicionar ou remover anilhas, edite o array `PLATE_WEIGHTS` em `src/constants/index.ts`:

```typescript
export const PLATE_WEIGHTS = [1, 2.2, 4.5, 5, 10, 11.3, 15, 20, 25] as const;
```

As cores das anilhas podem ser ajustadas em `PLATE_COLORS` no mesmo arquivo.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

🏋️‍♂️ **Happy Lifting!** 🏋️‍♀️