# KORA Table — Template Master de Restaurantes

Este branch transforma o projeto KORA Table numa base reutilizável para criar sites de restaurantes em Angola.

## Regra principal

**Não reconstruir do zero.** Para cada novo cliente, preservar a estrutura técnica e substituir apenas conteúdo, identidade, imagens e contactos.

## 1. Dados que devem ser recolhidos do cliente

- Nome comercial
- Slogan/posicionamento
- Cidade e bairro
- Endereço
- Telefone
- WhatsApp
- Email
- Horário
- Instagram/Facebook
- Link de localização/Google Maps
- Logo
- Cores preferidas
- Fotos reais
- Menu/carta
- Preços
- Serviços especiais
- Regras de reserva
- Eventos/entregas/take-away, se existirem

## 2. Estrutura padrão

### Home
1. Header
2. Hero + CTA principal
3. Proposta da casa
4. Destaques do menu
5. Experiência/ambiente
6. Galeria
7. Prova social — somente depoimentos reais autorizados
8. CTA final
9. Footer

### Menu
- Categorias
- Pratos
- Descrições
- Preços
- Destaques da casa

### Experiência
- Ambiente
- História/posicionamento
- Galeria
- Diferenciais

### Contacto
- WhatsApp
- Telefone
- Horário
- Endereço
- Google Maps/localização
- Instruções de reserva

## 3. Variáveis comerciais

Antes de iniciar um cliente, substituir:

`RESTAURANT_NAME`
`TAGLINE`
`CITY`
`ADDRESS`
`PHONE`
`WHATSAPP`
`EMAIL`
`OPENING_HOURS`
`MENU_CATEGORIES`
`MENU_ITEMS`
`MENU_PRICES`
`SOCIAL_LINKS`
`MAP_LINK`
`PRIMARY_COLOR`
`SECONDARY_COLOR`
`LOGO`
`IMAGES`

## 4. Regras de conteúdo

- Não inventar avaliações de clientes.
- Não inventar endereço, telefone ou localização de um cliente real.
- Não publicar preços sem confirmação.
- Não usar fotos de terceiros como se fossem fotos do cliente.
- Se faltar informação, usar uma solução visual neutra e marcar o campo para confirmação.
- Confirmar todos os dados antes da publicação.

## 5. Stack padrão

**Lovable → GitHub → Vercel**

Sem Supabase, autenticação, pagamentos ou APIs externas quando o site não precisar deles.

## 6. QA obrigatório antes da entrega

### Mobile
- [ ] Home abre
- [ ] Menu mobile funciona
- [ ] Todas as páginas abrem
- [ ] CTA principal funciona
- [ ] WhatsApp abre
- [ ] Telefone funciona
- [ ] Imagens carregam
- [ ] Texto não fica cortado
- [ ] Sem scroll horizontal

### Desktop
- [ ] Header correto
- [ ] Navegação correta
- [ ] Layout equilibrado
- [ ] Imagens corretas
- [ ] CTAs visíveis
- [ ] Footer correto

### Técnico
- [ ] Build sem erros
- [ ] Vercel em produção
- [ ] Rotas funcionando
- [ ] Links verificados
- [ ] Console sem erros críticos
- [ ] SEO title
- [ ] Meta description
- [ ] Favicon
- [ ] Open Graph básico
- [ ] Acessibilidade básica

## 7. Fluxo de produção

1. Pesquisa do negócio
2. Recolha de conteúdo
3. Escolha deste template
4. Prompt de adaptação
5. Implementação no Lovable
6. Revisão
7. GitHub
8. Vercel
9. QA
10. Aprovação do cliente
11. Entrega
12. Pedido de indicação/depoimento real

## 8. Regra de tempo

Meta:

- Pesquisa: 10–15 min
- Preparação de conteúdo: 10–15 min
- Adaptação: 25–40 min
- QA: 10–15 min

**Meta total: 60–90 min para uma landing page simples ou adaptação do template.**

Projetos com conteúdo incompleto, fotografia profissional, reservas avançadas, domínio personalizado ou integrações podem exigir mais tempo e orçamento.

## 9. Estrutura de preço inicial

### Landing
75.000 Kz

### Profissional
120.000 Kz

### Premium
150.000 Kz+

Custos externos, como domínio ou serviços pagos escolhidos pelo cliente, são separados.

## 10. Princípio de reutilização

Cada melhoria feita neste template deve beneficiar os próximos clientes.

Antes de alterar a estrutura, perguntar:

> Esta alteração serve apenas para este restaurante ou melhora o template para todos?

Se for reutilizável, incorporar no template master.

Se for específica, manter isolada no projeto do cliente.

---

**Objetivo:** transformar um site em uma linha de produção repetível, não em um projeto artesanal novo a cada venda.
