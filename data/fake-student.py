import json
import random
from faker import Faker

fake = Faker()
Faker.seed(0)
random.seed(0)

states = ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Gujarat", "Rajasthan", "Madhya Pradesh", "Punjab"]

students = []

for _ in range(100):
    state = random.choice(states)
    student = {
        "firstName": fake.first_name(),
        "middleName": fake.first_name(),
        "lastName": fake.last_name(),
        "dob": fake.date_of_birth(minimum_age=5, maximum_age=18).isoformat(),
        "guardians": [
            {
                "name": fake.name(),
                "email": fake.email(),
                "phone": fake.phone_number(),
                "relation": "FATHER"
            },
            {
                "name": fake.name(),
                "email": fake.email(),
                "phone": fake.phone_number(),
                "relation": "MOTHER"
            }
        ],
        "permanentAddress": {
            "street": fake.street_address(),
            "city": fake.city(),
            "district": fake.city(),
            "postalCode": fake.postcode(),
            "state": state,
            "country": "India"
        },
        "residentialAddress": {
            "street": fake.street_address(),
            "city": fake.city(),
            "district": fake.city(),
            "postalCode": fake.postcode(),
            "state": state,
            "country": "India"
        }
    }
    students.append(student)

json_output = json.dumps(students, indent=2)
print(json_output)