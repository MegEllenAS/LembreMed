# LembreMed

O aplicativo LembreMed foi desenvolvido com o objetivo de ajudar usuários a se organizarem com os horários de seus remédios oferecendo uma interface simples prática e funcional

## Sobre o Projeto

O LembreMed é um app mobile criado em React Native com foco em lembrar o usuário de tomar seus medicamentos nos horários cadastrados

Durante o desenvolvimento a organização das telas seguiu uma estrutura limpa e modular com os estilos separados em arquivos próprios para facilitar a manutenção

## Funcionalidades

Cadastrar nome e horário do remédio  
Listar todos os remédios cadastrados  
Remover remédios da lista  
Navegar entre telas com facilidade  
Tela de boas vindas ao iniciar o app  

## Tecnologias Utilizadas

React Native  
JavaScript  
React Navigation  
Estilização com arquivos separados usando StyleSheet  
Gerenciamento de estado com useState  
useEffect e navegação com useIsFocused

## Organização do Projeto

Appjs gerencia a navegação entre as telas  
BoasVindasScreenjs tela inicial com nome do app imagem e botão para começar  
CadastroScreenjs formulário de cadastro de usuário  
LoginScreenjs tela inicial com opção de entrar ou cadastrar sem autenticação funcional por enquanto  
TelaPrincipalScreenjs lista todos os remédios adicionados com opção de remover  
AdicionarRemedioScreenjs formulário para adicionar um novo remédio com nome e horário  
RemedioServicejs simula um banco de dados local usando um array  

## Como rodar o projeto

Clone o repositório com o comando git clone  
Entre na pasta do projeto e instale as dependências com npm install  
Execute o projeto com npm start  
Utilize um emulador ou o aplicativo Expo Go para testar no celular

## Equipe

O projeto foi feito em grupo com cinco pessoas  
A maior parte do desenvolvimento do aplicativo incluindo as telas e a lógica principal foi feita por mim Megue Ellen  
Outros colegas contribuíram com o banner apresentação identidade visual e apoio em funcionalidades futuras  

## Status do Projeto

Projeto finalizado para fins de apresentação acadêmica  
Futuramente o app poderá incluir envio de notificações  
autenticação com login e senha  
e funcionalidade para incluir imagens dos remédios
