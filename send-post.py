#!/usr/bin/env python

#import RPi.GPIO as GPIO
#from mfrc522 import SimpleMFRC522
import requests

#reader = SimpleMFRC522()

url = 'http://localhost:3001'

try:
    print("Colocar Tarjeta")
    #id, text = reader.read()
    #print(id)
    #print(text)

    body = {
        'user': '123',
        'data': 'Rodri'
    }

    print(body)

    req = requests.post(url + '/write', body)
    print(req.text)

except:
    print("An exception ocurred")

#finally:
    #GPIO.cleanup()