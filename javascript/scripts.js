const memberDropdown = document.querySelector('select');

const fcMemberName = document.getElementById('fc-member-name');
const fcMemberImage = document.getElementById('fc-member-image');
const fcMemberPortrait = document.getElementById('fc-member-portrait');
const fcMemberAnecdote = document.getElementById('fc-member-anecdote');
const fcMemberRace = document.getElementById('fc-member-race');
const fcMemberPronouns = document.getElementById('fc-member-pronouns');
const fcMemberTitle = document.getElementById('fc-member-tiel');
const fcMemberFavJobs = document.getElementById('fc-member-favorite-jobs');
const fcMemberLeastFavJobs = document.getElementById(
  'fc-member-least-favorite-jobs'
);

fetch('../member-info.json')
  .then((response) => response.json())
  .then((fcMembers) => {
    console.log(fcMembers);

    memberDropdown.addEventListener('change', () => {
      const memberIndex = memberDropdown.selectedIndex;

      fcMemberImage.src = fcMembers[memberIndex].image;
    });
  });
