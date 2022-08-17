class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  salut() {
    //console.log('Mon nom est: ' + this.nom + ' et j\' ai ' + this.age + '.');

    //Le backtic c'est bien mieux
    console.log(`'Mon nom est: ${this.nom} et j'ai ${this.age} ans.`);
  }
}
