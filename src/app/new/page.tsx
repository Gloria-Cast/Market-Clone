"use client"

import GenericInput from "@/components/GenericInput";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import UploaderImage from "../../components/UploaderImage"
import {useState} from "react"
import { addForm } from "../actions/addForm";

export default function NewPostPage() {

    const [files, setFiles] = useState<UploadResponse[]>([])

    async function handleSubmitForm(formData: FormData) {
       formData.set("files", JSON.stringify(files))
       const response = await addForm(formData)
       console.log({response})
    }

    return (
        <form action={handleSubmitForm} className="max-w-screen-xl mx-auto flex sm:flex-col xl:flex-row xl:items-start sm:items-center gap-8">
            <UploaderImage
                files={files}
                setFiles={setFiles}
            />
            <div className="flex flex-col lg:justify-start sm:justify-center lg:items-start sm:items-center sm:mt-3 lg:mt-6">
                <GenericInput label="Title" placeholder="Enter the title of your product" id="title" name="title" />
                <GenericInput label="Price" placeholder="Enter the price" id="price" name="price" />
                <div>
                    <label className="">Category</label>
                    <select name="category" id="category">
                        <option value="0">Ingresa una opcion</option>
                        <option id="cars">Cars1</option>
                        <option id="electronics">Electronics</option>
                        <option id="properties">Properties</option>
                    </select>
                </div>
                <GenericInput label="Descritpion"  placeholder="Enter the description" id="description" name="description" />
                <GenericInput label="Phone Number" placeholder="mobile: +" id="phoneNumber" name="phoneNumber" />
                <GenericInput label="Location"  placeholder="Enter your location" id="location" name="location" />
                <button className="py-2 mt-2 mb-4 lg:ml-0 sm:mx-auto px-2 md:w-48 sm:w-60 bg-blue-700 rounded-md text-white hover:scale-95 font-medium text-lg text-center hover:bg-blue-200 hover:text-black hover:transition-all">
                    Publish
                </button>
            </div>
        </form>
    )
}