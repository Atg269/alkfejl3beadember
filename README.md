# Alkalmazások fejlesztése 3. beadandó (ember rész)
- [Leírás](https://www.github.com/3BL/alkfejlbead3ember#leírás)
- [Követelmények](https://www.github.com/3BL/alkfejlbead3ember#követelmények)
- [Technológiák](https://www.github.com/3BL/alkfejlbead3ember#technológiák)
- [Végpontok](https://www.github.com/3BL/alkfejlbead3ember#végpontok)
- [Modellek](https://www.github.com/3BL/alkfejlbead3ember#modellek)
- [Folyamatok](https://www.github.com/3BL/alkfejlbead3ember#folyamatok)
- [Felhasználói interfész](https://www.github.com/3BL/alkfejlbead3ember#interfész)
- [Adatok ellenőrzése](https://www.github.com/3BL/alkfejlbead3ember#Adatok ellenőrzése)


##Leírás
Ez a projekt az ELTE IK programtervező informatikus Bsc szak Alkalmazások fejlesztése tárgy harmadik
beadandója. Egy autó hiba nyilvántartó programot próbáltam megvalósítani, ahol léteznek felhasználó definiált hiba típusok (errors) amihez fel lehet venni egy vagy több kocsit aminek pont ilyen hibája van.


##Követelmények

Funkcionális elvárások

-Legyenek a felhasználók képesek felvenni egy errort vagy egy kocsit
-Felhasználóként szeretnénk megtekinteni, szerkeszteni, törölni a chipeket

Nem funkcionális követelmények

-Legyen az alkalmazás felhasználóbarát
-Működjön gyorsan


##Technológiák
A project javascript-ben azon belül pedig ember.js-es technológiával van megvalósítva, a megjelenítéshez
a handlebars fájlok felelnek az adatbázist pedig egy restapi-s workspace biztosítja.
 

##Végpontok

 * főoldal: http://alkfejl3beadember-atg269.c9users.io:8080/
 * errorlista: /errors/list
 * error megtekintése: /errors/error_id
 * error szerkesztése: /errors/edit/error_id
 * error felvétele: /errors/list
 * autok listaja: /errors/listautos
 * új auto hozzáadása: /errors/error_id/newauto


##Modellek
![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/bead3relation345345.png)

Itt egy kép látható az adatbázis modellről. Az error modell tükrözi a chiphibát akinek egy egyedi adattagja van,
az id-ja, tehát két ugyanolyan objektum nem lehet az adatbázisban. Lehet sok hiba, mindegyikhez lehetnek
kiskutyák hozzárendelve, ez a kiskutyak adattag, egy kiskutyákat tartalmazó tömb, ezeket látja a felhasználó kilistázva a
kutyalista oldalon. ** A one-to-many kapcsolat úgy valósul meg, hogy egy error-hoz több kutya is lehet rendelve, viszont visszafele már nem működik a dolog, minden kutyához csak egy hibás chip van rendelve az id-je alapján. **

##Folyamatok
![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/bead3folyamat2525.png)


##Interfész
![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/webdesign252454.png)

Röviden a felhasználói interfészről. A jobb felső sarokban vannak a linkek, a főoldal link értelemszerüen az index.html-re visz,
a hibalista link a hibás chipek oldalára, a kutyalista pedig a kutyákat listázó oldalra.


##Adatok ellenőrzése
Új adatok felvitelénél, a validator mindig figyeli, hogy az input mezők ne legyenek üresek, figyelmeztet az esetleges
hibákra, és ajánlott értékeket ír az üres input mezőkre.

##Fejlesztés és felhasználás


A project a cloud9 webes felüleletetén lett megvalósítva, Windows-on. Ha valaki továbbfejleszteni szeretné,
akkor  le kell töltenie a Restapit meg az ember respositoryt, majd importálnia kell őket a saját cloud 9es accountjába saját respositorikba. Ha bármilyen modul hiányzik azt npm-install-al lehet helyrehozni, és az oldalt meg úgy lehet látni hogy az restapi repo-nak a szerverét elindítjuk (server.js fájl -> run) és az ember repositoryban ha a gyak9 mappában belül vagyunk a következő parancsot beirjuk: ./node_modules/.bin/ember serve
Ezekután a bash parancsablakában a local-hostos sorra rányomunk bal gombbal és "open" és már megnyílt is a weboldal ha mindent jól csináltunk.

A  zökkenőmentes fejlesztéshez/használathoz szükség van 2GB memóriára és valamilyen 2 magos processzorra minimum.


##Funkció lista 

- error, auto egyedi az id alapján, csak egy lehet mindegyikből
- Chiplistázó oldal müködik
- Megtekintés/Szerkesztés/Törlés funkció müködik

További fejlesztési lehetőség:
- Hitelesítés után elérhető funkciók
- Login/regisztráció
- Korrekten látni lehessen melyik hiba kategóriába tartozik egy autó.
