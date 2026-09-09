# Configuração — PGE-SP: A Travessia (Cartas-Problema)

## 1. Criar/usar um projeto Firebase
1. Acesse https://console.firebase.google.com
2. Crie um novo projeto (recomendado: um projeto novo, separado do PGE em Campo 2026)
3. No menu lateral, ative:
   - **Firestore Database** → criar banco em modo produção
   - **Authentication** → aba "Sign-in method" → ativar **E-mail/senha**

## 2. Criar o usuário da administração
Em Authentication → Users → "Add user", crie um e-mail e senha
para quem vai acessar o `admin.html` (pode ser você mesmo, ou um
e-mail genérico da organização do evento). Pode criar mais de um.

## 3. Publicar as regras de segurança
No Firestore → aba "Regras", cole o conteúdo do arquivo
`firestore.rules` (junto desta entrega) e publique.

Essas regras fazem duas coisas:
- Deixam **qualquer pessoa gravar** uma resposta (o formulário público
  não exige login dos grupos), mas exigem que os campos essenciais
  estejam preenchidos.
- **Bloqueiam leitura, edição e exclusão** para quem não estiver
  logado — só a administração (autenticada no `admin.html`) consegue
  ver as respostas.

## 4. Pegar as credenciais do app web
Em Configurações do projeto (ícone de engrenagem) → "Seus apps" →
"</>" (Web) → registre um app (não precisa de Hosting).
Copie o objeto `firebaseConfig` gerado.

## 5. Colar a configuração nos dois arquivos
Abra **tanto `index.html` quanto `admin.html`** e substitua o bloco:

```js
const firebaseConfig = {
  apiKey: "COLOQUE_AQUI",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.firebasestorage.app",
  messagingSenderId: "COLOQUE_AQUI",
  appId: "COLOQUE_AQUI"
};
```

pelo objeto real que o Firebase te deu. **Os dois arquivos precisam
ter o mesmo config**, porque apontam para o mesmo banco.

## 6. Publicar no GitHub Pages
Suba estes 3 arquivos para o mesmo repositório/pasta:
- `index.html` (público — é o link que vai para os grupos)
- `admin.html` (privado — link separado, protegido pelo login)
- `dados-cartas.js` (os dois arquivos acima dependem dele)

Ative o GitHub Pages normalmente (mesmo esquema usado no PGE em
Campo 2026). Depois de publicado, os links ficam:
- `https://SEU-USUARIO.github.io/SEU-REPO/index.html`
- `https://SEU-USUARIO.github.io/SEU-REPO/admin.html`

## 7. Testar antes do evento
- Abra o `index.html`, escolha um eixo, digite a senha (o nome do
  eixo), preencha uma carta de teste e envie.
- Abra o `admin.html`, faça login, confira se a resposta de teste
  aparece na Carta certa e se o modo telão mostra tudo direito.
- Depois apague esse documento de teste direto no Firestore
  (console do Firebase → Firestore Database → coleção `respostas`).

## Sobre a resiliência de rede
O `index.html` ativa a persistência offline do Firestore. Se a
internet cair no meio do envio, a resposta fica guardada no aparelho
e sincroniza sozinha assim que a conexão voltar — sem precisar
reenviar. A mensagem que aparece para o usuário nesse caso é clara
sobre isso, em vez de um genérico "sem internet".
