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
import { Checkbox } from "@/components/ui/checkbox"


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

        {/* le champ price */}
        <div className="flex flex-col gap-5 md:flex-row">


          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">

                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 ">
                    <Image 
                      src={'/assets/icons/dollar.svg'}
                      alt="dollar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">Start Date</p>
                    
                    <Input 
                      type="number" 
                      placeholder="Price" 
                      {...field} 
                      className="input-field p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer" 
                    />



                    
                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem >

                          <FormControl>
                            <div className="items-center flex ">

                              <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Free ticket</label>
                              
                              <Checkbox 
                                id="isFree"
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                className="mr-2 h-5 w-5 border-2 border-primary-500"
                              />

                            </div>

                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />




                  </div>

                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
            
          {/* le url  */}

          <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">

                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 ">
                      <Image 
                        src={'/assets/icons/link.svg'}
                        alt="link"
                        width={24}
                        height={24}
                      />
                      <Input placeholder="URL" {...field} className="input-field" />

                    </div>

                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

        </div>


        <Button 
          type="submit"
          size={'lg'}
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        > 
          {form.formState.isSubmitting ? (
            "Submitting..."
          ): (
            `${type} Event`
          ) }
          
        </Button>


      </form>
    </Form>
  )
}

export default EventForm