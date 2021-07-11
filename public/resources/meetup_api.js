let events;
const container = document.getElementById("meetup"),
  placeholder = document.getElementById("meetup_placeholder"),
  placeholderLink = placeholder.querySelector('a'),
  placeholderStatus = placeholder.querySelector('#meetup_placeholder_status');

/** Build out event cards and add to DOM */
function createEventCard({title}) {
  let cntnr = document.createElement("div");
  let content = document.createTextNode(title);
  cntnr.appendChild(content);
  container.insertBefore(cntnr,placeholder);
}

(
  function loadingIndicator() {
    placeholderStatus.innerText = "(fetching...)";
    let interval = setInterval(()=>{
      if (!events) placeholderStatus.innerText = placeholderStatus.innerText.replace(/([)])$/,".)");
      else clearInterval(interval);
    },800)
    setTimeout(()=>{
      if (interval !== undefined) clearInterval(interval);
      if (!events) {
        placeholderStatus.innerText = "(unable to fetch)";
        setTimeout(()=>{placeholder.removeChild(placeholderStatus)},2000);
      }
    },4200)
  }
)();

(
/** Parse meetup.json and trigger DOM build */
  async function getLatestEvents() {
    const meetupEvents = await fetch("/assets/meetup.json")
      .then(res=>res.json())
      .then(oldToNewArr=>oldToNewArr.reverse());
    events = meetupEvents;
    console.log({events});
    placeholder.removeChild(placeholderStatus)
    events.forEach(e => {
      createEventCard({title:e.name})
    });
  }
)();
