#!/bin/sh

# code goes here.
# echo "This is a script, run by cron!"

DATE=`date`
TIMESTAMP=`date +%s`
if [ `expr $TIMESTAMP % 2` == 0 ]
then
    echo 'File A content.File created date: '+$DATE  > /app/a.html
else
    echo 'File B content.File created date: '+$DATE  > /app/b.html
fi
# echo 'File created date: '+$DATE+ > a.txt
# echo `date +%s`