# TehnologiiWeb_Neacsu_Alexandra_Maria_1162
# Management de melodii favorite cu integrare Spotify 
Această aplicație web a fost realizată pentru disciplina Tehnologii Web și permite utilizatorilor să gestioneze o listă personală de melodii favorite, oferind în același timp acces la informații actualizate din API-urile Spotify Web API sau Last.fm API.
Aplicația combină funcționalități de gestionare locală a melodiilor cu acces la date reale despre artiști, albume și popularitate.
Funcționalitati:
- Adăugarea melodiilor: - Utilizatorii pot adăuga o melodie preferată introducând:titlul piesei,numele artistului, albumul
- Aplicația preia automat detalii suplimentare (durată, gen, popularitate) din API-ul Spotify
-Vizualizarea melodiilor favorite: -  Utilizatorii pot vizualiza o listă completă cu piesele salvate.Pentru fiecare melodie sunt afișate informațiile preluate din API:numele artistului,albumul,poza de copertă,durata
- Căutarea melodiilor: Aplicația oferă un câmp de căutare unde utilizatorii pot introduce titlul sau artistul.Rezultatele sunt preluate în timp real din API-ul Spotify
- Ștergerea melodiilor: - Utilizatorii pot elimina oricând o melodie din lista lor de favorite.
- Integrarea cu API-ul Spotify: Aplicația folosește Spotify Web API  pentru:căutarea melodiilor,obținerea detaliilor despre artiști/albume,
afișarea imaginilor de copertă ale pieselor.
Tehnologii utilizate:

Backend: Node.js, Express.js,Sequelize,SQLite
Frontend: React.js, Axios sau Fetch API,Interfață modernă pentru interacțiuni rapide
Integrare API: Spotify Web API pentru căutare și afișarea detaliilor despre melodiile preferate.
