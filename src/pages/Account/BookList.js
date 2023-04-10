import React from 'react'

export const BookList = ({ data }) => {
    const books = ['art', 'science', 'history','Geography','candle','makertmover']

    return (
        <div>
            <p>BookList w</p>

            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Products</h2>
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data.map((eachbook) => (
                        <a href={'books/'+eachbook.path} class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">data</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
                        </a>

                    ))}
                </div>
            </div>

        </div>

    )
}
