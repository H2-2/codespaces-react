import cv2

# Load the image
img = cv2.imread("image.jpg")

# Display the image
cv2.imshow("Image", img)

# Wait for a key press
cv2.waitKey(0)

# Close all windows
cv2.destroyAllWindows()
pip install opencv-python
