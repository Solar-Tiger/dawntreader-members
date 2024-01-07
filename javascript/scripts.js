fetch('../member-info.json')
  .then((response) => response.json())
  .then((fcMembers) => {
    console.log(fcMembers);

    const fcMemberImage = document.getElementById('fc-member-image');

    console.log(fcMemberImage);

    // fcMemberImage.src = fcMembers[0].image;
  });
