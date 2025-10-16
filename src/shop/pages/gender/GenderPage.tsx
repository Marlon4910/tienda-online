import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useParams } from "react-router"
import { useProducts } from '../../hook/useProducts';

export const GenderPage = () => {
    const { gender } = useParams();
    const { data } = useProducts();
    const genderLabel =
        gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';
    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`} />

            <ProductsGrid products={data?.products || []} />


            <CustomPagination totalPages={data?.pages || 1} />
        </>
    )
}
