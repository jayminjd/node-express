import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, UpdateProduct } from './interfaces/product.interface';
import {InjectRepository} from '@nestjs/typeorm'
import {DeleteResult, Repository, UpdateResult} from 'typeorm'
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductDetailsEntity } from './entities/products-details.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository:Repository<ProductEntity>,
        @InjectRepository(ProductDetailsEntity)
        private readonly productDetailsRepository:Repository<ProductDetailsEntity>
    ){}

    // products: Product[]=[];
    //db logic here
   async create(product: CreateProductDTO):Promise<Product>{
     
       //save the data in product detail
       const productDetails=await this.productDetailsRepository.save({
        dimension:product.dimension,
        partNumber:product.partNumber,
        weight:product.weight,
        manufacturer:product.manufacturer,
        origin:product.origin
       });
      
      // return await this.productRepository.save(product);
       const newProduct=new ProductEntity();
       newProduct.name=product.name;
       newProduct.price=product.price;
       newProduct.qty=product.qty;
        //add the realtion with product entity
       newProduct.productDetails=productDetails
       
      await this.productRepository.save(newProduct);
       return {...newProduct,productDetails}
        // this.products.push(product)
        // return this.products;
    }

    async findAll():Promise<Product[]>{
        return await this.productRepository.find({relations:['productDetails']});     
        //return this.products;
    }

    async findOne(id:number): Promise<Product>{
        const results=await this.productRepository.findOne(id,{relations:['productDetails']});
        if(!results){
            throw new NotFoundException('could not find any product')
        }
        return results;
    }

    async delete(productId:number,productDetailsId:number):Promise<any>{
           await Promise.all([
            await this.productRepository.delete(productId),
            await this.productDetailsRepository.delete(productDetailsId),])

           return {msg:`product is deleted with id ${productId} and productDetails with id ${productDetailsId}`}
        }

        // async delete(productId:number,productDetailsId:number):Promise<any>{
        //     //await Promise.all([
        //      await this.productRepository.delete(productId)
        //      await this.productDetailsRepository.delete(productDetailsId)
 
        //    return {msg:`product is deleted with id ${productId} and productDetails with id ${productDetailsId}`}
        //  }
        
    async update(id:number,recordToUpdate:UpdateProduct):Promise<Product>{     // method to return updated record
        const product=await this.productRepository.findOne(id,{relations:['productDetails']});
            if(!product){
             throw new NotFoundException('could not find any product')
            }
        
        const {qty,price,name}=recordToUpdate;
        await this.productRepository.merge(product,{qty,price,name});
        const updatedProduct= await this.productRepository.save(product);

         //update records in productDetails
        const foundDetails= await this.productDetailsRepository.findOne(product.productDetails.id)
        
        const {dimension,partNumber,weight,manufacturer,origin}=recordToUpdate;
        
        await this.productDetailsRepository.merge(foundDetails,{dimension,partNumber,weight,manufacturer,origin});
        const updatedProductDetails= await this.productDetailsRepository.save(foundDetails)
        
        return {...updatedProduct,productDetails:updatedProductDetails}
     }        

    /* async update(id:number,recordToUpdate:UpdateProduct):Promise<UpdateResult>{ //it just update record but dont actually return updated record
           return await this.productRepository.update(id,recordToUpdate); 
          
        } */   

    // findOne(id:string): Product{
    //     return this.products.find(p=>p.id===id);
    // }

    // delete(id:string):Product[]{
    //     const index=this.products.findIndex(p=>p.id===id);
    //     this.products.splice(index,1);
    //     return this.products;
    // }
}
