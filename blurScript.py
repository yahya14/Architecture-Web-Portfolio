import glob
import os
from PIL import Image, ImageFilter

aspect_ratio = [8.5, 11]

images_dir = glob.glob(".\\public\\images\\*\\*")
print(images_dir)

def process_img(image):
    try:
        img = Image.open(image)
        (width, height) = img.size

        # Apply Gaussian Blur
        blurred_img = img.filter(ImageFilter.GaussianBlur(60))

        # Save the blurred image
        tokens = image.split(".")
        new_img = "." + tokens[1] + "_blurred." + tokens[2]
        print("Saving blurred image:" + new_img)
        blurred_img.save(new_img, optimize=True, quality=100)
    except IOError:
        print("cannot create thumbnail for", image)

# process_img(images_dir[11])

images = [file for file in images_dir if (file.endswith(('jpeg', 'png', 'jpg')) and "_blurred" not in file )]
for image in images:
    process_img(image)

for image in images:
    os.remove(image)

input("Press Enter to continue...")
