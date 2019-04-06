
lftp -uadmin,bulk2010 tmsmusic.tokyo \
-e "
cd /home/admin/exp/blo/net/nod
lcd /mnt/dat/xp/xp/blo/net/nod
mirror -R cmd
exit
"
