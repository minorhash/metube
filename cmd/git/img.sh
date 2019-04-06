cd public/shr

for i in *mp4
do
    se=$(echo $i|sed s/\.mp4//g)
    ffmpeg -y -i $i -ss 25 -vframes 1 $se.jpg
done
