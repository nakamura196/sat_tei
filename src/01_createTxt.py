import bs4
import csv # モジュール"CSV"の呼び出し

# スクレイピング対象のhtmlファイルからsoupを作成
soup = bs4.BeautifulSoup(open('../docs/tei/mktei_1916.xml'), 'xml')

titles = soup.find_all('p') # 全てのaタグ要素を取得

arr = []

for title in titles:
    print(title.children)
    for e in title.children:

        if e.name == "lb":
            id = e.get("n").split(",")[-1]
            print(id)
            arr.append("["+id+"]")
        elif e.name == None:
            print(e)
            arr.append(e.strip())

with open("data/test.txt", mode='w') as f:
    f.write("".join(arr))