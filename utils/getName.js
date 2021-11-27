const getName = (name) => {
  return name.length > 9 ?
    `${name.slice(0, 9)}...` :
    name;
}

export default getName;