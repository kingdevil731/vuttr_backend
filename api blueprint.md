FORMAT: 1A
HOST: https://vuttr-back-end.herokuapp.com/

# Vuttr Api
Vuttr api é uma api simples que permite ao consumidor/usuario verificar ferramentas que são muito utéis para se lembrar.
# Group Ferramentas
Recursos relacionados a ferramentas na api.
## Ferramenta [/tools]
### listar todas as ferramentas [GET]
A requesição ira listar todas as ferramentas na base de dados, a resposta será em formato json
+ Response 200 (application/json)

        [
            {
                "tags": [
                "vs",
                "vs code",
                "visual studio code",
                "editor",
                "ide"
                ],
                "_id": "5f4508caffd8dc3e989e11ba",
                "title": "vs code",
                "link": "https://github.com/gita",
                "description": "IDE intuitivo e util para varias linguagens, leve de correr no computador.",
                "__v": 0
            }
        ]

### Criar uma nova Ferramenta [POST]
Podes criar uma nova Ferramenta usando esta acção. ele recebe um Objecto JSON contendo o nome, link, descrição, e as tags que podem identificar o mesmo.
+ title: (string) - o nome da ferramenta
+ link: (string) - o endereço da pagina da ferramenta
+ description: (string) - a descrição da ferramenta
+ tags:(array[string]) - a coleção de tags que identificam a ferramenta

+ Request  (application/json)

            {
                "title": "vs code",
                "link": "https://github.com/gita",
                "description": "IDE intuitivo e util para varias linguagens, leve de correr no computador.",
                "tags": [
                    "vs",
                    "vs code",
                    "visual studio code",
                    "editor",
                    "ide"
                ]
            }
+ Response 201 (application/json)

    + Headers

            X-Powered-By: Express
            Access-Control-Allow-Origin: *
            Content-Length: 244
            ETag: W/"f4-/0/LBabFvd8QZN8MNRCrZyB2+4M"
            Date: DayOfWeek, date month year hour:min:sec TimeZone
            Connection: keep-alive

    + Body

                {
                "tags": [
                    "vs",
                    "vs code",
                    "visual studio code",
                    "editor",
                    "ide"
                ],
                "_id": "5f4508caffd8dc3e989e11ba",
                "title": "vs code",
                "link": "https://github.com/gita",
                "description": "IDE intuitivo e util para varias linguagens, leve de correr no computador.",
                "__v": 0
                }
                
### Remover Ferramenta [DELETE/tools/{id}]
Remover uma ferramenta da base de dados, passando um id unico da ferramenta no link/route.
+ {id} - id unico da ferramenta ( _id ) 

+ Parameters
    + id: 5f44ad548204481a6498ed4a (required, String) - Id da questão em forma de String


+ Response 204

# Group Usuarios
Recursos relacionados a usuarios na api.

## Usuario [/auth]

### Criar um novo Usuario[POST]
Podes criar um novo usuario usando esta acção. ele recebe um Objecto JSON contendo o usuario e nome.
+ usuario: (string) - o usuario que gostaria de ter
+ nome: (string) - o nome do usuario

+ Request  (application/json)

            {
                "usuario": "jd",
                "nome": "doe john"
            }
            
+ Response 201  (application/json)

            {
                "_id": "5f475f40bcecca29ccb289c8",
                "usuario": "jd",
                "nome": "doe john",
                "token": "a464b9c9aa2c4a0e79f6c7ac",
                "__v": 0
            }

### Login do usuario [GET]
envias no corpo do pedido o id unico do usuario.
+ id: (string) - o id unico do usuario retornado na criação de usuario

+ Request  (application/json)

            {
                "id": "5f475f40bcecca29ccb289c8"
            }
            
+ Response 202  (application/json)

            {
                "code": 202,
                "message": "autenticated",
                "token": "a464b9c9aa2c4a0e79f6c7ac",
                "usuario": "jd"
            }

