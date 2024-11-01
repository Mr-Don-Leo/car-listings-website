import sqlite3
import json

conn = sqlite3.connect('dubizzle_listings_2.db')
cursor = conn.cursor()

cursor.execute("SELECT * FROM listing")
columns = [description[0] for description in cursor.description]  
rows = cursor.fetchall()  

data = [dict(zip(columns, row)) for row in rows]

json_data = json.dumps(data, indent=4)

with open('./public/listing_data.json', 'w') as f:
    f.write(json_data)

conn.close()

print("Data successfully converted to JSON and saved to listing_data.json")
