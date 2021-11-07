import os


images = os.listdir('.')
for i in images:
    os.system('magick ' + str(i) + '  -resize "50%" ' + str(i))
