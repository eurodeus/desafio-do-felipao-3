class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Tipo de ataque conforme o tipo do herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido';
          break;
      }
  
      // Exibir a mensagem do ataque
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }

  const mago = new Heroi('Massa', 28, 'mago');
mago.atacar();
  

  