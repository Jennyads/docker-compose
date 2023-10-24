import { Request, Response } from 'express';
import { Product } from "../entities/Product";

var data =[
    {id: 1, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
    {id: 2, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
    {id: 3, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
    {id: 4, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
    {id: 5, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
    {id: 6, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
    {id: 7, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
    {id: 8, prodTitle: "Racao super premium", prodDescription: "ideal para cachorro de alto porte", prodPrice: "20,80"},
]
var idGlobal = 8;

class ProductController {

    public async getHistoricProduct (req: Request, res: Response) : Promise<Response> {
        return res.json(data)
    }

    public async getProduct (req: Request, res: Response) : Promise<Response> {
        const idProd:any = req.params.uuid
        var prod = data.filter(prod => prod.id === idProd)[0]
        return res.json(prod)
    }

    public async postProduct (req: Request, res: Response) : Promise<Response> {
        const createProduct = req.body
       
       idGlobal++
        var d = {
            id: idGlobal,
            prodTitle :createProduct.prodTitle,
            prodDescription : createProduct.prodDescription,
            prodPrice : createProduct.prodPrice}
     
        data.push(d)
        return res.json(data)
    }

    public async putProduct (req: Request, res: Response) : Promise<Response> {
        const createProduct = req.body
        const idProd:any = req.params.uuid

        var prod = data.filter(prod => prod.id === idProd)[0]
        var index = data.indexOf(prod)

        data[index] = {
            id:idProd,
            prodTitle :createProduct.prodTitle,
            prodDescription : createProduct.prodDescription,
            prodPrice : createProduct.prodPrice}
        
 
        return  res.json(data)
    }

    public async deleteProduct (req: Request, res: Response) : Promise<Response> {
        const idProd:any = req.params.uuid
        data = data.filter(prod => prod.id !== idProd)
        return res.json(data)
    }

}
export default new ProductController();