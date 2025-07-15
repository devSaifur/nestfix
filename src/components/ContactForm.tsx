'use client'

import { contactFormSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

type ContactFormValues = {
  name: string
  email: string
  phone: string
  details: string
}

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      details: ''
    },
    resolver: zodResolver(contactFormSchema)
  })

  const isPending = form.formState.isSubmitting

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      toast.success('Your message has been sent successfully!')
      form.reset()
    } catch (err) {
      console.error('Error sending contact form:', err)
      toast.error('Failed to send your message. Please try again later.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex max-w-72 flex-col gap-y-3 text-white md:max-w-md"
      >
        <FormField
          control={form.control}
          name="name"
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="details"
          rules={{ required: 'Details are required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Textarea placeholder="How can we help you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="ml-auto inline-flex rounded-md bg-primary px-8 py-2 text-black transition-colors hover:bg-primary-accent"
          disabled={isPending}
        >
          Submit
        </button>
      </form>
    </Form>
  )
}

export default ContactForm
