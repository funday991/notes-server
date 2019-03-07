# Notes Server

### Usage
>$ npm i  
>$ npm start - запуск сервера

Предварительно нужно запустить MongoDB!


### API
#### Запросить список всех заметок
````
url: notes/  
method: GET

success_status: 200 OK
success_response:
[
  {
    "_id": "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "title": "some title",
    "text": "some text",
    "dateCreate": "1500000000000",
    "dateUpdate": "1511111111111"
  },
  {
    "_id": "yyyyyyyy-yyyy-yyyy-yyyyyyyyyyyy",
    "title": "another title",
    "text": "another text",
    "dateCreate": "1522222222222",
    "dateUpdate": "1533333333333"
  },
]
````
#### Добавить новую заметку
````
url: notes/  
method: POST

headers: 
{
  "Content-Type": "application/json"
}

request_body: 
{
  "title": "some title",
  "text": "some text"
}

success_status: 201 Created

error_status: 400 Bad Request
error_response: "Title or text is missing."
````  
#### Получить заметку по ID
````
url: notes/<note_id>  
method: GET
params: note_id - UUID заметки

success_status: 200 OK
success_response:
{
    "_id": "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "title": "some title",
    "text": "some text",
    "dateCreate": "1500000000000",
    "dateUpdate": "1500000000000"
},

error_status: 400 Bad Request
error_response: "Invalid ID."
````   
#### Обновить заметку по ID
````
url: notes/<note_id>
method: PUT
params: note_id - UUID заметки

headers: 
{
  "Content-Type": "application/json"
}

request_body: 
{
  "title": "some title",
  "text": "some text"
}

success_status: 200 OK
success_response_body:
{
    "_id": "xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "title": "new title",
    "text": "new text",
    "dateCreate": "1500000000000",
    "dateUpdate": "1511111111111"
},

error_status: 400 Bad Request
id_error_response: "Invalid ID."
req_body_error_response: "Title or text is missing."
````  
