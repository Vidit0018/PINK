import json
from geopy.distance import geodesic
from geopy.geocoders import Nominatim
import sys

geolocator = Nominatim(user_agent="pink_community")

coordinates = json.load(open("server/python/static_locations.json"))

def find_nearest(target_coordinate):
    nearest_coordinates = []
    for coord in coordinates:
        distance = geodesic((coord["lat"],coord["lng"]), target_coordinate).kilometers
        nearest_coordinates.append((coord, distance))

    nearest_coordinates.sort(key=lambda x: x[1])  # Sort by distance
    nearest_5 = nearest_coordinates[:5]  # Take the nearest 5

    result = []
    for item in nearest_5[:5]:
        if item not in result:
            result.append(item)
    return result

input_coords = (28.741,77.125)
nearest = find_nearest(input_coords)
print(json.dumps(nearest))
print(geolocator.reverse(str(nearest[0][0]['lat'])+","+str(nearest[0][0]['lng'])))
print(sys.argv[1])
