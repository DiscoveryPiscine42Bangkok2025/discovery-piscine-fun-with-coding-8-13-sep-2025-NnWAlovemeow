if [ $# == 0 ]
then echo "No arguments supplied"
elif [ $# -le 3 ]
then for i in $@
do echo "$i"
done
fi