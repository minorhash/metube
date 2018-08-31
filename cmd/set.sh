dir=$(pwd)
str=${dir: -5}
echo $str

git remote set-url origin git@github.com:minorhash/$str.git

