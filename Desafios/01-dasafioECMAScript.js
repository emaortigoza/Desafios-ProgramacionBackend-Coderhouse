class ProductManager{
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        
        for (let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`code ${code} is repeated`);
                break;
            }  
        }


        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.#getMaxId() + 1
        }
        if(!Object.values(product).includes(undefined)){
           this.products.push(product); 
        }else {
            console.log('All fields are required')
        }
        
    };

    #getMaxId(){
        let maxId = 0;
        this.products.map((product) => {
          if(product.id > maxId) maxId = product.id;  
        })
        return maxId;
    };

    getProducts(){
        return this.products;
    }

    
    
    getProduct(id){
        return this.products.find((product) => product.id === id)
    }
    getProductById(id){
        !this.getProduct(id) ? console.log('Not found') : console.log(this.getProduct(id));
    }


};

const productManager = new ProductManager();
//Arreglo vacio
console.log(productManager.getProducts());

//Agregamos productos
productManager.addProduct('Computadora', 'computadora HP', 180000, 'sarasa', 'cp122', 50 );
productManager.addProduct('Computadora', 'computadora HP', 180000, 'sarasa', 'cp123', 50 );
productManager.addProduct('Compu', 'computadora Ph', 180000, 'sarasa', 'cp124', 50 );
productManager.addProduct( 'computadora Ph', 180000, 'sarasa', 'cp125', 50 );

console.log(productManager.getProducts());
//validacion de "CODE"
productManager.addProduct('tv', 'tv SAMSUNG', 500000, 'sarasa', 'cp124', 50)

//Busqueda de producto por ID
productManager.getProductById(5);