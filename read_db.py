import sqlite3

def read_db(db_path):
	conn = sqlite3.connect(db_path)
	cursor = conn.cursor()

	cursor.execute("SELECT * FROM listing")

	rows = cursor.fetchall()

	for row in rows:
		print(row)

	conn.close()

if __name__ == "__main__":
	db_path = './dubizzle_listings_2.db'
	read_db(db_path)