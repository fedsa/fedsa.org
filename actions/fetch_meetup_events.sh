#!/bin/bash
FOUND_SELF=`ls $PWD/actions/fetch_meetup_events.sh`

echo "Fetching FEDSA Community Events from Meetup API"

if [[ $FOUND_SELF == "" ]]; then
echo "...
Exiting script execution. Not at proper directory.
Currently at: $PWD
...
Please change directories to the FEDSA website root directory and try again.
"
exit 1
fi

curl -X GET "https://api.meetup.com/fedsa-community/events?scroll=future_or_past" -o public/assets/meetup.json
git add public/assets/meetup.json
git commit -m "🤖 meetup api update"
