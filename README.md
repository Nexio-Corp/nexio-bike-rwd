# Projeto Nexio bike

## Acesso as telas

No menu principal temos acesso as paginas [Home(Logo da porto), Como funciona, Planos, Duvidas Frequentes, Equipe e Login], por meio dos links no header

Dentro do login temos acesso a pagina de cadastro por meio do link no canto inferior do formulário, e podemos voltar a pagina principal pela seta no canto superior esquerdo do formulário

Na pagina principal temos acesso ao botão começar que nós leva a pagina de cadastro de bike caso estejamos logados ou caso não tenhamos login ela nos redireciona para a pagina de cadastro

Na pagina de cadastro de bike após preenchermos nosso cadastro da bike temos acesso a pagina de vistoria da bike

## Uso das APIS

Para utilizarmos APIs no nosso projeto devemos iniciar os servidores locais das seguintes apis:

- <https://github.com/Nexio-Corp/flask-ai-porto> - Api de python que faz o processamento das imagens, seguir as instruções no readme do projeto em questão para iniciar a API _\*Nota - O frontend espera que essa api esteja rodando na porto 8000\*_
- <https://github.com/Nexio-Corp/porto-java> - Api de java que conecta com o banco de dados, deve-se clonar o repositório e dentro do eclipse, baixe as dependências do maven e inicie o servidor tomcat (_Versão 10.1.13_), espera-se que o endpoint do servidor tenha <http://localhost:8080/portoapi> como base.
