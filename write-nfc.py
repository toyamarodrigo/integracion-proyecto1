#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()

try:
	text = input('Dato a escribir: ')
	print('Colocar Tarjeta en lector')
	reader.write(text)
	print('Escrito!')

except:
		print("An exception ocurred")
		
finally:
	GPIO.cleanup()
