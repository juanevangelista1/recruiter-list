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
