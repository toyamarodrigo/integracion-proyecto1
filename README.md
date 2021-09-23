# 1er Proyecto para Integracion Tecnologica

**Control de Acceso NFC + Raspberry Pi + Web**

**Deploy: <https://rt-demo-controlaccess.herokuapp.com>**


## Tech used

* ViteJS
* Typescript / JS
* React
* React Router
* Chakra UI
* React Hook Forms
* ExpressJS
* Python
  
**Hardware**

* NFC Reader RC522
* Raspberry Pi 4 Model B
* Tags 13.56mhz

## How to use

```sh
 $ git clone https://github.com/toyamarodrigo/integracion-proyecto1.git

 $ cd client && npm install

 $ cd server && npm install

 $ cd server && npm run dev

 # Commands for NFC reader
 # Root directory
 
 # Read Tag
 $ python3 read-nfc.py

 # Write Tag
 $ python3 write-nfc.py

 # Send to Server (http://localhost:3001/nfc)
 $ python3 send.py

```

Data from users are saved on a ``file.json`` file

```json
[
  {
    id: uuid: string | tagid: string
    name: string
    isPresent: boolean
    date: Date: "YYYY/MM/DD, H:mm:ss A"
  },
]
```


## Screenshots

Home:
![Home](https://i.imgur.com/04gq7xG.png)

Form:
![Form](https://i.imgur.com/XMXQvdC.png)