#!/usr/bin/env python

#import RPi.GPIO as GPIO
#from mfrc522 import SimpleMFRC522
import requests

#reader = SimpleMFRC522()

url = 'http://localhost:3001/nfc'

try:
    print("Colocar Tarjeta")
    #id, text = reader.read()
    #print(id)
    #print(text)

    body = {
        'id': '1',
        'name': 'Roberto',
    }

    print(body)

    req = requests.post(url + '/create', body)
    print(req.text)

except:
    print("An exception ocurred")

#finally:
    #GPIO.cleanup()