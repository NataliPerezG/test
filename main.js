const url = `https://api.api-ninjas.com/v2/randomuser?count=10`;

const opciones = {
  method: "GET",
  headers: { "X-Api-key": "DAWYX7gM4TIy9WSI2Kudissd7MDKomGzb5PBsMMt" },
};

async function getData() {
  const resp = await fetch(url, opciones);
  const datos = await resp.json();
  console.log(datos);
}

const datos = getData();
