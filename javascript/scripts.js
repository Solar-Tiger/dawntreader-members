const memberDropdown = document.querySelector('select');

const fcMemberImage = document.getElementById('fc-member-image');

fetch('../member-info.json')
  .then((response) => response.json())
  .then((fcMembers) => {
    console.log(fcMembers);

    memberDropdown.addEventListener('change', () => {
      const memberIndex = memberDropdown.selectedIndex;

      console.log(memberIndex);

      fcMemberImage.src = fcMembers[memberIndex].image;
    });
  });
