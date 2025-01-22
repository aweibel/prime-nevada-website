#!/bin/bash

# Create optimized directory if it doesn't exist
mkdir -p images/optimized

# Optimize JPG files
for file in images/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "Optimizing $filename..."
        # Convert to progressive JPEG and optimize
        sips -s format jpeg -s formatOptions progressive "$file" --out "images/optimized/$filename"
        # Resize if larger than 2000px while maintaining aspect ratio
        sips -Z 2000 "images/optimized/$filename"
    fi
done

# Optimize PNG files
for file in images/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "Optimizing $filename..."
        # Convert to PNG and optimize
        sips -s format png "$file" --out "images/optimized/$filename"
        # Resize if larger than 2000px while maintaining aspect ratio
        sips -Z 2000 "images/optimized/$filename"
    fi
done

echo "Optimization complete. Optimized images are in the images/optimized directory."
