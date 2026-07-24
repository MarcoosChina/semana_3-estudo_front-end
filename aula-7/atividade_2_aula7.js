const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2026,
    descricao: function () {
        console.log("Carro: ",this.marca, "-",this.modelo, "-",this.ano);
    }
};
carro.descricao();