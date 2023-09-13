#import myModule1
from myPackage1.myModule1 import myadd
#from node_modules import BeautifulSoup
from node_modules import requests

operation = myadd(50, 30)
print(operation)

url = "https://www.gov.uk/search/news-and-communications"
page = requests.get(url)
# Voir le code html source
print(page.content)