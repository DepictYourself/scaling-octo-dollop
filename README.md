# scaling-octo-dollop

prerequisits:
-git
-docker

copy the code files
```
git clone https://github.com/DepictYourself/scaling-octo-dollop.git
```

change into directory
```
cd scaling-octo-dollop
```

start with docker compose
(I have docker compose version 2. so I believe that is the reason why I have to use `docker compose up` instead of `docker-compose up`
```
docker compose up
```

After the containers start, you should be able to visit `http://localhost:4200`

The backend still expects POST request and a JSON string in the body at `http://localhost:3000`

```
{
    "departments":[
        {
            "name":"Edag PS Szoftverfejlesztés",
            "users":[
                {
                    "name":"Nagy Gábor",
                    "birthday":"1900-01-01"
                },
                {
                    "name":"Kis Péter",
                    "birthday":"1903-02-01"
                }
            ]
        },
        {
            "name":"Edag PS Konstrukció",
            "users":[
                {
                    "name":"Kiss Gábor",
                    "birthday":"1904-02-02"
                },
                {
                    "name":"Nagy Péter",
                    "birthday":"1902-03-03"
                }
            ]
        }
    ]
}
```
