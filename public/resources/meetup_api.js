let events;
const container = document.getElementById("meetup"),
  placeholder = document.getElementById("meetup_placeholder");


/** Build out event cards and add to DOM */
function createEventCard() {

}

(
  function loadingIndicator() {
    placeholder.innerText = "Loading..."
    let interval = setInterval(()=>{
      if (!events) placeholder.innerText += ".";
      else clearInterval(interval)
    },800)
    setTimeout(()=>{
      if (interval !== undefined) clearInterval(interval)
    },10000)
  }
)();

(
/** Parse meetup.json and trigger DOM build */
  async function getLatestEvents() {
    const meetupEvents = await fetch("/assets/meetup.json")
      .then(res=>res.json())
      .then(oldToNewArr=>oldToNewArr.reverse());
    events = meetupEvents;
    placeholder.innerText = JSON.stringify(events,null,2)
  }
)();
