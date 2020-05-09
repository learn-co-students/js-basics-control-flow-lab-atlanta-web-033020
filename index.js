function scuberGreetingForFeet(distance){
  let result
  if (distance > 0 && distance <= 400){
    result = "This one is on me!"
  }
  else if (distance > 2000 && distance <= 2500){
    result = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500){
    result = "No can do."
  }
  return result;
}

function ternaryCheckCity(destination){
  return destination === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
    break;
  }
}