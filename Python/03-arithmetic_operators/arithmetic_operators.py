import random
if __name__ == '__main__':
	"""
		this function return sum, difference, product

		
	"""

	def raw_input():
		return random.randint(0,15)	
	a = int(raw_input())
	b = int(raw_input())

	print(a+b)
	print(a-b)
	print(a*b)