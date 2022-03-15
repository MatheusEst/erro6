class Game {
  constructor() {
    
  }
  
startar(){
      form = new Form();
      form.display();
      player = new Player()
      
  
    }

update(estado){
database.ref("/").update({estadoJogo:estado})
}
pegar(){
  var numero= database.ref("estadoJogo");
  numero.on("value",function(data){
    estadoJogo = data.val()
  })
}

  }


