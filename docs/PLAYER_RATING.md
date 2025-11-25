# Sistema de Avaliação de Jogadores

## Funcionalidades Implementadas

### 1. Modal de Edição de Jogador (PlayerEditModal)

- **Controles de gols e assistências** com botões +/-
- **Botão "Avaliar desempenho"** que abre o modal de rating
- Estilo verde para salvar, amarelo/dourado para avaliar

### 2. Modal de Avaliação (PlayerRatingModal)

- **6 atributos avaliáveis:**
  - Ritmo (Pace)
  - Finalização (Shooting)
  - Passe (Passing)
  - Drible (Dribbling)
  - Defesa (Defending)
  - Físico (Physical)

- **Sliders com gradiente de cores:**
  - Vermelho (0-25): Ruim
  - Laranja (25-50): Mediano
  - Amarelo (50-75): Bom
  - Verde (75-100): Excelente

- **Overall calculado automaticamente** como média dos 6 atributos
- **Valores iniciais** começam nos atributos atuais do jogador
- **Design intuitivo** com valores grandes e visíveis

### 3. Fluxo de Uso

```
1. Usuário clica em um jogador na aba "Resumo" de um jogo
   ↓
2. Abre o Modal de Edição (gols/assistências)
   ↓
3. Usuário clica em "Avaliar desempenho"
   ↓
4. Abre o Modal de Avaliação (atributos com sliders)
   ↓
5. Usuário ajusta cada atributo de 0-100
   ↓
6. Overall é calculado automaticamente
   ↓
7. Usuário salva a avaliação
```

### 4. Estrutura de Dados

```typescript
interface PlayerAttributes {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

interface Player {
  id: number;
  name: string;
  avatar: string;
  goals?: number;
  assists?: number;
  attributes?: PlayerAttributes;
  rating?: number;
}
```

### 5. Componentes Criados

- **`PlayerEditModal`**: Modal para editar gols e assistências
- **`PlayerRatingModal`**: Modal para avaliar atributos do jogador
- Integração completa com o sistema de jogos existente

### 6. Design e UX

- **Cores consistentes** com o tema verde (#10b981) do app
- **Sliders coloridos** para indicar qualidade do atributo
- **Botões grandes e responsivos** com animações
- **Overall em destaque** com ícone de estrela dourada
- **Sticky headers/footers** no modal de rating para facilitar navegação
- **Z-index apropriado** (1100) para sobrepor outros modais

### 7. Traduções (i18n)

Todas as strings estão em português via `texts.ts`:

- Títulos e labels dos modais
- Nomes dos atributos
- Descrições e instruções
- Botões de ação

## Como Testar

1. Navegue para a aba "Jogos"
2. Clique em um jogo concluído (status "Concluído")
3. Vá para a aba "Resumo"
4. Clique em qualquer jogador da lista
5. No modal que abrir, clique em "Avaliar desempenho"
6. Ajuste os sliders de cada atributo
7. Observe o Overall sendo calculado em tempo real
8. Clique em "Salvar avaliação"

## Benefícios

✅ Sistema completo de avaliação pós-jogo
✅ Valores iniciais baseados nos atributos atuais do jogador
✅ Interface intuitiva com feedback visual imediato
✅ Cálculo automático de overall
✅ Design responsivo e acessível
✅ Integração perfeita com o fluxo existente
