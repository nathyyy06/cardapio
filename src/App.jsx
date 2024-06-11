import { useState } from "react";
import"./src/global.css";

export default function App() {

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Hambúrguer",
            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",
            preco: "R$ 25,99"
        },
        {
            id: 2,
            item: "Coca-cola 350ml",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",
            preco: "R$ 5,99"
        },
        {
            id: 3,
            item: "Batatas fritas",
            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",
            preco: "R$ 8,99"
        },
        {
            id: 4,
            item: "Suco de Frutas",
            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",
            preco: "R$ 8,99"
        },
    ]);


const[listPedidos,setPedidos] = useState([]);
const adicionarPedido = (item) => {
   setlistaPedidos([...listPedidos],item);
}
   const removerPedido = (id) => {
    let listaAux = listaPedidos.filter((produto) => produto.id !== id);
    setlistaPedidos(listaAux);
   }

    return (
        <div className="bloco-principal">
            <div className="bloco-produtos">

            </div>
            <div className="bloco-pedidos">
                (
                    listaProdutos.map((produtos) => 
                      <div key={setProdutos.id}>
                        <img src={setProdutos.imagem} alt={setProdutos.item}/>
                        <p>{Produtos.item}</p>
                        <p>{Produtos.preço}</p>
                        <button onClick={() => adicionarPedido(produto)}>QUERO</button>
                      </div>
                      <tr>
                        <td>
                        {produto.item}
                        </td>
                      <td>
                        {produto.preço}
                      </td>
                      <td>
                        <button onClick={()=> removerPedido(produto.id)}>X</button>
                      </td>
                      </tr>
                    )
                )
            </div>
        </div>
    );
}