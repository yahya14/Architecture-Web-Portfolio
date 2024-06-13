from PIL import Image
import os
import glob

aspect_ratio = [8.5, 11]

images_dir = glob.glob(".\\public\\images\\*\\*")
print(images_dir)

def crop_dimensions(width, height):
    left, top, right, bottom = 0, 0, 0, 0
    if width >= height:
        ratio = 1 - (aspect_ratio[1] / aspect_ratio[0])

        left = 0
        top = height * ratio / 2
        right = width
        bottom = height - height * ratio / 2
    else:
        ratio = 1 - (aspect_ratio[0] / aspect_ratio[1])

        left = -width * ratio / 2
        top = 0
        right = width + width * ratio / 2
        bottom = height
    return left, top, right, bottom

def process_img(image):
    try:
        img = Image.open(image)
        (width, height) = img.size
        left, top, right, bottom = crop_dimensions(width, height)   # Get dimensions
        print(left, top, right, bottom)

        # Crop the center of the image
        imgC = img.copy().crop((left, top, right, bottom))
        tokens = image.split(".")
        new_img = "." + tokens[1] + "_lettered." + tokens[2]
        print("Saving resized image:" + new_img)
        print(imgC.size)
        imgC.save(new_img, optimize=True, quality=100)
    except IOError:
        print("cannot create thumbnail for", image)

# process_img(images_dir[11])

images = [file for file in images_dir if (file.endswith(('jpeg', 'png', 'jpg')) and "_blurred" not in file )]
# for image in images:
#     process_img(image)

input("Press Enter to continue...")
