#!/bin/bash

for file in *.mp4; do
  tmpfile="tmp_$file"
  ffmpeg -i "$file" -vf scale=480:800 -vcodec libx264 -crf 35 -preset veryslow -acodec aac -b:a 64k -movflags +faststart "$tmpfile" && mv "$tmpfile" "$file"
done
  