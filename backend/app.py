import pymysql
from flask import Flask, jsonify, request

app = Flask(__name__)

# Database connection function
def get_db_connection():
    connection = pymysql.connect(
        host='localhost',
        user='root',
        password='ankit5787@',
        db='final_year',
        cursorclass=pymysql.cursors.DictCursor
    )
    return connection

@app.route('/')
def hello():
    connection = get_db_connection()
    try:
        cursor = connection.cursor()
        cursor.execute('SELECT "Hello"')
        result = cursor.fetchone()
        return result['Hello']
    finally:
        connection.close()

# Example route to fetch all users
@app.route('/api/users', methods=['GET'])
def get_users():
    connection = get_db_connection()
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users;")
        users = cursor.fetchall()
        return jsonify(users)
    finally:
        connection.close()

# Route to add a new user
@app.route('/api/users', methods=['POST'])
def add_user():
    try:
        data = request.get_json()
        first_name = data['first_name']
        last_name = data['last_name']
        age = data['age']
        gender = data['gender']
        phone = data['phone']
        email = data['email']
        password = data['password']

        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("""
            INSERT INTO users (first_name, last_name, age, gender, phone, email, password)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (first_name, last_name, age, gender, phone, email, password))
        connection.commit()

        return jsonify({'message': 'User added successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)
