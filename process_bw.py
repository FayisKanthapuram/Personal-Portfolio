import sys
from PIL import Image, ImageEnhance
import os

input_path = 'public/myImage2.png'
output_path = 'public/hero-processed.png'

if not os.path.exists(input_path):
    print(f"Error: {input_path} not found.")
    sys.exit(1)

print("Opening user-provided transparent image...")
try:
    input_image = Image.open(input_path).convert("RGBA")

    print("Applying black and white color grade...")
    # Separate color channels
    r, g, b, a = input_image.split()
    rgb_image = Image.merge("RGB", (r, g, b))

    # Convert to grayscale (black and white)
    rgb_image = rgb_image.convert("L").convert("RGB")

    # Adjust contrast to make it punchy and cinematic
    enhancer_contrast = ImageEnhance.Contrast(rgb_image)
    rgb_image = enhancer_contrast.enhance(1.3)

    # Merge alpha back
    r2, g2, b2 = rgb_image.split()
    final_image = Image.merge("RGBA", (r2, g2, b2, a))

    print("Saving processed image...")
    final_image.save(output_path, "PNG")
    print("Done!")
except Exception as e:
    print(f"Error processing image: {e}")
    sys.exit(1)
