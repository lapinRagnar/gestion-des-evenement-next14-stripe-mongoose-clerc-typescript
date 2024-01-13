'use client'

// 1. on fait ca
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


// 3.on install Button et Input. Et on importe comme ça
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/validator"
import { eventDefaultValues } from "@/constants"
import Dropdown from "@/components/shared/Dropdown"
import { Textarea } from "@/components/ui/textarea"
import {FileUploader} from "@/components/shared/FileUploader"
import { useState } from "react"
import Image from "next/image"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Date } from "mongoose"


// 1. on fait ca pour la validation


type EventFormProps = {
  userId: string | null
  type: "Create" | "Update"
}

const EventForm = ({ userId, type }: EventFormProps) => {

  const [files, setFiles] = useState<File[]>([])

  // 2. Define your form.
  const initialValues = eventDefaultValues

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }



  return (

    // 4. on dessine le formulaire
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        {/* champ title et category */}
        <div className="flex flex-col gap-5 md:flex-row">

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event title" {...field} className="input-field" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        
        {/* champ description et image */}
        <div className="flex flex-col gap-5 md:flex-row">
          
          <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-40">
                    <FileUploader 
                      onFieldChange={field.onChange}
                      imageUrl={field.value}
                      setFiles={setFiles}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        </div>
        
        {/* location */}
        <div className="flex flex-col gap-5 md:flex-row">

          <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">

                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 ">
                      <Image 
                        src={'/assets/icons/location-grey.svg'}
                        alt="calendar"
                        width={24}
                        height={24}
                      />
                      <Input placeholder="Event location or Online" {...field} className="input-field" />

                    </div>

                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

        </div>


        {/* start et end date*/}
        <div className="flex flex-col gap-5 md:flex-row">

          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">

                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 ">
                    <Image 
                      src={'/assets/icons/calendar.svg'}
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">Start Date</p>
                    
                    <DatePicker 
                      selected={field.value} 
                      onChange={(date: Date) => field.onChange(date)} 
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat={'dd:MM:yyyy h:mm aa'}
                      wrapperClassName="datePicker"
                      className="cursor-pointer"
                    />

                  </div>

                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">

                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 ">
                    <Image 
                      src={'/assets/icons/calendar.svg'}
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">Start Date</p>
                    
                    <DatePicker 
                      selected={field.value} 
                      onChange={(date: Date) => field.onChange(date)} 
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat={'dd:MM:yyyy h:mm aa'}
                      wrapperClassName="datePicker"
                      className="cursor-pointer"
                    />

                  </div>

                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

        </div>




        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default EventForm