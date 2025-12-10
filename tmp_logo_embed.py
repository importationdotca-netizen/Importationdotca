from PIL import Image
import numpy as np
img = Image.open("media/Phones/estimate.png").convert("L")
arr = np.array(img, dtype=float)
h, w = arr.shape
best = None
win = 250
for y in range(0, h - win, 20):
    for x in range(0, w - win, 20):
        window = arr[y:y+win, x:x+win]
        std = window.std()
        mean = window.mean()
        if 150 < mean < 240:
            score = std
            if best is None or score < best[0]:
                best = (score, x, y, mean)
print(best)
