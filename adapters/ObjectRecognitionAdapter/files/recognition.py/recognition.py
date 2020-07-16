from imageai.Detection.Custom import CustomVideoObjectDetection
from imageai.Detection import VideoObjectDetection
import os
from matplotlib import pyplot as plt
import cv2
import sys
import numpy as np
import dlib
import math
import requests
import json
from clearblade.ClearBladeCore import System

detectable_objects = {'person': 'invalid', 'bicycle': 'invalid', 'car': 'invalid', 'motorcycle': 'invalid', 'airplane': 'invalid', 'bus': 'invalid', 'train': 'invalid', 'truck': 'invalid', 'boat': 'invalid', 'traffic light': 'invalid', 'fire hydrant': 'invalid', 'stop sign': 'invalid', 'parking meter': 'invalid', 'bench': 'invalid', 'bird': 'invalid', 'cat': 'invalid', 'dog': 'invalid', 'horse': 'invalid', 'sheep': 'invalid', 'cow': 'invalid', 'elephant': 'invalid', 'bear': 'invalid', 'zebra': 'invalid', 'giraffe': 'invalid', 'backpack': 'invalid', 'umbrella': 'invalid', 'handbag': 'invalid', 'tie': 'invalid', 'suitcase': 'invalid', 'frisbee': 'invalid', 'skis': 'invalid', 'snowboard': 'invalid', 'sports ball': 'invalid', 'kite': 'invalid', 'baseball bat': 'invalid', 'baseball glove': 'invalid', 'skateboard': 'invalid', 'surfboard': 'invalid', 'tennis racket': 'invalid',
                      'bottle': 'invalid', 'wine glass': 'invalid', 'cup': 'invalid', 'fork': 'invalid', 'knife': 'invalid', 'spoon': 'invalid', 'bowl': 'invalid', 'banana': 'invalid', 'apple': 'invalid', 'sandwich': 'invalid', 'orange': 'invalid', 'broccoli': 'invalid', 'carrot': 'invalid', 'hot dog': 'invalid', 'pizza': 'invalid', 'donut': 'invalid', 'cake': 'invalid', 'chair': 'invalid', 'couch': 'invalid', 'potted plant': 'invalid', 'bed': 'invalid', 'dining table': 'invalid', 'toilet': 'invalid', 'tv': 'invalid', 'laptop': 'invalid', 'mouse': 'invalid', 'remote': 'invalid', 'keyboard': 'invalid', 'cell phone': 'invalid', 'microwave': 'invalid', 'oven': 'invalid', 'toaster': 'invalid', 'sink': 'invalid', 'refrigerator': 'invalid', 'book': 'invalid', 'clock': 'invalid', 'vase': 'invalid', 'scissors': 'invalid', 'teddy bear': 'invalid', 'hair dryer': 'invalid', 'toothbrush': 'invalid'}

frames = 0
result_collection = ""
user_token = ""

def VideoObject():
    detector = VideoObjectDetection()
    return detector


def LoadModel(detector, file_name):
    print("\nModel Loaded......")
    # detector.setModelTypeAsRetinaNet()
    detector.setModelTypeAsTinyYOLOv3()
    detector.setModelPath(file_name)
    detector.loadModel()
    return detector


def forFrame(frame_number, output_array, output_count, returned_frame):
    print(output_count)
    print("------------------------")

    if(len(output_array) != 0):
        header = {
            "ClearBlade-UserToken": user_token,
            "systemKey": os.getenv('CB_SYSTEM_KEY'),
            "collectionName": result_collection}

        body = []
        global frames
        timestamp = (frame_number * (1000/frames))/1000

        image = ''
        objects = []
        probability = []
        for obj in output_array:
            objects.append(obj["name"])
            probability.append(obj["percentage_probability"])
            #body.append(
            #    {"detected_object": ,
            #     "confidence": obj["percentage_probability"],
            #     "time_stamp_secs": timestamp})
            image += obj["name"] + '_'

        body.append({"detected_object":str(objects),"confidence":str(probability),"time_stamp_secs": timestamp})
        url = "https://platform.clearblade.com/api/v/1/collection/"+os.getenv('CB_SYSTEM_KEY')+'/'+result_collection
        response = requests.post(url, headers=header, data=json.dumps(body))
        

        image_name = 'images/' + image + str(timestamp) + '.jpg'
        #cv2.imwrite(image_name, returned_frame)


def Recognize(fps, confidence, objects, collection, detection_interval, token, video_path):
    detector = VideoObject()
    detector = LoadModel(
        detector, "yolo-tiny.h5")

    for obj in objects:
        if obj in detectable_objects:
            detectable_objects[obj] = 'valid'

    # custom_objects = detector.CustomObjects(person=person, boat=boat)
    global frames
    frames = fps

    global result_collection
    result_collection = collection

    global user_token
    user_token = token

    if(detection_interval < 1):
        frame_detection_interval = 1
    else:
        frame_detection_interval = detection_interval

    input_video_path = video_path

    print("\nInput Stream: " + input_video_path)
    
    if(not os.path.isdir('./images')):
        os.mkdir('./images')
    
    print("\nStarting to process the video......\n")
    
    video_path = detector.detectCustomObjectsFromVideo(
        custom_objects=detectable_objects,
        input_file_path=input_video_path,
        save_detected_video=False,
        frame_detection_interval=frame_detection_interval,
        frames_per_second=fps,
        per_frame_function=forFrame,
        return_detected_frame=True,
        minimum_percentage_probability=confidence,
        log_progress=True,
        display_percentage_probability=False)
