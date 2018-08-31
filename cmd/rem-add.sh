dir=$(pwd)
str=${dir: -5}
echo $str

git remote add origin https://github.com/user/$str.git

