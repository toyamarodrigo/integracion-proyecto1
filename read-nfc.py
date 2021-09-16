#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()

try:
		print("Colocar Tarjeta a leer")
		id,text = reader.read()
		print(id)
		print(text)

except:
		print("An exception ocurred")
		
finally:
	GPIO.cleanup()

