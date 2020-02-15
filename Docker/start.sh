cd ..
docker stop mycloud_notify
docker run --rm -p 3000:3000 --env IFTTT_WEBHOOK='yourToken' --env PUSHOVER_TOKEN='yourToken' --env PUSHOVER_USER='yourToken' --name mycloud_notify mycloud/notify:latest
