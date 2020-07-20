from clearblade_adapter_library import AdapterLibrary
import time
import json
import recognition
import os

ADAPTER_NAME = 'ObjectRecognitionAdapter'

if __name__ == "__main__":
    adapterLibrary = AdapterLibrary(ADAPTER_NAME)
    adapterLibrary.parse_arguments()
    adapter_config = adapterLibrary.initialize_clearblade()
    
    print("\nAdapter Config - \n", adapter_config)

    adapterLibrary.connect_MQTT()
    
    while(True):
        if(adapterLibrary.CONNECTED_FLAG):
            recognition.Recognize(
                adapterLibrary,
                adapter_config['adapter_settings']['path'],
                adapter_config['adapter_settings']['fps'],
                adapter_config['adapter_settings']['confidence'],
                adapter_config['adapter_settings']['detection_interval'],
                adapter_config['adapter_settings']['customObjects'])
            
            adapterLibrary.disconnect_MQTT()
            break

        else:
            continue
