"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    IconFilter,
    IconFilterCode,
    IconFilterDollar,
    IconFilterSearch,
} from "@tabler/icons-react";
import { filterAction } from "./FilterAction";
const items = [
    {
        id: "20-50",
        label: "$20.00 - $50.00",
    },
    {
        id: "51-100",
        label: "$51.00 - $100.00",
    },
    {
        id: "100-200",
        label: "$100.00 - $200.00",
    },
    {
        id: "200-500",
        label: "$200.00 - $500.00",
    },
] as const;
const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
});
const ProductFilter = () => {
    // const router = useRouter();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: ["20-50", "51-100"],
        },
    });
    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const { items } = data;



    };

    return (
        <Card className="p-2 max-w-56n w-full">
            <CardTitle className="border-l-4 hover:border-l-blue-200 transition-all pl-1 text-xl font-bold">
                Price Range
            </CardTitle>
            <CardContent className="mt-2 p-2">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 w-full"
                    >
                        <FormField
                            control={form.control}
                            name="items"
                            render={() => (
                                <FormItem>
                                    {items.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="items"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-center space-x-2 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        );
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="text-sm font-normal">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit">
                            Filter <IconFilterSearch className=" size-4 ml-1" />
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card >
    );
};

export default ProductFilter;
