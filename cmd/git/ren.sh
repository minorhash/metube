cd public/ppcandy

for i in *jpg
do
    ren=${i: -15}
    echo $ren
mv "$i" $ren
done
