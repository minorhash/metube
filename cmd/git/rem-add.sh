dir=$(pwd)
str=${dir: -6}
echo $str

git remote add origin https://github.com/user/$str.git

