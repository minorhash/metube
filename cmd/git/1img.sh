    se=$(echo $1|sed s/\.mp4//g)
    echo $se
    ffmpeg -y -i $1 -ss 30 -vframes 1 $se.jpg
