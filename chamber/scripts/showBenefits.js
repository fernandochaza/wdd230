function showBenefits(level) {
  var benefits = document.getElementById("benefits");
  var benefitsContent = "";

  switch (level) {
    case "non-profit":
      benefitsContent =
        "<h3>Benefits for NP Membership:</h3><ul><li>Networking opportunities with other non-profit organizations</li><li>Inclusion in the non-profit directory</li><li>Participation in educational workshops and seminars</li></ul>";
      break;
    case "bronze":
      benefitsContent =
        "<h3>Benefits for Bronze Membership:</h3><ul><li>Business listing in the online directory</li><li>Access to chamber events and networking opportunities</li><li>Educational resources and workshops</li></ul>";
      break;
    case "silver":
      benefitsContent =
        "<h3>Benefits for Silver Membership:</h3><ul><li>Enhanced business listing</li><li>Exclusive invitations to VIP events</li><li>Access to member-only resources</li></ul>";
      break;
    case "gold":
      benefitsContent =
        "<h3>Benefits for Gold Membership:</h3><ul><li>Premier business listing</li><li>Recognition as a Gold Member</li><li>Priority access to chamber leadership</li><li>Speaking opportunities at chamber events</li><li>Customized marketing and promotional support</li></ul>";
      break;
    default:
      benefitsContent = "";
  }

  benefits.innerHTML = benefitsContent;
  benefits.classList.remove("hidden");
  benefits.focus();
}
