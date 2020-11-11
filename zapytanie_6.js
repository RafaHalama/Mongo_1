printjson(db.people.insert(
{"sex":"Male",
 "first_name":"Rafał", 
 "last_name": "Halama",
 "job": "Student",
 "email": "rhalama@wp.pl",
 "location": {
	"city": "Wołomin",
	"address": {
		"streetname": "Kwitnąca",
        "streetnumber":"46"
		}
		},
 "description": "random",
 "height":"183",
 "weight":"76",
 "birth_date": "1997-04015T7:18:02Z",
 "nationality": "Poland",
 "credit": [
 {
	 "type":"switch",
     "number":"111111111111111111111",
     "currency":"PLN",
     "balance":"10.0"}
	 ]}))