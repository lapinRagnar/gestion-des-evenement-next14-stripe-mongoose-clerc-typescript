'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { ICategory } from "@/lib/mongoDb/models/category.model"
import { startTransition, useState } from "react"
import { Input } from "../ui/input"

type DropdownProps = {
  value?: string
  onChangeHandler?: () => void
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {

  const [categories, setCategories] = useState<ICategory[]>([])
  const [newCategory, setNewCategory] = useState<string>("")

  const handleAddCategory = () => {
    // TODO: add new category
  }

  return (
    <Select defaultValue={value} onValueChange={onChangeHandler}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 && categories.map((category) => (
          <SelectItem key={category._id} value={category._id} className="select-item p-regular-14">
            {category.name}
          </SelectItem>
        ))}

        <AlertDialog>
          <AlertDialogTrigger className="p-medium-16 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-gray-100 focus:text-red-300">Open</AlertDialogTrigger>
          <AlertDialogContent className="bg-gray-400">
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input 
                  type="text" 
                  placeholder="Category name " 
                  className="input-field mt-3" 
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>


      </SelectContent>
    </Select>

  )
}

export default Dropdown