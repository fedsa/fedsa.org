let events;
const container = document.getElementById("meetup"),
  placeholder = document.getElementById("meetup_placeholder"),
  placeholderLink = placeholder.querySelector('a'),
  placeholderStatus = placeholder.querySelector('#meetup_placeholder_status');

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
    placeholder.removeChild(placeholderStatus)
    events.forEach(event => {
      const {
        name:title,
        description,featured_photo,photo_album,id,
        how_to_find_us,
        is_online_event,timezone,
        local_date,
        local_time,
        duration,
        link,
        rsvp_limit,
        yes_rsvp_count,
        status,
        venue,
        time,
      } = event;
      const card = {
        title,
        description,featured_photo,photo_album,id,
        how_to_find_us,
        is_online_event,timezone,
        local_date,
        local_time,
        duration,
        link,
        rsvp_limit,
        yes_rsvp_count,
        status,
        venue,
        time,
      };
      createEventCard(card);
    });
  }
)();

/** Build out event cards and add to DOM */
function createEventCard({
  title,featured_photo,id,local_date,local_time,link,status,venue,
}) {
  let cardContent = document.createElement("div");
  cardContent.classList = "card__content flex column__layout";
  const featImg = featured_photo?.photo_link ? featured_photo?.photo_link : "/assets/meta/open-graph.png";
  const FIGURE = `<figure class="card__figure"><img width="100%" height="100%" loading="lazy" src=${featImg} alt="" class="figure__img" /></figure>`;
  const TITLE = `<h3 class="card__title"><span class="highlight__text">${title}</span></h3>`;
  const {address_1,address_2,address_3,city,localized_country_name,name} = venue || {};
  const VENUE =`${name}\n${address_1 ? address_1+"\n":""}${address_2 ? address_2+"\n":""}${address_3 ? address_3+"\n":""}${city} ${localized_country_name}`
  const WHEN = `<span><strong>Date</strong>: ${local_date} ${tConvert(local_time)} GMT+2</span>`; // link to event
  const WHERE = `<span title="${VENUE}" title="${venue?.country ? VENUE : title}"><strong>Location</strong>: ${venue?.country ? venue.name : "Virtual event"}</span>`;
  cardContent.innerHTML =`${FIGURE}
  ${TITLE}
  <div class="card__date">${WHEN}</div>
  <div class="card__location">${WHERE}</div>
  `;
  let anchor = document.createElement("a")
  anchor.href = link;
  anchor.target = "_blank";
  anchor.rel = "noreferrer nofollow";
  anchor.classList = "card__container flex";
  anchor["aria-label"] = "${title} ('meet up .com')";
  const cardContainer = document.createElement("div");
  cardContainer.id = "meetup-"+id;
  cardContainer.dataset.status = status;
  cardContainer.classList = "card event flex column__layout";
  anchor.appendChild(cardContent);
  cardContainer.appendChild(anchor);
  container.insertBefore(cardContainer,placeholder);
}

async function fetchMap(url){
  console.log({url})
  return fetch(url).then(r=>console.log(r))
}


function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
    time[0] = time[0] > 9 ? time[0] : `0${time[0]}`; // Zero prefix
  }
  return time.join (''); // return adjusted time or original string
}


/** <iframe
width="600"
height="450"
style="border:0"
loading="lazy"
allowfullscreen
title="${venue.name} google maps coordinates"
target="_blank" rel="noreferrer nofollow"
src="https://maps.google.com/maps?q=${venue.lat},${venue.lon}&t=&z=13&ie=UTF8&iwloc=&output=embed">
</iframe> */
