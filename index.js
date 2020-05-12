function scuberGreetingForFeet(arg){
  // Write your code here!
  if (arg <= 400) {
    return 'This one is on me!'
  } else if (arg >= 2000 && arg <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (arg > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const zoom = city === "NYC" ? ("Ok, sounds good.") : ("No go.");
  return zoom;
}

function switchOnCharmFromTip(response){
  // Write your code here!
  let responseType;
  switch (response) {
    case 'generous':
      responseType = "Thank you so much."
      break;
    case 'not as generous':
      responseType = "Thank you."
      break;
    default:
      responseType = "Bye."
      break;
  }
  return responseType
}