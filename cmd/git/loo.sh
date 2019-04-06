cd public/shr

for i in *mp4
do
    se=$(echo $i|sed s/\.mp4//g)
    ffmpeg  -i $i -ss 0 -vframes 1 $se.jpg
done
