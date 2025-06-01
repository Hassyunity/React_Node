import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

interface Product {
  id: number;
  name: string;
  price: number;
}

let products: Product[] = [
  { id: 1, name: "Bolo", price: 200 },
  { id: 2, name: "Gouty", price: 1500 }
];

app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.post('/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newProduct: Product = {
    id: Date.now(),
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete('/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(204).send();
});

app.listen(3001, () => {
  console.log('API en cours sur http://localhost:3001');
});
