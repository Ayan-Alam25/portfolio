"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 md:py-12"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
          Thank you!
        </h3>
        <p className="text-base md:text-lg">
          Your message has been sent successfully.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6">
      {/* Stylish Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Have a question or want to work together? Drop me a message below!
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 w-20 mx-auto mt-4 bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </motion.div>

      {/* Form Section */}
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4 md:space-y-6"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div>
            <Input
              placeholder="Your Name"
              {...form.register("name")}
              error={form.formState.errors.name?.message}
              className="w-full"
            />
          </div>
          <div>
            <Input
              placeholder="Your Email"
              type="email"
              {...form.register("email")}
              error={form.formState.errors.email?.message}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            rows={5}
            {...form.register("message")}
            error={form.formState.errors.message?.message}
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 md:py-2 px-4 text-white md:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.form>
    </div>
  );
}
