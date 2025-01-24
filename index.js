/*const couleurs = ["jaune", "bleu", "rose", "vert"]

function boucleRecursive(i, arr){
  console.log(i,`arr[${i}] = ${arr[i]}`)
  if(i === arr.length){
    return
  }
  boucleRecursive(i+1, arr)
}
boucleRecursive(0, couleurs)*/

/*function boucleR(i){
  console.log(i)
  if (i === 27){
    return
  }
  boucleR(i+9)
}
boucleR(0)*/

/*const traverseTree = (person) => {
  if (person.children === undefined) {
    return;
  }
  console.log(`${person.label} a ${person.children.length} enfants`);
  for (const child of person.children) {
    traverseTree(child);//Recommencer la fonction seulement pour les children
  }
};
traverseTree(familyTree);*/

/*function afficherDossier(){
  console.log(`${dossierPrincipal.nom}`)
}
afficherDossier()*/



const dossierPrincipal = {
  nom: 'Ada',
  contenu: [{
      nom: 'Projets collectifs Ada',
      contenu: [{
          nom: 'Pico8',
          contenu: [{
            nom: 'mariokart.p8'
          }]
        },
        {
          nom: 'Dataviz',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }
      ]
    },
    {nom: 'CV.pdf'},
    {
      nom: 'Projets persos',
      contenu: [{
        nom: 'Portfolio',
        contenu: [{
            nom: 'index.html'
          },
          {
            nom: 'script.js'
          }
        ]
      }]
    },
  ],
}


/*function afficherDossierRecurvif(fichier){
  if( fichier.contenu === undefined){
    return
  }
  console.log(`${fichier.nom} ${fichier.contenu.length}`)
  for(const contenu of fichier.contenu)
  afficherDossierRecurvif(contenu)
}
afficherDossierRecurvif(dossierPrincipal)*/

function afficherDossierRecurvif(dossier){
  for(const element of dossier.contenu){
  if(!element.contenu){
    return
  }
  for(const e of element.contenu){
  console.log(e.nom)}
  afficherDossierRecurvif(element)
}
}
afficherDossierRecurvif(dossierPrincipal)