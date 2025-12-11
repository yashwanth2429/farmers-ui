import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Plus, Edit, Trash2 } from 'lucide-react';

const Products = () => {
    const products = [
        { id: 1, name: 'Organic Tomatoes', price: '$2.50/kg', stock: '500 kg', status: 'In Stock' },
        { id: 2, name: 'Fresh Potatoes', price: '$1.20/kg', stock: '1200 kg', status: 'In Stock' },
        { id: 3, name: 'Red Onions', price: '$1.80/kg', stock: '300 kg', status: 'Low Stock' },
        { id: 4, name: 'Carrots', price: '$1.50/kg', stock: '0 kg', status: 'Out of Stock' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Products</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                                    product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                }`}>
                                {product.status}
                            </span>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Price:</span>
                                    <span className="font-medium">{product.price}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Stock:</span>
                                    <span className="font-medium">{product.stock}</span>
                                </div>
                            </div>
                            <div className="mt-6 flex space-x-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                    <Edit className="mr-2 h-4 w-4" /> Edit
                                </Button>
                                <Button variant="destructive" size="sm" className="flex-1">
                                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Products;
