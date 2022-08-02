export interface Produtos{
    id:number;
    nomeProduto:string;
    preco:number;
    quantidadeEstoque:number;
    descricaoPreco:string;
    imagem:string;
}

export interface ProdutosDescricao extends Produtos{
    quantidade:number;
}

export const produtos:Produtos[]=[
    {id:1,nomeProduto:"Pulseira do Amor",preco:45.00,quantidadeEstoque:100,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/conjuntoPulseira.png"},
    {id:2,nomeProduto:"Gargantilha Verde",preco:26.00,quantidadeEstoque:28,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/green.png"},
    {id:3,nomeProduto:"Gargantilha LGBTQIA+",preco:26.00,quantidadeEstoque:14,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/lgbt.png"},
    {id:4,nomeProduto:"Gargantilha Reggae",preco:26.00,quantidadeEstoque:45,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/reggae.png"},
    {id:5,nomeProduto:"Pulseira Sign.Capricórnio",preco:16.00,quantidadeEstoque:36,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/signo.png"},
    {id:6,nomeProduto:"Gargantilha Azul",preco:26.00,quantidadeEstoque:27,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/azul.png"},
    {id:7,nomeProduto:"Fora Inveja",preco:40.00,quantidadeEstoque:27,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/inveja.png"},
    {id:8,nomeProduto:"100% Foco",preco:36.00,quantidadeEstoque:27,descricaoPreco:"10% de desconto á vista ou PIX",imagem:"./assets/foco.png"}

]