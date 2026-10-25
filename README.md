# Navalha & Co.

Landing page demonstrativa de uma barbearia no Batel, Curitiba. Next.js App Router, TypeScript e Tailwind CSS, sem UI kit.

## Rodar

Node.js 20.9+ (recomendado: 22).

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Para produção: `npm run build && npm start`. Verificações: `npm run lint` e `npm run typecheck`.

## Trocar o conteúdo

Edite **`content/site.ts`**: marca, textos, preços, mensagens por serviço, equipe, fotos/alt, depoimentos, horários, endereço e mapa. `WHATSAPP_NUMBER` contém o telefone placeholder `5541999999999`, também usado no crédito de Anderson; substitua-o antes de receber contatos reais. `site.url` deve ser o domínio final, usado no canonical, Open Graph, sitemap e JSON-LD. Cada seção está em `components/`. Estilos e cores estão em `app/globals.css`.

As fotos usam URLs do Unsplash autorizadas em `next.config.ts`. Fontes Oswald e Manrope são servidas por `next/font`; o primeiro build requer acesso ao Google Fonts. Sem variáveis de ambiente obrigatórias.

## Deploy na Vercel

1. Envie este projeto ao repositório GitHub.
2. Importe o repositório na Vercel e mantenha o preset Next.js, raiz do projeto e comandos padrão.
3. Ajuste `site.url` para o domínio atribuído e publique novamente.

## Observações

O estabelecimento, endereço, profissionais e depoimentos são fictícios; as fotos são ilustrativas. O mapa incorporado abre diretamente e mostra o bairro, não uma loja real. Não há agenda ou envio automático de mensagens: os links abrem o WhatsApp com o texto preenchido. O JSON-LD usa HairSalon e deriva horários/ofertas do conteúdo; não publica avaliações fictícias como notas estruturadas.

Animação sutil da galeria via CSS scroll timeline, com fallback estático e respeito a `prefers-reduced-motion`. Layout mobile first, foco visível, link de salto e imagens otimizadas com `next/image`. Lighthouse deve ser medido no build de produção; o mapa de terceiros e a conexão afetam as notas.

## Validação local

Build, ESLint e TypeScript passaram. Chrome/Playwright: 320, 390, 768 e 1440 px sem overflow horizontal; links de WhatsApp com serviço/preço, imagens, teclado, link de salto, movimento reduzido e JSON-LD verificados. Mapa confirmado visualmente ao entrar na seção, sem clique.

Lighthouse mobile no build de produção, execução final isolada: **Performance 95, Acessibilidade 100, Boas Práticas 100, SEO 100**. Relatório: `reports/lighthouse-mobile.html`. Uma execução concorrente com capturas marcou Performance 62; as notas variam com carga da máquina, rede e mapa externo. Revalidar no domínio publicado.

Os scripts usam Webpack porque o Turbopack apresentou uma falha ao criar processos internos neste ambiente. A porta padrão é 3000; se estiver ocupada, Next escolhe outra e informa no terminal.

Melhorias para um cliente real: fotos próprias, depoimentos autorizados, telefone/endereço/domínio reais e mensuração de cliques no WhatsApp. Deploy e envio ao GitHub não fazem parte desta validação local.
