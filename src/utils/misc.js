const flatten = (records) => {
  let output = [];
  records.forEach(e => {
    //start of recursion
    if (e.hasChild) {
      //change the child flag
      if (Array.isArray(e.hasChild)) {
        let child = e.hasChild; //change the child flag
        delete e.hasChild; //change the child flag
        output.push(e); //push the parent
        this.flatten(child).forEach(node => {
          output.push(node); //push the last node
        });
      } else {
        let child = [e.hasChild]; //change the child flag
        delete e.hasChild; //change the child flag
        output.push(e); //push the parent
        this.flatten(child).forEach(node => {
          output.push(node); //push the last node
        });
      }
    } else {
      output.push(e);
    }
  });
  return output;
}

const sanitizedBool = (input) => {
  if (input === null) return;
  return input === "true" ? true : false;
}

export default {
  flatten,
  sanitizedBool
}