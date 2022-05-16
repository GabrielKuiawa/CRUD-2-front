export interface VagasEmpresa {
    id:number;
    nome:string;
    id_vag:number;
    titulo:string;
    tudo:{
        result:string[]
    }
};
// EmpresaId: {
//     tudo:result,
//     imagem:'http://localhost:3003/'+result[0].imagem,
//     request:{
//         tipo: 'GET',
//         descricao:'retorna um todas empresas',
//         url:'http://localhost:3003/empresas'
//     }  
// }