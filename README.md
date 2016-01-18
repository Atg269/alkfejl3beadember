# Alkalmazások fejlesztése 3. beadandó dokumentáció
- [Követelményanalízis](https://www.github.com/Atg269/alkfejl3beadember#Követelményanalízis)
- [Tervezés](https://www.github.com/Atg269/alkfejl3beadember#Tervezés)
- [Implementáció](https://www.github.com/Atg269/alkfejl3beadember#Implementáció)
- [Tesztelés](https://www.github.com/Atg269/alkfejl3beadember#Tesztelés)
- [Felhasználói Dokumentáció](https://www.github.com/Atg269/alkfejl3beadember#Felhasználói Dokumentáció)


##Követelményanalízis

Funkcionális elvárások
Az alapkövetelmények a következők voltak: 
- legalább két modellt, egy-sok kapcsolatban
- legalább 1 űrlapot
- legalább 1 listázó oldalt
- legyen lehetőség új felvételére
- legyen lehetőség meglévő szerkesztésére
- legyen lehetőség meglévő törlésére
- REST API végpont kialakítása
- szerveroldali perzisztálás fájlba

Nem funkcionális elvárások
-Gyors működés
-Felhasználó barát oldalszerkezet

##Tervezés

Adatbázis-modell:
![Adatbázis modell](https://github.mentation/bead3relation345345.png)

Itt egy kép látható az adatbázis modellről. Az error modell tükrözi a chiphibát akinek egy egyedi adattagja van,
az id-ja, tehát két ugyanolyan objektum nem lehet az adatbázisban. Lehet sok hiba, mindegyikhez lehetnek
kiskutyák hozzárendelve, ez a kiskutyak adattag, egy kiskutyákat tartalmazó tömb, ezeket látja a felhasználó kilistázva a
kutyalista oldalon. ** A one-to-many kapcsolat úgy valósul meg, hogy egy error-hoz több kutya is lehet rendelve, viszont visszafele már nem működik a dolog, minden kutyához csak egy hibás chip van rendelve az id-je alapján. **

Végpontok:

 * főoldal: http://alkfejl3beadember-atg269.c9users.io:8080/
 * errorlista: /errors/list
 * error megtekintése: /errors/error_id
 * error szerkesztése: /errors/edit/error_id
 * error felvétele: /errors/list
 * autok listaja: /errors/listautos
 * új auto hozzáadása: /errors/error_id/newauto


##Implementáció

c9 stb
A project javascript-ben azon belül pedig ember.js-es technológiával van megvalósítva, a megjelenítéshez
a handlebars fájlok felelnek az adatbázist pedig egy restapi-s workspace biztosítja.
 
##Tesztelés
 
 
##Felhasználói dokumentáció


A project a cloud9 webes felüleletetén lett megvalósítva, Windows-on. Ha valaki továbbfejleszteni szeretné,
akkor  le kell töltenie a Restapit meg az ember respositoryt, majd importálnia kell őket a saját cloud 9es accountjába saját respositorikba. Ha bármilyen modul hiányzik azt npm-install-al lehet helyrehozni, és az oldalt meg úgy lehet látni hogy az restapi repo-nak a szerverét elindítjuk (server.js fájl -> run) és az ember repositoryban ha a gyak9 mappában belül vagyunk a következő parancsot beirjuk: ./node_modules/.bin/ember serve
Ezekután a bash parancsablakában a local-hostos sorra rányomunk bal gombbal és "open" és már megnyílt is a weboldal ha mindent jól csináltunk.

A  zökkenőmentes fejlesztéshez/használathoz szükség van 2GB memóriára és valamilyen 2 magos processzorra minimum.


További fejlesztési lehetőség:
- Login/regisztráció
- Csak hitelesítés után elérhető funkciók
- Korrekten látni lehessen melyik hiba kategóriába tartozik egy autó.


![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/bead3folyamat2525.png)

![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/webdesign252454.png)



