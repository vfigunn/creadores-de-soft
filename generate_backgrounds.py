from PIL import Image, ImageDraw, ImageFont
import os

def create_image(filename, text, color):
    img = Image.new('RGB', (1024, 1024), color=color)
    d = ImageDraw.Draw(img)

    # Try to load a font, otherwise use default
    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except IOError:
        font = ImageFont.load_default()

    # Simple centered text
    text_bbox = d.textbbox((0,0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]

    x = (1024 - text_width) / 2
    y = (1024 - text_height) / 2

    d.text((x, y), text, fill=(255, 255, 255), font=font)

    # Save as PNG
    img.save(f"public/backgrounds/{filename}.png", "PNG")
    print(f"Created {filename}.png")

if __name__ == "__main__":
    create_image("cooperativas", "Software para Cooperativas", (52, 152, 219))
    create_image("restaurantes", "Software para Restaurantes", (231, 76, 60))
