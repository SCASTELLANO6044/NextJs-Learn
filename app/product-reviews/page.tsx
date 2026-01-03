import { Suspense } from "react";

import { Product } from "../comments/product";
import { Reviews } from "../comments/reviews";

export default function ProductReview(){
    return (
        <div>
            <h1>Product reviews</h1>
            <Suspense fallback={<p>Loading product details...</p>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<p>Loading reviews details...</p>}>
                <Reviews/>
            </Suspense>
        </div>
    );
}