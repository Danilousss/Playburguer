# Playburguer Delivery Web App

Este projeto consiste na criação de um site de delivery temático de Videogame e Pixel Art (Playburguer) usando React e Vite. O objetivo é permitir que os clientes naveguem pelo cardápio, adicionem itens ao "Inventário" (carrinho) e finalizem o pedido via WhatsApp de forma rápida e temática.

## User Review Required

- **Número do WhatsApp**: O link do WhatsApp usará um número genérico ("5511999999999"). Por favor, me informe o número real caso deseje integrá-lo agora ou poderei deixar como configuração no `.env`.
- **Placeholder das Imagens**: Vou utilizar cores sólidas e bordas pixeladas simulando placeholders no estilo retro.

## Proposed Changes

### Arquitetura de Pastas e Configuração
A estrutura proposta será focada na modularidade:
- `src/assets`: Fontes, imagens e estilos globais (importando 'Press Start 2P').
- `src/components`: Componentes visuais (`Header.jsx`, `ProductCard.jsx`, `ProductGrid.jsx`, `CartDrawer.jsx`, `CartItem.jsx`).
- `src/context`: `CartContext.jsx` para gerenciar estado global do "Inventário".
- `src/hooks`: `useCart.js` para facilitar consumo do context.
- `src/utils`: `whatsappHelper.js` para lidar com a formatação e redirecionamento.
- `src/data`: `products.js` contendo o cardápio mockado (Boss Burgers, Side Quests, Poções).

### Estilização e Design System (Tailwind CSS)
Configuração do `tailwind.config.js` para:
- Fonte primária: `'Press Start 2P', cursive`.
- Cores temáticas: Fundo escuro (ex: `#1a1a2e`), botões com detalhes neon (ciano `#00f3ff`, magenta `#ff003c`, amarelo retro `#ffea00`).
- Estilo: Sombras duras para simular botões arcade (`box-shadow: 4px 4px 0px #000`).

### Implementação dos Componentes
- **Context API (`CartContext`)**: Estado do carrinho, adicionar/remover itens, alterar quantidade.
- **`Header.jsx`**: Navbar fixa, busca textual em tempo real, links das categorias, ícone de inventário com contador.
- **`ProductGrid.jsx` & `ProductCard.jsx`**: Grid responsivo (CSS Grid) listando produtos. O card abre opções ("Sem cebola", etc) e botão de adicionar.
- **`CartDrawer.jsx`**: Menu lateral, lista os itens escolhidos, exibe o botão "Finalizar Missão" que chama o `whatsappHelper`.
- **`whatsappHelper.js`**: Função que pega o array de itens do carrinho, constrói a string formatada temática, codifica e redireciona via `window.open`.

## Verification Plan

### Testes Manuais
- Verificar se a fonte 'Press Start 2P' está sendo carregada corretamente.
- Testar a filtragem de produtos na barra de busca.
- Adicionar itens com opções ao carrinho e verificar se as quantidades são somadas corretamente caso seja o mesmo item+opção.
- Abrir o "Inventário", modificar quantidades e remover itens.
- Clicar em "Finalizar Missão" e garantir que a string montada no link do WhatsApp corresponde exatamente à formatação especificada e calcula o preço total correto.
