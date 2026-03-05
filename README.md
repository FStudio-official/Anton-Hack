# Anton-Hack
Das ist der ULTIMATIVE Anton-App Hack:

  -> Unendlich Coins
  
  -> Du kannst Kleidungsstücke von Anton Plus (eigentlich kostenpflichtig) GRATIS bekommen

#Namen herausfinden
1. Führe EINMAL das 2. Codestück aus
2. Klicke auf das gewünschte Produkt und schließe
3. Gib foundEvents ein
4. Führe das 1. Codestück aus
5. gibt getAvatar("Position.Name",25) ein (statt "Position.Name" den Namen; statt 25 den Preis)

Beispiel:

>> <2. Codestück>

function log(data)

>> foundEvents

Set [ "head.children.human.children.headgear.option/crown" ]

>> <1. Codestück>

function getAvatar(name,price)

>> getAvatar("headgear.crown",50)

Promise { <state>: "fulfilled", <value>: undefined }
