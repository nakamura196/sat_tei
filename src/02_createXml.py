import bs4
import csv # モジュール"CSV"の呼び出し
import pandas as pd
import re
import requests
import json

# スクレイピング対象のhtmlファイルからsoupを作成
soup = bs4.BeautifulSoup(open('../static/tei/mktei_1916.xml'), 'xml')

path = "data/1579id.xlsx"

df = pd.read_excel(path, sheet_name="Sheet2", header=None, index_col=None, engine='openpyxl')

r_count = len(df.index)
c_count = len(df.columns)

body2 = soup.find("body")
body2.clear()

back = soup.find("back")
back.decompose()

body = soup.new_tag('p')
body2.append(body)

listWit = soup.find("listWit")
new_tag = soup.new_tag('witness')
new_tag["xml:id"] = "酉"
new_tag.string="酉蓮社"
listWit.append(new_tag)

manifest = "https://d1av1vcgsldque.cloudfront.net/iiif/8483/manifest.json"

facsimile  = soup.new_tag('facsimile', source=manifest)
soup.find("TEI").append(facsimile)

data = requests.get(manifest).json()

canvases = data["sequences"][0]["canvases"]

images = {}

for i in range(len(canvases)):
    canvas = canvases[i]
    surface  = soup.new_tag('surface', source=canvas["@id"])
    surface["xml:id"] = "p{}".format(i+1)
    facsimile.append(surface)

    graphic  = soup.new_tag('graphic')
    graphic["url"] = canvas["images"][0]["resource"]["@id"]
    # surface.append(graphic)

    images[surface["xml:id"]] = graphic["url"]

prev_canvas_id = -1
prev_page_id = -1
count = 1

texts = []

for i in range(1, r_count):

    id = df.iloc[i, 7].split("\"")[1]
    text = df.iloc[i, 9]

    ##### id

    page_id = int(id.split(",")[-2])
    line_id = int(id.split(",")[-1])

    if line_id > 10 and prev_page_id != page_id:
        count += 1
        prev_page_id = page_id

    if line_id > 10:
        canvas_id = count + 2
    else:
        canvas_id = count + 2

    #####

    if pd.isnull(text):
        continue

    if "figure" in text:
        continue

    ##### lb

    new_tag = soup.new_tag('lb')
    new_tag["n"] = id
    # body.append(new_tag)

    texts.append(str(new_tag))

    #####
    
    
    if prev_canvas_id != canvas_id:
        new_tag = soup.new_tag('pb')
        new_tag["corresp"] = "#p{}".format(canvas_id )
        new_tag["facs"] = images["p{}".format(canvas_id )]
        # body.append(new_tag)

        texts.append(str(new_tag))

        new_tag = soup.new_tag('lb')
        # body.append(new_tag)

        texts.append(str(new_tag))

        prev_canvas_id = canvas_id

    es = re.findall("\[.+?\]", text) # ['def']

    for e in es:
        sat_id = "T1916_,46,"+e[1: len(e) - 1]
        text = text.replace(e, "<anchor corresp='{}'/>".format(sat_id))

    text = text.replace("“", "\"").replace("”", "\"")

    text = text.replace("<lem", "<lem wit=\"#酉\"")
    text = text.replace("<rdg", "<rdg wit=\"#大正\"")

    '''
    text = "<aaa>{}".format(text)+"</aaa>"

    tag = bs4.BeautifulSoup(text, features="xml")
    body.append(tag.aaa)
    '''

    texts.append(text)

text = "<div>{}".format("".join(texts))+"</div>"

tag = bs4.BeautifulSoup(text, features="xml")
body.append(tag.div)

f = open("../static/data/sat.xml", "w")
f.write(soup.prettify())
f.close()