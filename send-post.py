#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import requests

reader = SimpleMFRC522()

url = 'http://localhost:3000'

try:
    print("Colocar Tarjeta")
    id, text = reader.read()
    print(id)
    print(text)
    body = {
        'user': id,
        'data': text
    }

    # body = {
    #    'user': 1234,
    #    'data': 'textooooo'
    # }

    print(body)

    req = requests.post(url + '/write', body)
    print(req.text)

except:
    print("An exception ocurred")

finally:
    GPIO.cleanup()
