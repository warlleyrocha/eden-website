<h1 align="center">Éden Website</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Astro&message=6.1.9&color=FF5D01&style=for-the-badge&logo=astro"/>
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=5.9.3&color=3178C6&style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/static/v1?label=Node.js&message=22.12%2B&color=339933&style=for-the-badge&logo=nodedotjs"/>
</p>

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Arquitetura](#arquitetura)

:small_blue_diamond: [Estrutura de pastas](#estrutura-de-pastas)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Scripts disponíveis](#scripts-disponíveis)

:small_blue_diamond: [Build e deploy](#build-e-deploy)

:small_blue_diamond: [Tecnologias utilizadas](#tecnologias-utilizadas-books)

:small_blue_diamond: [Desenvolvedor](#desenvolvedor-octocat)

---

## Descrição do projeto

<p align="justify">
  O Éden Website é o site institucional da Éden Technologies, construído com Astro e TypeScript, com foco em performance, SEO e experiência visual moderna.
</p>

<p align="justify">
  O projeto possui página principal em português e versão em inglês, com conteúdo traduzido via camada de traduções, layout compartilhado e componentes de seções modularizados para facilitar manutenção e evolução do design.
</p>

---

## Funcionalidades

:heavy_check_mark: Página institucional em duas línguas (`pt` e `en`)

:heavy_check_mark: SEO base com metatags Open Graph, Twitter e JSON-LD

:heavy_check_mark: Layout global centralizado com `<slot />` para conteúdo de páginas

:heavy_check_mark: Header com navegação por seções e alternância de idioma

:heavy_check_mark: Seções da home isoladas em componentes (`Hero`, `Services`, `About`, etc.)

:heavy_check_mark: Estilos modularizados por componente com `<style>` scoped do Astro

:heavy_check_mark: `global.css` enxuto, mantendo apenas tokens, base e utilitários compartilhados

:heavy_check_mark: Build estático com geração de rotas para `/` e `/en/`

---

## Arquitetura

O projeto adota uma organização por camadas simples e objetiva:

- `pages` para rotas
- `layouts` para estrutura base de documento
- `components` para UI reutilizável e seções de página
- `translations` para textos por idioma
- `styles` para estilos globais compartilhados

---

## Estrutura de pastas

```text
src/
├── components/
│   ├── Header.astro
│   ├── Home.astro
│   └── home/
│       ├── About.astro
│       ├── Background.astro
│       ├── Cases.astro
│       ├── Cta.astro
│       ├── Footer.astro
│       ├── Hero.astro
│       ├── Pricing.astro
│       ├── Services.astro
│       ├── Stack.astro
│       └── Team.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── en/
│       └── index.astro
├── styles/
│   └── global.css
└── translations/
    └── index.ts
```

---

## Pré-requisitos

:warning: [Node.js 22.12+](https://nodejs.org/en/download)

:warning: npm (instalado junto com o Node.js)

---

## Como rodar a aplicação :arrow_forward:

### 1. Clone o repositório

```bash
git clone https://github.com/warlleyrocha/eden-website
cd eden-website
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em desenvolvimento

```bash
npm run dev
```

O servidor sobe em `http://localhost:4321`.

---

## Scripts disponíveis

| Script              | O que faz                                                |
| ------------------- | -------------------------------------------------------- |
| `npm run dev`       | Inicia o servidor de desenvolvimento do Astro            |
| `npm run build`     | Gera build estático em `dist/`                           |
| `npm run preview`   | Sobe preview local do build de produção                  |
| `npm run typecheck` | Executa checagem de tipos com `astro check`              |
| `npm run ci`        | Executa validação completa (`typecheck` + `build`)       |
| `npm run astro`     | Executa comandos diretos da CLI do Astro                 |

---

## Build e deploy

Para validar produção localmente:

```bash
npm run build
npm run preview
```

O output final é estático e fica em `dist/`, pronto para deploy em provedores compatíveis com sites estáticos.

---

## Tecnologias utilizadas :books:

| Tecnologia | Uso |
| --- | --- |
| [Astro](https://astro.build/) | Framework principal do site |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [CSS (scoped + global)](https://developer.mozilla.org/pt-BR/docs/Web/CSS) | Estilização da interface |
| [Node.js](https://nodejs.org/) | Ambiente de execução e build |

---

## Desenvolvedor

| [<img src="https://github.com/warlleyrocha.png" width=115><br><sub>Warlley Rocha</sub>](https://github.com/warlleyrocha) |
| :----------------------------------------------------------------------------------------------------------------------: |
