const mtgJson = require('./assets/sets/M19.json');

const mtgCards = filterDoubleFaced(mtgJson.M19.cards);


export function getArtifacts() {
  return mtgCards.filter(function (card) {
    return card.types.includes("Artifact");
  });
}

export function getNonBasicLand() {
  return mtgCards.filter(function (card) {
    // basic lands have supertype 'basic'
    const basic = "supertypes" in card && card.supertypes.includes("Basic");
    // return non-basic lands
    return card.types.includes("Land") && !basic;
  });
}

export function getMulticolor() {
  return mtgCards.filter(function (card) {
    return "colors" in card && card.colors.length > 1;
  });
}

export function getColor(color) {
  return mtgCards.filter(function (card) {
      return "colors" in card && card.colors.length == 1 && card.colors[0] == color;
  });
}

/** If double-faced layout, only show first side/name
 */
function filterDoubleFaced(cards) {
  return cards.filter(card => {
    // keep unless:
    return !("layout" in card && 
      // double-faced
      card.layout == "double-faced" && 
      // with multiple names
      "names" in card && card.names.length > 1 &&
      // and not the front face
      card.name != card.names[0])
  });
}