import sys
from PIL import Image

def remove_white_background(input_path, output_path, threshold=220): # Lowered threshold slightly to be safe
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # item is (R, G, B, A)
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                newData.append((255, 255, 255, 0))  # Transparent
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    # Grid (Background - Keep as is or process if needed, usually opaque or blended. The prompt said seamless texture, likely opaque is fine but let's see. 
    # Actually, the user script sets it as background. Let's just copy it or keep it opaque. The prompt didn't say white background for this one.)
    try:
        grid = Image.open(sys.argv[1])
        grid.save("assets/images/parallax/layer_bg_grid.png")
        print("Saved layer_bg_grid.png")
    except Exception as e:
        print(f"Error saving grid: {e}")

    # Code/Math (Needs transparency)
    remove_white_background(sys.argv[2], "assets/images/parallax/layer_code_math.png")

    # Projects (Needs transparency)
    remove_white_background(sys.argv[3], "assets/images/parallax/layer_projects_mockups.png")

    # Profile (Needs transparency)
    remove_white_background(sys.argv[4], "assets/images/parallax/layer_profile_cutout.png")
