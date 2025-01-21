/*const couleurs = ["jaune", "bleu", "rose", "vert"]

function boucleRecursive(i, arr){
  console.log(i,`arr[${i}] = ${arr[i]}`)
  if(i === arr.length){
    return
  }
  boucleRecursive(i+1, arr)
}
boucleRecursive(0, couleurs)*/

const traverseTree = (person) => {
  if (person.children === undefined) {
    return;
  }
  console.log(`${person.label} a ${person.children.length} enfants`);
  for (const child of person.children) {
    traverseTree(child);//Recommencer la fonction seulement pour les children
  }
};
traverseTree(familyTree);



