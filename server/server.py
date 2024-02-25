from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from kafka import KafkaProducer, KafkaConsumer, TopicPartition
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",  # Adjust to match your React app's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


class Message(BaseModel):
    key: dict
    value: dict


bootstrap_servers = 'localhost:9092'
topic = 'events'


def publish_message(key_object, value_object, bootstrap_servers=bootstrap_servers, topic=topic):
    # Convert key and value objects to JSON strings
    key_json = json.dumps(key_object)
    value_json = json.dumps(value_object)

    # Initialize Kafka producer
    producer = KafkaProducer(bootstrap_servers=bootstrap_servers,
                             key_serializer=lambda x: x.encode('utf-8'),
                             value_serializer=lambda x: x.encode('utf-8'))

    # Publish the message
    producer.send(topic, key=key_json, value=value_json)

    # Flush the producer to ensure all messages are sent
    producer.flush()

    # Close the producer
    producer.close()


@app.post("/produce")
async def produce_message(message: Message):
    # Initialize Kafka producer
    producer = KafkaProducer(bootstrap_servers=bootstrap_servers,
                             key_serializer=lambda x: json.dumps(
                                 x).encode('utf-8'),
                             value_serializer=lambda x: json.dumps(x).encode('utf-8'))

    # Publish the message
    producer.send(topic, key=message.key, value=message.value)

    # Flush the producer to ensure all messages are sent
    producer.flush()

    # Close the producer
    producer.close()

    return {"message": "Message published successfully"}


@app.get("/consume")
async def consume_messages():
    # Initialize Kafka consumer
    consumer = KafkaConsumer(bootstrap_servers=bootstrap_servers,
                             enable_auto_commit=False,
                             key_deserializer=lambda x: json.loads(
                                 x.decode('utf-8')),
                             value_deserializer=lambda x: json.loads(x.decode('utf-8')))

    tp = TopicPartition(topic, 0)
    consumer.assign([tp])
    consumer.seek_to_end(tp)
    lastOffset = consumer.position(tp)

    consumer.seek_to_beginning(tp)
    # Consume messages
    messages = []
    for message in consumer:
        key = message.key
        value = message.value
        messages.append({'key': key, 'value': value})
        if message.offset == lastOffset - 1:
            break

    # Close the consumer
    consumer.close()

    return messages
