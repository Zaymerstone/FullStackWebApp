from app import app, db
from flask import request, jsonify
from models import Friend


#Get all friends
@app.route("/api/friends", methods=["GET"]) # this route will handle HTTP get request
def get_friends(): # functionality to retrieve and return data
    friends = Friend.query.all() # friends are now in the format of objects python
    result = [friend.to_json() for friend in friends]
    return jsonify(result)

# Create a friend
@app.route("/api/friends", methods=["POST"])
def create_friend():
    try:
        data = request.json
        
        required_fields = ["name","role","description","gender"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error":f'Missing required field: {field}'}), 400
        
        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")

        #fetch avatar image based on gender
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None
        new_friend = Friend(name=name, role=role,description=description, gender=gender,img_url=img_url)
        
        db.session.add(new_friend) #staging area as if in git
        db.session.commit() # commit to the db as if in git
        return jsonify({"msg":"friend created success"}), 201
    except Exception as e:
        db.session.rollback()    
        return jsonify({"error":str(e)}), 500