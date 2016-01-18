# Alkalmazások fejlesztése 3. beadandó dokumentáció
- [Követelményanalízis](https://www.github.com/Atg269/alkfejl3beadember#követelményanalízis)
- [Tervezés](https://www.github.com/Atg269/alkfejl3beadember#tervezés)
- [Implementáció](https://www.github.com/Atg269/alkfejl3beadember#implementáció)
- [Tesztelés](https://www.github.com/Atg269/alkfejl3beadember#tesztelés)
- [Felhasználói Dokumentáció](https://www.github.com/Atg269/alkfejl3beadember#felhasználói dokumentáció)


##Követelményanalízis

Funkcionális elvárások
Az alapkövetelmények a következők voltak: 
- legalább két modell kellett, egy-sok kapcsolatban
- legalább 1 űrlap
- legalább 1 listázó oldal
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
![Adatbázis modell](https://github.com/Atg269/alkfejl3beadember/blob/master/Documentation/adatbazisdiagram.png)

Itt egy kép látható az adatbázis modellről. Az error modell az itt egy kocsi hiba-kategóriájának akar megfelelni (mint pl ,
Egyedi ID-je van tehát két ugyanolyan objektum nem lehet az adatbázisban. Lehet sok hiba, mindegyikhez lehetnek
autók hozzárendelve, ez a "autok" adattagja az error-nak, egy autokat tartalmazó tömb, ezeket látja a felhasználó kilistázva a
auti lista oldalon. A egy-sok kapcsolat úgy valósul meg, hogy egy error-hoz több autó is lehet rendelve, viszont visszafele már nem működik a dolog, minden autóhoz csak egy hibakategória tartozik. 

Végpontok:

 * főoldal: http://alkfejl3beadember-atg269.c9users.io:8080/
 * errorlista: /errors/list
 * error megtekintése: /errors/error_id
 * error szerkesztése: /errors/edit/error_id
 * error felvétele: /errors/list
 * autok listaja: /errors/listautos
 * új auto hozzáadása: /errors/error_id/newauto

Interfész:
![Oldal diagram](https://github.com/Atg269/alkfejl3beadember/blob/master/Documentation/oldaldiagram.png)

Állapot-diagram:
![Állapot diagram](https://github.com/Atg269/alkfejl3beadember/blob/master/Documentation/folyamatdiagram.png)


##Implementáció

A project c9-en javascript-ben azon belül pedig ember.js-es technológiával lett megvalósítva. Két külön respository-t kellett létrehozni a cloud 9-en, az egyiket a restapinak a másikat magának az ember-nek. Az adatbázist egy restapis server.js működteti ami össze van kötve az ember részével a projektnek. A weboldal kinézetét handlebars fájlok szablyák meg.
 
##Tesztelés
 
 
##Felhasználói dokumentáció

Az oldalt úgy lehet elindítani hogy az restapi repo-nak a szerverét elindítjuk (server.js fájl -> run) és az ember repositoryban ha az autoerrorproject mappában belül vagyunk a következő parancsot beirjuk: ./node_modules/.bin/ember serve
Ezekután a bash parancsablakában a local-hostos sorra rányomunk bal gombbal és megnyomjuk hogy "open", és ezzel megnyitottuk a weboldalt ha mindent jól csináltunk.

Ha valaki továbbfejleszteni szeretné a weboldalt,akkor le kell töltenie a restapis meg az emberes respositoryt cloud9-ről, majd importálnia kell őket a saját cloud 9es accountjába saját respositorikba. Ha bármilyen modul hiányzik azt npm-install-al lehet helyrehozni. 

A  zökkenőmentes fejlesztéshez/használathoz szükség van 2GB memóriára és valamilyen 2 magos processzorra.

További fejlesztési lehetőség:
- Login/regisztráció
- Csak hitelesítés után elérhető funkciók
- Helyesen látni lehessen melyik hiba kategóriába tartozik egy autó.

