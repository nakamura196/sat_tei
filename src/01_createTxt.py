import bs4
import csv # モジュール"CSV"の呼び出し

# スクレイピング対象のhtmlファイルからsoupを作成
soup = bs4.BeautifulSoup(open('../docs/tei/mktei_1916.xml'), 'xml')

titles = soup.find("body").find_all('p') # 全てのaタグ要素を取得

arr = []

for title in titles:
    # print(title.children)
    for e in title.children:

        if e.name == "lb":
            id = e.get("n").split(",")[-1]
            # print(id)
            arr.append("["+id+"]")
        elif e.name == None:
            # print(e)
            arr.append(e.strip())
        elif e.name == "note":
            for e2 in e.children:
                if e2.name == "lb":
                    id = e2.get("n").split(",")[-1]
                    # print(id)
                    arr.append("["+id+"]")
                elif e2.name == None:
                    # print(e)
                    arr.append(e2.strip())
        elif e.name == "l":
            arr.append(e.text.strip())
        elif e.name == "title":
            text = ""
            if e.find("lb"):
                id = e.find("lb").get("n").split(",")[-1]
                text = ("\n["+id+"]")

            
            else:
                print(e)

            text += e.text.strip()+"\n"
            arr.append(text)

with open("data/test.txt", mode='w') as f:
    f.write("".join(arr))