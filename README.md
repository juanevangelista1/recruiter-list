# 🔗 Recruiter List Manager

A modern web application built with Next.js to streamline the process of managing and tracking LinkedIn recruiter contacts from CSV files. It helps professionals organize their networking efforts by logging interactions locally.

## ✨ Features

- **CSV Import:** Intuitive interface to upload and parse CSV files containing LinkedIn profile links.
- **Interaction Tracking:** Logs when a recruiter profile has been visited using the browser's `localStorage` for persistence.
- **Visual Status:** Provides immediate feedback with dynamic button changes ("Open on LinkedIn" -> "Request Sent").
- **Modern Stack:** Built on top of Next.js 15, React 19, and Tailwind CSS.
- **SEO Ready:** Optimized metadata for better visibility.

## 🛠️ Technology Stack

- **Next.js 15 (App Router):** Hybrid rendering framework.
- **TypeScript:** For strong typing and code maintainability.
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **PapaParse:** Efficient library for robust CSV parsing on the client-side.
- **React Hooks:** Utilized for state management and custom logic separation (e.g., local persistence).

## 💡 Architectural Principles & Improvements (For Mentorship)

The project architecture is structured around components. To maximize performance, maintainability, and scalability, future development should prioritize the following principles:

| Principle                       | Improvement Area                                                                                                         | Actionable Suggestion                                                                                                                                                                         |
| :------------------------------ | :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Single Responsibility (SRP)** | **CSV Parsing & File Handling:** The `FileUploader` component currently handles file reading, parsing, and data mapping. | **Refactor:** Extract the `PapaParse` logic into a dedicated custom hook (e.g., `useCsvParser`), leaving the `FileUploader` solely responsible for UI and file selection.                     |
| **Separation of Concerns**      | **Local Storage Logic:** The `RecruiterItem` directly interacts with the browser's `localStorage` API.                   | **Refactor:** Implement a custom hook (e.g., `useRecruiterTracking`) to manage the persistent state for each recruiter. This makes the UI component purely presentational and easier to test. |
| **Open/Closed Principle (OCP)** | **Data Structures:** Define shared types (e.g., `Recruiter` interface) in a single, dedicated location (`src/types/`).   | **Action:** Centralize all key interfaces/types to prevent circular dependencies and improve maintainability (DRY).                                                                           |
| **Performance**                 | **Large Lists:** The current list rendering method can become slow with thousands of entries.                            | **Enhance:** Introduce list virtualization/windowing (e.g., with `react-window`) in `RecruiterList` to render only visible items, significantly boosting performance.                         |

## 🚀 Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone [your-repo-link]
   cd recruiter-list
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   _(Requires Node.js 18+)_

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

1. **Prepare your CSV file:** Ensure it has at least one column containing the full LinkedIn profile URLs.
2. **Upload:** Click the "Upload file" button and select your CSV.
3. **Track:** Click "**Abrir no LinkedIn**" (Open on LinkedIn) for a profile. The button state will automatically update to "**Solicitação Enviada**" (Request Sent) and persist in your browser's local storage.

## 🤝 Contributing

Contributions are highly welcome! Please refer to the architectural suggestions above for potential areas of improvement, such as implementing a proper **Virtualization** for `RecruiterList` or extracting persistence logic into a custom hook.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/my-awesome-feature`).
3. Commit your changes.
4. Push to the branch (`git push origin feature/my-awesome-feature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

# Recruiter List

Recruiter List é uma aplicação web moderna desenvolvida com Next.js que simplifica o gerenciamento de contatos de recrutadores do LinkedIn. A ferramenta permite importar links de recrutadores através de arquivos CSV, facilitando o processo de networking e acompanhamento de interações.

## ✨ Funcionalidades

- **Upload de Arquivos CSV**: Interface intuitiva para importar arquivos CSV contendo links do LinkedIn
- **Gerenciamento de Links**: Visualização organizada dos links de recrutadores
- **Controle de Interações**:
  - Botões que mudam de estado após a interação
  - Persistência das interações no localStorage
  - Indicador visual de perfis já visitados
- **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos
- **SEO Otimizado**: Metadados configurados para melhor visibilidade em mecanismos de busca

## 🛠️ Stack Tecnológica

- **Next.js 14**: Framework React com renderização híbrida
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade
- **Tailwind CSS**: Estilização moderna e responsiva
- **PapaParse**: Parser eficiente para arquivos CSV
- **Geist Font**: Tipografia moderna e legível

## 🚀 Como Usar

1. **Preparação do Arquivo CSV**:

   - Crie um arquivo CSV com uma coluna contendo os links do LinkedIn
   - Cada linha deve conter um link válido do LinkedIn

2. **Importação**:

   - Acesse a aplicação
   - Clique no botão "Faça o upload de um arquivo .csv"
   - Selecione seu arquivo CSV

3. **Gerenciamento**:
   - Os links serão exibidos em uma lista organizada
   - Clique em "Abrir no LinkedIn" para acessar o perfil
   - O botão mudará para "Solicitação Enviada" após a interação

## 💻 Desenvolvimento

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/recruiter-list.git
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Acesse** `http://localhost:3000`

## 🔧 Estrutura do Projeto

```
src/
├── app/                 # Configurações e layouts da aplicação
├── components/          # Componentes React reutilizáveis
│   ├── fileUploader/   # Componente de upload de arquivos
│   ├── recruiterItem/  # Item individual de recrutador
│   └── recruiterList/  # Lista de recrutadores
└── styles/             # Estilos globais
```

## 🤝 Contribuindo

O projeto está aberto para contribuições! Algumas áreas que podem ser melhoradas:

- [ ] Adicionar suporte para mais formatos de arquivo (Excel, Google Sheets)
- [ ] Implementar sistema de categorização de recrutadores
- [ ] Adicionar funcionalidade de exportação de dados
- [ ] Criar sistema de tags para organizar contatos
- [ ] Implementar autenticação de usuários
- [ ] Adicionar estatísticas de interação
- [ ] Melhorar a acessibilidade
- [ ] Adicionar testes automatizados

Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ para facilitar o networking profissional. Contribuições são sempre bem-vindas!

```

```
