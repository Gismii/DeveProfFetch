
 export async function buscaPerfil() {
    try{
      const response = await fetch("https://api.github.com/users/Gismii");
      const body = await response.json();
      console.table(body);
      var h = "Repositorios"
      document.querySelector("#n").innerText = body.name;
      document.querySelector("#l").innerText = body.location;
      document.querySelector("#s").innerText = body.blog;
      document.querySelector("#c").innerText = body.created_at;
      document.querySelector("#a").innerText = body.updated_at;
      document.querySelector("#r").innerText = body.public_repos;
      
      const nome = body.name;
    }catch{
      console.log("Algo errado!")
    }finally{
      console.log("OK");
    }
    
  }
  
  
 