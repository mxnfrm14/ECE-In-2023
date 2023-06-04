import requests

data = [{"PUBLICEVENTID":1,"LIEU":"Auvers-sur-Oise","DATE":"2023-10-14T00:00:00.000Z","HEURE":"00:00:00","TITRE":"La plus grosse soirée jamais organisée","KEY":2,"EVENTID":1,"MEDIA":["event1_2.jpg","event1_1.jpg","event1_3.jpg","event1_4.jpg","event1_5.jpg"]},{"PUBLICEVENTID":2,"LIEU":"Neuilly-sur-Seine","DATE":"2023-01-17T00:00:00.000Z","HEURE":"18:30:00","TITRE":"La meilleure soirée de paris et banlieu meme si c'est pas trop la banlieu chez Jeffrey MDR","KEY":6,"EVENTID":2,"MEDIA":["event2_1.jpg","event2_2.jpg","event2_3.jpg","event2_4.jpg","event2_5.jpg"]},{"PUBLICEVENTID":3,"LIEU":"Paris","DATE":"2023-08-11T00:00:00.000Z","HEURE":"20:45:00","TITRE":"Evenement immanquable : RodéoParis","KEY":11,"EVENTID":3,"MEDIA":["event3_1.jpg","event3_2.jpg","event3_3.jpg","event3_4.jpg","event3_5.jpg"]}]
# Placeholder image URL
placeholder_url = 'https://via.placeholder.com/500'

# Download the images based on the names
for obj in data:
    media_list = obj['MEDIA']
    for image_name in media_list:
        response = requests.get(placeholder_url)
        if response.status_code == 200:
            with open(image_name, 'wb') as file:
                file.write(response.content)
            print(f"Downloaded: {image_name}")
        else:
            print(f"Failed to download: {image_name}")


