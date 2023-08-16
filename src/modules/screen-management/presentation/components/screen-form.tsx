"use client"

import React, { ReactElement } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Screen } from "@/modules/screen-management/domain/types"
import {
  screenFormSchema,
  ScreenFormValues,
} from "@/modules/screen-management/presentation/components/form-config"
import { useScreenActions } from "@/modules/screen-management/presentation/hooks/use-screen-actions"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface ScreenFormProps {
  screen?: Screen
}

export default function ScreenForm({ screen }: ScreenFormProps): ReactElement {
  const { createScreen, updateScreen } = useScreenActions()

  const form = useForm<ScreenFormValues>({
    resolver: zodResolver(screenFormSchema),
    values: screen,
  })

  const onSubmit = (values: ScreenFormValues): void => {
    if (screen) updateScreen(values, screen.id)
    else createScreen(values)
  }

  return (
    <Card>
      <Form {...form}>
        <CardHeader>
          <CardTitle>{screen ? "Edit" : "Create"} Screen</CardTitle>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }): ReactElement => (
                <FormItem>
                  <FormLabel>Screen Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }): ReactElement => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button>{screen ? "Update" : "Create"}</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
