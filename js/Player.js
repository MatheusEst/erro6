class Player {

  constructor() {
    this.nome = null
    this.x = 0
    this.y = 0
    this.posicao = null
  }
  update(cont){
    database.ref("/").update({ContagemDJ:cont})
    }
    pegar(){
      var numero= database.ref("ContagemDJ");
      numero.on("value",function(data){
        ContagemDJ = data.val()
      })
    }
    addplr(){
      var pasta = "jogadores/jogador" + this.posicao;
      if(this.posicao == 1){
        this.x = width/2 -100
      }else{
        this.x = width/2 + 100
      }
      database.ref(pasta).set({nnome:this.nome,x:this.x,y:this.y})
    console.log(this.posicao)
    }
}
