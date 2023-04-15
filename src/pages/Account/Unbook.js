import React from 'react'
import BookCard from './Components/BookCard'
import Book from './Book'
import {baseUrl} from '../../appState/baseUrl'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"


export const Unbook = ({ data }) => {

    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data?.map((eachbook) => (
                        <a  className="group" style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src={baseUrl+eachbook.image}  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-[20rem] w-[100%] object-fit object-center group-hover:opacity-75" />
                            </div>
        
                            <h2 className="mt-4 text-lg text-gray-700">{eachbook.title}</h2>
                            <p className="mt-1 text-lg font-medium text-gray-900">{eachbook.price+' Tsh'}</p>
                        </a>
                    ))}
                </div>
            </div>

        </div>

    )
}

