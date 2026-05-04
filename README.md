# 🏋️‍♀️ Anilheiro

**Calculadora de Peso para Levantamento de Peso Olímpico (LPO)**

Um aplicativo para calcular o peso total de uma barra de LPO de acordo com as anilhas selecionadas. Desenvolvido especificamente para o contexto de CrossFit e levantamento de peso olímpico.

## ✨ Funcionalidades

- **Seleção de Barra**: Escolha entre barra feminina (15kg) e masculina (20kg)
- **Anilhas Olímpicas**: Suporte para todos os pesos padrão (1kg a 25kg)
- **Cores Realistas**: Cada anilha exibe a cor oficial da IWF (International Weightlifting Federation)
- **Conversão Automática**: Exibe pesos em kg e lb simultaneamente
- **Interface Intuitiva**: Botões +/- para adicionar/remover pares de anilhas
- **Totalizador Destacado**: Peso total com destaque visual
- **Botão Limpar**: Reset rápido mantendo apenas o peso da barra
- **Design Responsivo**: Otimizado para desktop e mobile

## 🚀 Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Styled Components**

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

## 🔧 Personalização

Para adicionar ou remover anilhas, edite o array `PLATE_WEIGHTS` em `src/constants/index.ts`:

```typescript
export const PLATE_WEIGHTS = [1, 2, 2.2, 4.5, 5, 10, 11.3, 15, 20, 25] as const;
```

As cores das anilhas podem ser ajustadas em `PLATE_COLORS` no mesmo arquivo.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

🏋️‍♂️ **Happy Lifting!** 🏋️‍♀️