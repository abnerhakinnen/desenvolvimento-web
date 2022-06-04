function mostrarViagem(value) {
  console.log(value);
  if (value === '1') {
    document.getElementById("nac").setAttribute("class", "visible");
    document.getElementById("int").setAttribute("class", "visible");
  } else if (value === '2') {
    document.getElementById("nac").setAttribute("class", "invisible");
    document.getElementById("int").setAttribute("class", "invisible");
    document.getElementById("intes").setAttribute("class", "visible");
    document.getElementById("interm").setAttribute("class", "visible");
    document.getElementById("mun").setAttribute("class", "visible");
  }
}

function saldo(event){
  event.preventDefault();
  let saldo = document.getElementById("saldo").textContent;
  let tipoTransporte = document.getElementById("selectTravel").value;
  let tipoViagem = document.getElementById("selectTipoTravel").value;
  let verificaIda = document.getElementById("flexCheckDefault").checked;
  let totalViagem = document.getElementById("totalv").textContent; 
  let tViagem; 
  let saldoTotal = 0;
  switch(tipoTransporte){
    case '2':
      if(tipoViagem === '3' && verificaIda === true){
          saldo -= 300;
          saldoTotal = saldo;
          if(saldoTotal>=0){
            break;
          }else{
            document.getElementById("btnEnviar").disabled = true;
            alert("Saldo insuficiente");
            return;
          }
      }else if(tipoViagem === '4' && verificaIda === true){
          saldo -= 100;
          saldoTotal = saldo;
          if(saldoTotal>=0){
            break;
          }else{
            document.getElementById("btnEnviar").disabled = true;
            alert("Saldo insuficiente");
            return;
          }
      }else if(tipoViagem === '5' && verificaIda === true){
          saldo -= 50;
          saldoTotal = saldo;
          if(saldoTotal>=0){
            break;
          }else{
            document.getElementById("btnEnviar").disabled = true;
            alert("Saldo insuficiente");
            return;
          }
    }else{
      if(tipoViagem === '3'){
        saldo -= 150;
        saldoTotal = saldo;
        if(saldoTotal>=0){
          break;
        }else{
          document.getElementById("btnEnviar").disabled = true;
          alert("Saldo insuficiente");
          return;
        }
      }else if(tipoViagem === '4'){
        saldo -= 50;
        saldoTotal = saldo;
        if(saldoTotal>=0){
          break;
        }else{
          document.getElementById("btnEnviar").disabled = true;
          alert("Saldo insuficiente");
          return;
        }
      }else if(tipoViagem === '5'){
        saldo -= 25;
        saldoTotal = saldo;
        if(saldoTotal>=0){
          break;
        }else{
          document.getElementById("btnEnviar").disabled = true;
          alert("Saldo insuficiente");
          return;
        }
      }
    }
  break;
  case '1':
    if(tipoViagem === '1' && verificaIda === true){
      saldo -= 10000;
      saldoTotal = saldo;
      if(saldoTotal>=0){
        break;
      }else{
        document.getElementById("btnEnviar").disabled = true;
        alert("Saldo insuficiente");
        return;
      }
    }else if(tipoViagem ==='2' && verificaIda === true){
      saldo -= 1000;
      saldoTotal = saldo;
      if(saldoTotal>=0){
        break;
      }else{
        document.getElementById("btnEnviar").disabled = true;
        alert("Saldo insuficiente");
        return;
      }
    }else if(tipoViagem === '1'){
       saldo -= 5000;
       saldoTotal = saldo;
       if(saldoTotal>=0){
        break;
      }else{
        document.getElementById("btnEnviar").disabled = true;
        alert("Saldo insuficiente");
        return;
      }
      }else if(tipoViagem ==='2'){
        saldo -= 500;
        saldoTotal = saldo;
        if(saldoTotal>=0){
          break;
        }else{
          document.getElementById("btnEnviar").disabled = true;
          alert("Saldo insuficiente");
          return;
        }
      }
    break;
  }
    switch (tipoViagem) {
      case '1':
          tViagem = "Internacional"
          break;
      case '2':
          tViagem = "Nacional" 
          break;
      case '3':
          tViagem = "Interestadual" 
          break;
      case '4':
          tViagem = "Intermunicipal" 
          break;
      case '5':
          tViagem = "Municipal" 
          break;
      default:
          break;
  } 
  let viagem = {
      tipoTransporte: tipoTransporte === '1' ? 'Avião' : 'Onibus',
      tipoViagem: tViagem,
      verificaIda: verificaIda ? "Sim" : "Não",
      saldoTotal: saldoTotal 
    }

    addTabela(viagem);
    document.getElementById("saldo").textContent = saldo;
    document.getElementById("totalv").textContent = parseInt(totalViagem) + 1;
    console.log(saldo);
    console.log(viagem);
}
function addTabela(element) {
  let table = document.getElementById("hist");
  let newline = document.createElement("TR");


  var newRow=document.getElementById('hist').insertRow();
  var colUm  = newRow.insertCell(0);

  var colUmText  = document.createTextNode(element.tipoTransporte)
  colUm.appendChild(colUmText);

  var colDois = newRow.insertCell(1);

  var colDoisText  = document.createTextNode(element.tipoViagem)
  colDois.appendChild(colDoisText);

  var colT = newRow.insertCell(2);

  var colTText  = document.createTextNode(element.verificaIda)
  colT.appendChild(colTText);

  var colQ = newRow.insertCell(3);

  var colQText  = document.createTextNode(element.saldoTotal)
  colQ.appendChild(colQText);


}