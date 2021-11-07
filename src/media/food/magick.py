import os

images = [
    'arsimp.jpeg',
    'bondisushi.jpeg',
    'breadstreetkitchen.jpeg',
    'casalafemme.jpeg',
    'foodloft.jpeg',
    'hawkerchans.jpeg',
    'jumboseafood.jpeg',
    'katzdelicatessen.jpeg',
    'laspalmas.jpeg',
    'latacqueria.jpeg',
    'marinasouthdeliciousfood.jpeg',
    'panchovilla.jpeg',
    'supanniga.jpeg',
    'tsurutontan.jpeg',
    'tuome.jpeg'
]

# images = os.listdir('.')
for i in images:
    if ".jpeg" in i:
        os.system('magick ' + str(i) + '  -resize "25%" ' + str(i))
