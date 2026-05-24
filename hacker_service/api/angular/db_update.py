# api/app.py
from fastapi import FastAPI
import psycopg2
import os
from psycopg2.extras import execute_batch
import json

app = FastAPI()


@app.post("/update-angular")
def update_angular():
    file_path = os.path.join(os.path.dirname(__file__), "fixtures", "data.json")
    with open(file_path) as f:
        records = json.load(f)

    # Prepare the data array for batch processing based on the Angular model
    data_to_update = [
        (
            rec.get("serial_number", "01"),
            rec.get("category", ""),
            rec.get("topic", "general"),
            rec.get("content_status", "pending"),
            rec.get("visible", True),
            rec.get("question"),
            rec.get("answer"),
            rec.get("answer2"),
            rec.get("image_url"),
            rec.get("image2_url"),
            rec.get("image3_url"),
            json.dumps(rec["angular_questions"]) if rec.get("angular_questions") is not None else None,
            rec["id"]
        ) for rec in records
    ]

    conn = psycopg2.connect("dbname=test user=postgres password=secret")
    try:
        # 'with conn' automatically commits the transaction on success, or rolls back on exception
        with conn:
            with conn.cursor() as cur:
                execute_batch(
                    cur,
                    "UPDATE api_angular SET serial_number = %s, category = %s, topic = %s, content_status = %s, visible = %s, question = %s, answer = %s, answer2 = %s, image_url = %s, image2_url = %s, image3_url = %s, angular_questions = %s WHERE id = %s",
                    data_to_update
                )
    finally:
        conn.close()
        
    return {"status": "success"}
