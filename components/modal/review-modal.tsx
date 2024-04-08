import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "../modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Dropdown } from "../ui/dropdown";
import { preferences } from "@/lib/data";
import toast from "react-hot-toast";
import { CircleCheckBig } from "lucide-react";

const formSchema = z.object({
  review: z.string().min(1, {
    message: "Review must be at least 1 characters.",
  }),
  anonymous: z.boolean(),
  parkingLot: z.boolean(),
  freeWifi: z.boolean(),
  nightlife: z.boolean(),
  petStore: z.boolean(),
  hospital: z.boolean(),
  childcare: z.boolean(),
  adultHome: z.boolean(),
  gym: z.boolean(),
  schools: z.boolean(),
  security: z.boolean(),
});

interface ReviewModalProps {
  isOpen: boolean;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, setIsopen }) => {
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
      anonymous: false,
      parkingLot: false,
      freeWifi: false,
      nightlife: false,
      petStore: false,
      hospital: false,
      childcare: false,
      adultHome: false,
      gym: false,
      schools: false,
      security: false,
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onClose = () => {
    setIsopen(false);
  };

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    console.log(formData);
    form.reset();
    onClose();
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } p-4 max-w-sm w-full bg-[#F2FDF2] border border-[#0F920F] rounded-sm pointer-events-auto`}
      >
        <div className="flex items-center justify-center gap-2 text-[#0F920F]">
          <CircleCheckBig className="size-4" />
          <p>Review Submitted</p>
        </div>
      </div>
    ));
  };

  return (
    <Modal
      title="Review Location"
      description="Bonny and Clyde Street, Ajao Estate, Lagos"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
          <Dropdown>
            <div className="p-4 w-full flex flex-wrap justify-between gap-4">
              {preferences.map((preference) => (
                <FormField
                  key={preference.name}
                  control={form.control}
                  name={preference.name}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>{preference.label}</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </Dropdown>

          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Write Review</FormLabel>
                <FormControl>
                  <textarea
                    className="flex min-h-[140px] w-full rounded-md border bg-background px-3 py-2 text-sm"
                    placeholder="Placeholder"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="anonymous"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Post as Anonymous</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <Button
              className="flex-grow"
              type="submit"
              disabled={!form.formState.isValid && !form.formState.isDirty}
            >
              SUBMIT
            </Button>
            <Button className="flex-grow" variant="outline" onClick={onClose}>
              CANCEL
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default ReviewModal;
