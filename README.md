# Configuration
When starting the docker container you need to provide some environment variables. This describes where to find them.

Example usage:
```shell script
docker run --rm -p 3000:3000 --env IFTTT_WEBHOOK='yourToken' --env PUSHOVER_TOKEN='yourToken' --env PUSHOVER_USER='yourToken' --name mycloud_notify mycloud/notify:latest
```

##IFTTT_WEBHOOK
Needs: `If Maker Event "notify", then Send a notification from the IFTTT app` ifttt applet.

Event name: `notify`

Text: `{{Value1}} {{Value2}}`

Log into https://ifttt.com/ and


The token for the webhook can be found at https://ifttt.com/maker_webhooks/settings.
It's https://maker.ifttt.com/use/ `THISPART`
 
##PUSHOVER_TOKEN
Create an application at https://pushover.net/apps/build.

`To begin using our API to send notifications, use this application's API token:` this is what is needed.

##PUSHOVER_USER
Log into https://pushover.net/ then at the right sight `To receive notifications from a Pushover-powered application, service, or website, just supply your user key:` that's the one.
