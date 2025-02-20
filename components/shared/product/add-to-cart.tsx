'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Plus, Minus } from 'lucide-react';
import { Cart, CartItem } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions';

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const response = await addItemToCart(item);

    if (!response.success) {
      toast({
        variant: 'destructive',
        description: response.message,
      });

      return;
    }

    // Handle successful addition to cart
    toast({
      description: response.message,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Go to cart"
          onClick={() => router.push('/cart')}
        >
          Go To Cart
        </ToastAction>
      ),
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    const response = await removeItemFromCart(item.productId);

    toast({
      variant: response.success ? 'default' : 'destructive',
      description: response.message,
    });
    return;
  };

  // Check if item is in cart
  const existItem = cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" className="h-8 w-4" onClick={handleRemoveFromCart}>
        <Minus />
      </Button>
      <span className="px-4">{existItem.qty}</span>
      <Button type="button" variant="outline" className="h-8 w-4" onClick={handleAddToCart}>
        <Plus />
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus /> Add To Cart
    </Button>
  );
};

export default AddToCart;
