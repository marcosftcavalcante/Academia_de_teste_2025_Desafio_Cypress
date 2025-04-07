#utf-8
#language: pt

Funcionalidade: Cotação de seguro para veículos
     Cenário: Cotação de seguro para carro (Automobile)
         Dado que estou na home page
         Quando clico em Automobile
         E preencho a aba vehicle
         E preencho a aba insurant data
         E preencho a aba product data
         E seleciono o price option
         E preencho a aba send quote
         E clico em send
         Então valido o envio da quota


    Cenário: Campo engine performance com valor invalido
        Dado que estou na home page
        Quando clico em Automobile
        E preencho engine performance invalido
        Então devo ver a mensagem Valor inválido