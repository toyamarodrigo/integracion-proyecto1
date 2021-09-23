#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import requests

reader = SimpleMFRC522()

url = 'https://rt-demo-controlaccess.herokuapp.com/nfc'

try:
    print("Colocar Tarjeta")
    id, text = reader.read()
    print(id)
    print(text)

    body = {
        'id': id,
        'name': text,
    }

    print(body)

    req = requests.post(url + '/create', body)
    print(req.text)

except:
    print("An exception ocurred")

#finally:
    #GPIO.cleanup()