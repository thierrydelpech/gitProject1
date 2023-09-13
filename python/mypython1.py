import myModule1

operation = myModule1.myadd(50, 20)
print(operation)


nom = "Dupont"
prenom = "Jean"
age = 30

#Mon addition
x = 30
y = 50
z = x + age
type(z)
print(type(z))
if (z <= 50): print('la somme A est ',z)
else: print('la somme B est',z)
    

print("Bonjour, je m'appelle {prenom} {nom} et j'ai {age} ans.")

plateformes_sociales = ["Facebook", "Instagram", "Snapchat", "Twitter"]
print("Ma plateforme est : ",{plateformes_sociales[0]})
print("Ma plateforme est : ",{plateformes_sociales[1]})
print("Ma plateforme est : ",{plateformes_sociales[2]})
len(plateformes_sociales)
print(plateformes_sociales)

infos_labradoodle = {
    "poids": "13 à 16 kg",
    "origine": "États-Unis"
}
infos_labradoodle['nom_scientifique'] = "Canis lupus familiaris"
infos_labradoodle["poids"]="45 kg"
#del infos_labradoodle["origine"]
print(infos_labradoodle.items())
#print(infos_labradoodle.clear())
print("race" in infos_labradoodle)

fruit = "fraise"
match fruit:
    case "pomme":
        print("J'aime les pommes !")
    case "banane":
        print("Je n'aime pas les bananes.")
    case "orange":
        print("Les oranges sont bonnes pour la santé.")
    case _:
        print("Je ne connais pas ce fruit.")

races_de_chien = ["golden retriever", "chihuahua", "terrier", "carlin"]
for chien in races_de_chien:
    print(chien)

for x in range(3):
    print(f"{x} bouteilles de bières au mur !")

capacite_maximale = 10
capacite_actuelle = 3
print("init",capacite_actuelle)
while capacite_actuelle < capacite_maximale:
    capacite_actuelle += 1
    print(capacite_actuelle)

def myadd(x,y):

    result=x*y
    print("Print dans la fonction",result)
    return result

a = 10
b = 4
#myadd(a,b)
operation = myadd(50, 20)
print(operation)