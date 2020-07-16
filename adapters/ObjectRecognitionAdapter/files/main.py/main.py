from clearblade_adapter_library import AdapterLibrary
import time
import json
import recognition
import os

def handleMessage(message):
    print("\nMessage Received: ", str(message.payload))
    payload = json.loads(message.payload.decode("utf-8"))
    recognition.Recognize(
        payload['fps'],
        payload['confidence'],
        payload['customObjects'],
        payload['resultCollection'],
        payload['detection_interval'],
        payload['token'],
        payload['video_path'])


def main():
    adapterLibrary = AdapterLibrary('ObjectRecognitionAdapter')
    adapterLibrary.parse_arguments()
    adapterLibrary.initialize_clearblade()
    adapterLibrary.connect_MQTT(
        topic='send/_broadcast', cb_message_handler=handleMessage)
    print("\n-------------------------\n")
    print("Listening......\n")
    while(True):
        time.sleep(1)


if __name__ == "__main__":
    main()
