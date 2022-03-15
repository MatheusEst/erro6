class Form {
  constructor() {
  this.input = createInput("").attribute("placeholder","Digite seu Nome...");
  this.botao = createButton("Começar");
  this.titulo = createImg("assets/TITULO.png");
  this.msg = createElement("h1");

  }
display(){
    this.posicao();
    this.estilo();
    
    this.pressionar()

}
posicao(){
    this.input.position(width / 2 - 125,height / 2);
    this.titulo.position(width / 6, 100);
    this.botao.position(width /2 - 100,height / 2 + 100);
    this.msg.position(width/2 - 100,height -100)

}
estilo(){
    this.input.class("customInput");
    this.titulo.class("gameTitle");
    this.botao.class("customButton");
    this.msg.class("greeting")

}

pressionar(){
    this.botao.mousePressed(()=>{
        this.input.hide();
        this.botao.hide();
        var mesg = 'Aguardando Oponente...';
        this.msg.html(mesg);
        ContagemDJ+=1;
        player.nome = this.input.value();
        player.posicao = ContagemDJ;
        console.log(ContagemDJ)
        player.addplr();
        player.update(ContagemDJ);
        
    })

}
hide(){
    this.botao.hide();
    this.titulo.hide();
    this.input.hide();
    this.msg.hide();
}
}
